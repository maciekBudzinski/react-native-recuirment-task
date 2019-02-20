import * as listActions from './actionTypes';

export const addList = (name, color) => ({
  type: listActions.ADD,
  payload: {
    name,
    color,
  },
});

export const editList = (id, name, color) => ({
  type: listActions.EDIT,
  payload: {
    id,
    name,
    color,
  },
});

export const deleteList = id => ({
  type: listActions.DELETE,
  payload: { id },
});

export const openList = id => ({
  type: listActions.OPEN,
  payload: { id },
});

export const addProduct = (name, amount, unit) => ({
  type: listActions.ADD_PRODUCT,
  payload: { name, amount, unit },
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
