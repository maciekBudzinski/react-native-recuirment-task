import uuid from 'uuid/v4';
import * as types from './actionTypes';

export const addProduct = (listId, name, amount, unit) => ({
  type: types.ADD,
  payload: { listId, id: uuid(), name, amount, unit, dateCreated: Date.now() },
});

export const deleteProduct = id => ({
  type: types.DELETE,
  payload: { id },
});

export const toggleProduct = id => ({
  type: types.TOGGLE,
  payload: { id },
});
