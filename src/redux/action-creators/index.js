import {SET_PRODUCTS, TOGGLE_ITEM_IN_CART, TOGGLE_ITEM_IN_WISHLIST} from '../action-types'
import {services} from "../../services";

const {productsService} = services

export const setProducts = () => (dispatch) => {

    productsService
        .getProducts()
        .then(response => response.json())
        .then(products => {dispatch({type:SET_PRODUCTS, payload: products})})
}

export const toggleItemInCart = (item) => ({type: TOGGLE_ITEM_IN_CART, payload: item})
export const toggleItemInWishList = (item) => ({type: TOGGLE_ITEM_IN_WISHLIST, payload: item})