// import actions
import { LOADING_STATUS as S_LOADING_STATUS } from '../redux/actions/search'
import { LOADING_STATUS as P_LOADING_STATUS } from '../redux/actions/product'

// export
module.exports = {
    search: {
        query: '',
        status: S_LOADING_STATUS.success,
        items: []
    },
    product: {
        product_id: '',
        status: P_LOADING_STATUS.success,
        item: []
    }
}
