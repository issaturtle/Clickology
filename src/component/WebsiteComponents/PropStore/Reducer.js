//Global store for application, initial state
export const initState = {
	cart: [],
	userN: null,
	valCart: 0,
};

export const calculateCart = (cart) => {
	let val = 0;
	cart.forEach((item) => {
		val += item.price;
	});
	return val;
};
/**
 *
 * @param {the state of the store} state
 * @param {action of the user} action
 * @returns a few functions to manipulate carts
 */
const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_STATE_USER':
			return {
				...state,
				userN: action.userN,
			};
		case 'ADD_CART':
			return {
				//keep original state, add item into basket
				...state,
				cart: [...state.cart, action.item],
			};
		case 'REMOVE_CART':
			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.id
			);
			let newCart = [...state.cart];
			if (index >= 0) {
				newCart.splice(index, 1);
			}

			return {
				...state,
				cart: newCart,
			};

		default:
			return state;
	}
};
export default reducer;
