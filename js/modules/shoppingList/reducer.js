import * as types from './actionTypes';

const initialState = {
  lists: {},
  currentOpenListId: null,
  isSortByNewest: true,
};

export default (state = initialState, action) => {
  const { lists, currentOpenListId } = state;
  switch (action.type) {
    case types.ADD: {
      const { id, dateCreated, name, shop, color } = action.payload;
      const newList = {
        id,
        name,
        shop,
        color,
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
    case types.EDIT: {
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
    case types.DELETE: {
      const { id } = action.payload;
      const { [id]: omit, ...rest } = lists;
      return {
        ...state,
        lists: {
          ...rest,
        },
      };
    }

    case types.OPEN: {
      const { id } = action.payload;
      return {
        ...state,
        currentOpenListId: id,
      };
    }

    case types.TOGGLE_ACTIVE: {
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

    case types.CHANGE_SORT_ORDER: {
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
