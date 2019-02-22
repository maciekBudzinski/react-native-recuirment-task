import { createSelector } from 'reselect';

const selectLists = state => state.shoppingList.lists;
const selectIsSortByNewest = state => state.shoppingList.isSortByNewest;
const selectCurrentOpenListId = state => state.shoppingList.currentOpenListId;

const selectIsActiveProp = (state, ownProps) => ownProps.isActive;

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

const selectProducts = state => state.products.products;

export const productsInOpenListSelector = createSelector(
  [selectProducts, selectCurrentOpenListId],
  (products, openlistId) => {
    return Object.values(products).filter(({ listId }) => listId === openlistId);
  }
);
