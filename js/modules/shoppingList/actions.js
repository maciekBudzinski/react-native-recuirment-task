import uuid from 'uuid/v4';
import * as listActions from './actionTypes';

export const addList = (name, shop, color) => ({
  type: listActions.ADD,
  payload: {
    id: uuid(),
    lstEditedTime: new Date(),
    name,
    shop,
    color,
  },
});

export const editList = (id, name, shop, color) => ({
  type: listActions.EDIT,
  payload: {
    id,
    name,
    shop,
    color,
  },
});

export const deleteList = id => ({
  type: listActions.DELETE,
  payload: { id },
});

export const toggleListActive = () => ({
  type: listActions.TOGGLE_ACTIVE,
});

export const openList = id => ({
  type: listActions.OPEN,
  payload: { id },
});

export const addProduct = (name, amount, unit) => ({
  type: listActions.ADD_PRODUCT,
  payload: { id: uuid(), name, amount, unit },
});

export const editProduct = (listId, id, name, amount, unit) => ({
  type: listActions.EDIT_PRODUCT,
  payload: { listId, id, name, amount, unit },
});

export const deleteProduct = id => ({
  type: listActions.DELETE_PRODUCT,
  payload: { id },
});

export const toggleProduct = id => ({
  type: listActions.TOGGLE_PRODUCT,
  payload: { id },
});
