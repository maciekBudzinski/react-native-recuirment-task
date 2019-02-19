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
