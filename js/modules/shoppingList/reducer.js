import * as listActions from './actionTypes';

const initialState = {
  lists: {},
  currentOpenListId: null,
  isSortByNewest: true,
};

export default (state = initialState, action) => {
  const { lists, currentOpenListId } = state;
  switch (action.type) {
    case listActions.ADD: {
      const { id, dateCreated, name, shop, color } = action.payload;
      const newList = {
        id,
        name,
        shop,
        color,
        products: {},
        isActive: true,
        dateCreated,
      };
      return {
        ...state,
        lists: {
          ...lists,
          [id]: newList,
        },
      };
    }
    case listActions.EDIT: {
      const { id, name, shop, color } = action.payload;
      const editedList = { ...lists[id], name, shop, color };
      return {
        ...state,
        lists: {
          ...lists,
          [id]: editedList,
        },
      };
    }
    case listActions.DELETE: {
      const { id } = action.payload;
      const { [id]: omit, ...rest } = lists;
      return {
        ...state,
        lists: {
          ...rest,
        },
      };
    }

    case listActions.OPEN: {
      const { id } = action.payload;
      return {
        ...state,
        currentOpenListId: id,
      };
    }

    case listActions.TOGGLE_ACTIVE: {
      return {
        ...state,
        lists: {
          ...lists,
          [currentOpenListId]: {
            ...lists[currentOpenListId],
            isActive: !lists[currentOpenListId].isActive,
          },
        },
      };
    }

    case listActions.ADD_PRODUCT: {
      const { id, name, amount, unit } = action.payload;
      const newProduct = { id, name, amount, unit, checked: false };
      return {
        ...state,
        lists: {
          ...lists,
          [currentOpenListId]: {
            ...lists[currentOpenListId],
            products: {
              ...lists[currentOpenListId].products,
              [id]: newProduct,
            },
          },
        },
      };
    }

    case listActions.DELETE_PRODUCT: {
      const { id } = action.payload;
      const { [id]: omit, ...rest } = lists[currentOpenListId].products;
      return {
        ...state,
        lists: {
          ...lists,
          [currentOpenListId]: {
            ...lists[currentOpenListId],
            products: rest,
          },
        },
      };
    }

    case listActions.TOGGLE_PRODUCT: {
      const { id } = action.payload;
      return {
        ...state,
        lists: {
          [currentOpenListId]: {
            ...lists[currentOpenListId],
            products: {
              ...lists[currentOpenListId].products,
              [id]: {
                ...lists[currentOpenListId].products[id],
                checked: !lists[currentOpenListId].products[id].checked,
              },
            },
          },
        },
      };
    }

    case listActions.CHANGE_SORT_ORDER: {
      return {
        ...state,
        isSortByNewest: !state.isSortByNewest,
      };
    }

    default: {
      return state;
    }
  }
};
