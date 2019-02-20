import * as listActions from './actionTypes';

const initialState = {
  lists: [],
  currentOpenList: {},
};

export default (state = initialState, action) => {
  const { lists } = state;
  switch (action.type) {
    case listActions.ADD: {
      const { name, color } = action.payload;
      return {
        ...state,
        lists: [
          ...lists,
          {
            id: Date.now(),
            lastEditedTime: new Date(),
            name,
            color,
          },
        ],
      };
    }
    case listActions.EDIT: {
      const { id, name, color } = action.payload;
      return {
        ...state,
        lists: lists.map(list => (list.id === id ? { ...list, name, color, lastEditedTime: new Date() } : list)),
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
        currentOpenList: lists.find(({ id }) => id === openingId),
      };
    }

    default: {
      return state;
    }
  }
};
