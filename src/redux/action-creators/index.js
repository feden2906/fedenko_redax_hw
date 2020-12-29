import {SET_PRODUCTS} from '../action-types'
import {services} from "../../services";

const {productsService} = services



export const setProducts = () => (dispatch) => {
    console.log(dispatch);
    console.log(SET_PRODUCTS);
    productsService
        .getProducts()
        .then(response => response.json())
        .then(products => {

            console.log(products);
            dispatch({type:SET_PRODUCTS, payload: products})
        })
}
