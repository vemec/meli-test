// Module dependencies
const express = require('express')
const router = express.Router()
const axios = require('axios')

// get package.json
var packageJson = require('../package.json')

// get url config
var apiConfig = require('./config.json')

// get items router
router.get('/items', function (req, res) {

    // check empty param
    if (!req.query.q) {
        return res.json({ error: 'No param was sent.' })
    }

    // axios config object
    const config = {
        params: {
            q: req.query.q,
            limit: 4
        }
    }

    // axios get
    axios.get(apiConfig.url.search, config)
        .then(function (response) {
            if (response.data.results.length === 0) {
                const error = res.json({ error: 'There are no results that match your search.' })
                return Promise.reject(error)
            }
            else {
                if (response.status !== 200) {
                    const error = res.json({ error: 'Oops! Something failed in the search' })
                    return Promise.reject(error)
                }

                if (response.status === 200) {
                    res.json(buildSearch(response.data))
                }
            }
        })
        .catch(function (error) {
            return error
        })
})

// get item router
router.get('/items/:id', function(req, res) {

    Promise.all([
        axios.get(apiConfig.url.items+req.params.id),
        axios.get(apiConfig.url.items+req.params.id+'/description')
    ])
    .then(([product, product_description]) =>  res.json(buildItem(product.data, product_description.data)))
    .catch(error => res.json({ error: 'Item with id '+ req.params.id +' not found.'}))
})

/**
 * return author
 */
function returnAuthor() {
    return {
        "author": {
            "name": packageJson.author.name,
            "lastname": packageJson.author.last_name
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
            "description": description
        }
    }

    // return merged object
    return Object.assign(
        author_obj,
        item
    )
}

/**
 * buildSearch firmado
 */
function buildSearch(body) {
    // get author_obj
    var author_obj = returnAuthor()
    var search = {
        "categories": getCategories(body.filters, body.query),
        "items": getProducts(body.results)
    }

    // return merged object
    return Object.assign(
        author_obj,
        search
    )
}

/**
 * getCategories
 */
function getCategories(filters, query) {

    // me fijo si tengo contenido en category
    const categories = filters.filter((filter) => { return filter.id == "category"})

    // si tengo...
    if (categories[0] && categories[0].values && categories[0].values[0]) {

        // array de categorias
        return categories[0].values[0].path_from_root.map((category) => { return category.name })
    } else {
        var result = [query]
        return result
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
