import React, { createContext, useContext, useReducer } from 'react';
//"store" that contain props for all components without passing it through parent to child
export const ProductContext = createContext();

export const StateProv = ({ reducer, initState, children }) => (
	<ProductContext.Provider value={useReducer(reducer, initState)}>
		{children}
	</ProductContext.Provider>
);
export const useStateVal = () => useContext(ProductContext);
