// Module dependencies
const express = require('express')
const router = express.Router()
const request = require('request')
const async = require("async")

// get package.json
var package = require('../package.json')

// get items router
router.get('/items', function (req, res) {

    // request options object
    const options = {
        method: 'POST',
        uri: 'https://api.mercadolibre.com/sites/MLA/search',
        qs: {
            q: req.query.q,
            limit: 4
        },
        json: true
    }

    // request
    request(options,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.json(buildSearch(body))
            } else {
                res.json(error)
            }
        }
    )
})

// get item router
router.get('/items/:id', function(req, res) {

    // async
    async.map(
        returnUris(req), function(options, callback) {
        request(options, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                callback(null, body)
            } else {
                callback(error || response.statusCode)
            }
        })
    }, function(err, results) {
        if (!err) {
            res.json(buildItem(results[0], results[1]))
        } else {
            res.json(error)
        }
    })
})

/**
 * returnUris
 */
function returnUris(req) {
    return [{
        uri: 'https://api.mercadolibre.com/items/'+req.params.id,
        json: true
    }, {
        uri: 'https://api.mercadolibre.com/items/'+req.params.id+'/description',
        json: true
    }]
}

/**
 * return author
 */
function returnAuthor() {
    return {
        "author": {
            "name": package.author.name,
            "lastname": package.author.last_name
        }
    }
}

/**
 * buildItem firmado
 */
function buildItem(product, description) {

    // get author_obj
    var author_obj = returnAuthor()
    var item = {
        "item": {
            "id": product.id,
            "title": product.title,
            "price": {
            "currency": product.currency_id,
            "amount": product.price,
            "decimals": 2,
        },
        "picture": product.thumbnail,
        "condition": product.condition,
        "free_shipping": product.shipping.free_shipping,
        "sold_quantity": product.sold_quantity,
        "description": description.text
        }
    }

    // return merged object
    return Object.assign(author_obj,item)
}

/**
 * buildSearch firmado
 */
function buildSearch(body) {
    // get author_obj
    var author_obj = returnAuthor()
    var search = {
        "categories": getCategories(body.filters),
        "items": getProducts(body.results)
    }

    // return merged object
    return Object.assign(author_obj,search)
}

/**
 * getCategories
 */
function getCategories(filters) {
    const categories = filters.filter((filter) => { return filter.id == "category"});
    if (categories[0] && categories[0].values && categories[0].values[0]) {
        return categories[0].values[0].path_from_root.map((category) => {
            return category.name
        });
    } else {
        return []
    }
}

/**
 * getProducts
 */
function getProducts(results) {
    return results.map((result) => {
        return {
            "id": result.id,
            "title": result.title,
            "price": {
                "currency": result.currency_id,
                "amount": result.price,
                "decimals": 2
            },
            "picture": result.thumbnail,
            "condition": result.condition,
            "free_shipping": result.shipping.free_shipping,
            "state": result.address.state_name
        }
    })
}

// export
module.exports = router;
