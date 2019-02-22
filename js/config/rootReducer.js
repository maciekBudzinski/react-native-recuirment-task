import { combineReducers } from 'redux';
import shoppingListReducer from '../modules/shoppingList/reducer';
import productReducer from '../modules/products/reducer';

export default combineReducers({
  shoppingList: shoppingListReducer,
  products: productReducer,
});
