import { createSelector } from 'reselect';
import { selectCurrentOpenListId } from '../shoppingList/selectors';

export const selectProducts = state => state.products.products;

export const productsInOpenListSelector = createSelector(
  [selectProducts, selectCurrentOpenListId],
  (products, openlistId) => {
    return Object.values(products).filter(({ listId }) => listId === openlistId);
  }
);
