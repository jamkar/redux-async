import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const response = await fetch('https://redux-dbe7b-default-rtdb.firebaseio.com/cart.json', {
      method: 'GET',
    });
    const cartData = await response.json();
    if (cartData) {
      dispatch(
        cartActions.replaceCart({
          items: cartData.items ?? [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    fetch('https://redux-dbe7b-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  };
};
