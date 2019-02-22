import uuid from 'uuid/v4';
import * as listActions from './actionTypes';
import { deepClone } from '../../config/helpers';

const initialState = {
  lists: {},
  currentOpenListId: null,
};

export default (state = initialState, action) => {
  const { lists, currentOpenListId } = state;
  const listsCopy = deepClone(lists);
  switch (action.type) {
    case listActions.ADD: {
      const { id, lastEditedTime, name, shop, color } = action.payload;
      const newList = {
        id,
        lastEditedTime,
        name,
        shop,
        color,
        products: {},
        isActive: true,
      };
      const listsCopy = deepClone(lists);
      listsCopy[newList.id] = newList;

      return {
        ...state,
        lists: listsCopy,
      };
    }
    case listActions.EDIT: {
      const { id, name, shop, color } = action.payload;
      listsCopy[id] = { ...lists[id], name, shop, color, lastEditedTime: new Date() };

      return {
        ...state,
        lists: listsCopy,
      };
    }
    case listActions.DELETE: {
      const { id } = action.payload;
      delete listsCopy[id];
      return {
        ...state,
        lists: listsCopy,
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
      listsCopy[currentOpenListId] = { ...lists[currentOpenListId], isActive: !lists[currentOpenListId].isActive };

      return {
        ...state,
        lists: listsCopy,
      };
    }

    case listActions.ADD_PRODUCT: {
      const { name, amount, unit } = action.payload;
      const newProduct = { id: uuid(), name, lastEditedTime: new Date(), amount, unit, checked: false };
      listsCopy[currentOpenListId].products[newProduct.id] = newProduct;

      return {
        ...state,
        lists: listsCopy,
      };
    }

    case listActions.DELETE_PRODUCT: {
      const { id } = action.payload;
      delete listsCopy[currentOpenListId].products[id];

      return {
        ...state,
        lists: listsCopy,
      };
    }

    case listActions.TOGGLE_PRODUCT: {
      const { id } = action.payload;
      listsCopy[currentOpenListId].products[id].checked = !lists[currentOpenListId].products[id].checked;

      return {
        ...state,
        lists: listsCopy,
      };
    }

    default: {
      return state;
    }
  }
};
