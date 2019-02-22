import uuid from 'uuid/v4';
import * as listActions from './actionTypes';

export const addProduct = (listId, name, amount, unit) => ({
  type: listActions.ADD_PRODUCT,
  payload: { listId, id: uuid(), name, amount, unit },
});

export const deleteProduct = id => ({
  type: listActions.DELETE_PRODUCT,
  payload: { id },
});

export const toggleProduct = id => ({
  type: listActions.TOGGLE_PRODUCT,
  payload: { id },
});
