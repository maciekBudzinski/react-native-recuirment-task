import { combineReducers } from 'redux';
import shoppingListReducer from '../modules/shoppingList/reducer'

export default combineReducers({
  shoppingList: shoppingListReducer,
})