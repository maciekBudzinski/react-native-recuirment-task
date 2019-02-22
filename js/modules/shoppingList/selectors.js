import { createSelector } from 'reselect';

export const selectLists = state => state.shoppingList.lists;
export const selectIsSortByNewest = state => state.shoppingList.isSortByNewest;
export const selectCurrentOpenListId = state => state.shoppingList.currentOpenListId;

export const selectIsActiveProp = (state, ownProps) => ownProps.isActive;

export const openListSelector = createSelector(
  [selectLists, selectCurrentOpenListId],
  (lists, index) => lists[index]
);

export const listsByStatusSelector = createSelector(
  [selectLists, selectIsSortByNewest, selectIsActiveProp],
  (lists, isSortByNewest, isListActive) => {
    const sortByDate = (itemA, itemB) => {
      const timeDiff = new Date(itemA.dateCreated).getTime() - new Date(itemB.dateCreated).getTime();
      return isSortByNewest ? timeDiff : -timeDiff;
    };
    return Object.values(lists)
      .filter(({ isActive }) => isActive === isListActive)
      .sort(sortByDate);
  }
);
