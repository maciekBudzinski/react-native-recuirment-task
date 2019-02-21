import * as listActions from './actionTypes';

const initialState = {
  lists: [],
  currentOpenListIndex: null,
};

export default (state = initialState, action) => {
  const { lists, currentOpenListIndex } = state;
  switch (action.type) {
    case listActions.ADD: {
      const { name, shop, color } = action.payload;
      return {
        ...state,
        lists: [
          ...lists,
          {
            id: Date.now(),
            lastEditedTime: new Date(),
            name,
            shop,
            color,
            products: [],
          },
        ],
      };
    }
    case listActions.EDIT: {
      const { id, name, shop, color } = action.payload;
      return {
        ...state,
        lists: lists.map(list => (list.id === id ? { ...list, name, shop, color, lastEditedTime: new Date() } : list)),
      };
    }
    case listActions.DELETE: {
      const { id: deletingId } = action.payload;
      return {
        ...state,
        lists: lists.filter(({ id }) => id !== deletingId),
      };
    }

    case listActions.OPEN: {
      const { id: openingId } = action.payload;
      return {
        ...state,
        currentOpenListIndex: lists.findIndex(({ id }) => id === openingId),
      };
    }

    case listActions.ADD_PRODUCT: {
      const { name, amount, unit } = action.payload;
      const newProduct = { id: Date.now(), name, amount, unit, checked: false };
      return {
        ...state,
        lists: lists.map((list, index) => (index === currentOpenListIndex ? { ...list, products: [...list.products, { ...newProduct }] } : list)),
      };
    }

    case listActions.EDIT_PRODUCT: {
      return {
        ...state,
      };
    }

    case listActions.DELETE_PRODUCT: {
      const { id: deletingId } = action.payload;
      return {
        ...state,
        lists: lists.map((list, index) =>
          index === currentOpenListIndex ? { ...list, products: list.products.filter(({ id }) => id !== deletingId) } : list
        ),
      };
    }

    case listActions.TOGGLE_PRODUCT: {
      const { id } = action.payload;
      return {
        ...state,
        lists: lists.map((list, index) =>
          index === currentOpenListIndex
            ? { ...list, products: list.products.map(product => (product.id === id ? { ...product, checked: !product.checked } : product)) }
            : list
        ),
      };
    }

    default: {
      return state;
    }
  }
};
