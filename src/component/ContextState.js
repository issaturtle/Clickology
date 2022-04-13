import React, { createContext, useContext, useReducer } from 'react';
export const ProductContext = createContext();
// => {return xyz} == => ()
export const StateProv = ({ reducer, initState, children }) => (
	<ProductContext.Provider value={useReducer(reducer, initState)}>
		{children}
	</ProductContext.Provider>
);
export const useStateVal = () => useContext(ProductContext);
