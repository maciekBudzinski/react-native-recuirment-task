import omit from 'lodash.omit';
import * as types from './actionTypes';
import * as listTypes from '../shoppingList/actionTypes';

const initialState = {
  products: {},
};

export default (state = initialState, action) => {
  const { products } = state;
  switch (action.type) {
    case types.ADD: {
      const { listId, id, name, amount, unit } = action.payload;
      const newProduct = { listId, id, name, amount, unit, checked: false };
      return {
        ...state,
        products: {
          ...products,
          [id]: newProduct,
        },
      };
    }

    case types.DELETE: {
      const { id } = action.payload;
      const { [id]: omit, ...rest } = products;
      return {
        ...state,
        products: {
          ...rest,
        },
      };
    }

    case listTypes.DELETE: {
      const { id } = action.payload;
      const productsToDeleteIds = Object.values(products)
        .filter(({ listId }) => listId === id)
        .map(({ id }) => id);

      const rest = omit(products, [...productsToDeleteIds]);

      return {
        ...state,
        products: rest,
      };
    }

    case types.TOGGLE: {
      const { id } = action.payload;
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...products[id],
            checked: !products[id].checked,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
