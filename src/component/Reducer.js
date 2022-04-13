//Global store for application
export const initState = {
	cart: [],
};
export const calculateCart = (cart) => {
	let val = 0;
	cart.forEach((item) => {
		val += item.price;
	});
	return val;
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CART':
			return {
				//keep original state, add item into basket
				...state,
				cart: [...state.cart, action.item],
			};
		default:
			return state;
	}
};
export default reducer;
