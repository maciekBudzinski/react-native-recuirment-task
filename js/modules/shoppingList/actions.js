import uuid from 'uuid/v4';
import * as types from './actionTypes';

export const addList = (name, shop, color) => ({
  type: types.ADD,
  payload: {
    id: uuid(),
    dateCreated: new Date(),
    name,
    shop,
    color,
  },
});

export const editList = (id, name, shop, color) => ({
  type: types.EDIT,
  payload: {
    id,
    name,
    shop,
    color,
  },
});

export const deleteList = id => ({
  type: types.DELETE,
  payload: { id },
});

export const toggleListActive = () => ({
  type: types.TOGGLE_ACTIVE,
});

export const openList = id => ({
  type: types.OPEN,
  payload: { id },
});

export const changeSortOrder = () => ({
  type: types.CHANGE_SORT_ORDER,
});
