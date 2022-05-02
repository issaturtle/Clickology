//Global store for application, initial state
import img from "../../img/withoutsticker.PNG";
import rej from "../../img/reject.gif";
import sjinx from "../../img/fullycolored.PNG";
import dog from "../../img/dog.jpg";
import anya from "../../img/anya.png";
import ape from "../../img/ape.jpg";
import random from "../../img/top.png";
import monster from "../../img/monster.jpg";
import mutant from "../../img/Mutant.png";
export const initState = {
  cart: [],
  userN: null,
  valCart: 0,
  searchQuery: "",
  productList: [
    {},
    {
      id: "1",
      rating: 5,
      price: 12.99,
      title: "Rejection",
      image: rej,
      desc: "temp",
      reviews: [],
    },
    {
      id: "2",
      rating: 5,
      price: 13.99,
      title: "vaxxedDoggo",
      image: dog,
      desc: "temp",
      reviews: [
        {
          user: "Hung Nguyen",
          user_review: "Best doggo",
        },
        {
          user: "Hung Nguyen",
          user_review: "Best doggo2",
        },
      ],
    },
    {
      id: "3",
      rating: 5,
      price: 13.99,
      title: "pixels",
      image: random,
      rating: 5,
      desc: "temp",
      reviews: [],
    },
    {
      id: "4",
      rating: 5,
      price: 18.99,
      title: "Powder",
      image: sjinx,
      rating: 5,
      desc: "temp",
      reviews: [],
    },
    {
      id: "5",
      rating: 5,
      price: 18.99,
      title: "Anya",
      image: anya,
      rating: 5,
      desc: "temp",
      reviews: [],
    },
    {
      id: "6",
      rating: 5,
      price: 18.99,
      title: "Mutant",
      image: mutant,
      rating: 5,
      desc: "temp",
      reviews: [],
    },
    {
      id: "7",
      rating: 5,
      price: 11.99,
      title: "Bored Ape",
      image: ape,
      rating: 5,
      desc: "temp",
      reviews: [],
    },
    {
      id: "8",
      rating: 5,
      price: 50.99,
      title: "Jinx",
      image: img,
      rating: 5,
      desc: "temp",
      reviews: [],
    },
  ],
};

// export const calculateCart = (cart) => {
//   let val = 0;
//   cart.forEach((item) => {
//     val += item.price;
//   });
//   return val;
// };
export const calculate_cart = (cart) => {
  let val = 0;
  cart.forEach((item) => {
    if (item.amount > 1) {
      val += item.amount * item.price;
    } else {
      val += item.price;
    }
  });
  return parseFloat(val.toFixed(2));
};
export const calculate_cart_length = (cart) => {
  let val = 0;
  cart.forEach((item) => {
    if (item.amount > 1) {
      val += item.amount;
    } else {
      val += 1;
    }
  });
  return val;
};
export const find_product_index_cart = (cart, id) => {
  if (cart) {
    const ind = cart.findIndex((cartItem) => cartItem.id === id);
    return ind;
  } else {
    return -1;
  }
};
/**
 *
 * @param {the state of the store} state
 * @param {action of the user} action
 * @returns a few functions to manipulate carts
 */
const reducer = (state, action) => {
  switch (action.type) {
    // case "ADD_BASKET":
    //   let newBasket = [...state.basket];
    //   const ind = state.basket.findIndex(
    //     (cartItem) => cartItem.id === action.item.id
    //   );

    //   if (ind === -1) {
    //     newBasket = [...state.basket, action.item];
    //   } else {
    //     newBasket[ind].amount += 1;
    //   }
    //   return {
    //     ...state,
    //     basket: newBasket,
    //   };

    case "SET_STATE_USER":
      return {
        ...state,
        userN: action.userN,
      };
    case "ADD_CART":
      let newBasket = [...state.cart];
      const ind = state.cart.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      if (ind === -1) {
        newBasket = [...state.cart, action.item];
      } else {
        newBasket[ind].amount += 1;
      }
      return {
        ...state,
        cart: newBasket,
      };
      return {
        //keep original state, add item into basket
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_CART":
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
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.value,
      };
    default:
      return state;
  }
};
export default reducer;
