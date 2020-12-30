import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";

const initialState = {
  wishlist: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ITEM_IN_WISHLIST: {
      const updateWishList = state.wishlist.filter(
          (el) => el.id !== action.payload.id)

      if (updateWishList.length === state.wishlist.length) {
        updateWishList.push(action.payload)
      }

      return {...state, wishlist: updateWishList}
    }
    default: {
      return state
    }
  }
}
