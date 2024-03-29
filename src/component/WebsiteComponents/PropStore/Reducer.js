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
/**
 * Initial state of website
 */
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

/**
 * take in a cart and calculate total amount in cart
 * @param {array} cart
 * @returns {float} parseFloat
 */
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
/**
 * Calculate length of cart
 * @param {array} cart
 * @returns {int}
 */
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
/**
 * find the item in the cart based on id
 * return the amount for the item
 * @param {array} cart
 * @param {string} id
 * @returns {int}
 */
export const find_product_index_cart = (cart, id) => {
  if (cart) {
    const ind = cart.findIndex((cartItem) => cartItem.id === id);
    return cart[ind].amount;
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
    case "SET_STATE_USER":
      return {
        ...state,
        userN: action.userN,
      };
    case "ADD_CART":
      let newBasket = [...state.cart];
      let ind = newBasket.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );

      if (ind === -1) {
        newBasket = [...newBasket, action.item];
      } else {
        newBasket[ind].amount += 1;
      }
      console.log(newBasket);
      return {
        ...state,
        cart: newBasket,
      };
    case "REMOVE_CART":
      let newCart = [...state.cart];
      const index = newCart.findIndex((cartItem) => cartItem.id === action.id);

      if (index >= 0) {
        console.log(newCart.splice(index, 1));
      }
      console.log(newCart);
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
