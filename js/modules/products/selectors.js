import { createSelector } from 'reselect';
import { selectCurrentOpenListId } from '../shoppingList/selectors';

export const selectProducts = state => state.products.products;

export const productsInOpenListSelector = createSelector(
  [selectProducts, selectCurrentOpenListId],
  (products, openlistId) => {
    const sortByDate = (itemA, itemB) => new Date(itemA.dateCreated).getTime() - new Date(itemB.dateCreated).getTime();
    return Object.values(products)
      .filter(({ listId }) => listId === openlistId)
      .sort(sortByDate);
  }
);
