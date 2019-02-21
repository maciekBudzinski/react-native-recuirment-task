import * as actions from '../js/modules/shoppingList/actions';
import * as types from '../js/modules/shoppingList/actionTypes';

describe('actions', () => {
  const id = '123';
  const name = 'List 1';
  const shop = '7 eleven';
  const color = '#f00';

  const prId = '456';
  const prName = 'bread';
  const amount = 3;
  const unit = 'l.';

  it('should create an action to add list', () => {
    const expectedAction = {
      type: types.ADD,
      payload: {
        name,
        shop,
        color,
      },
    };
    expect(actions.addList(name, shop, color)).toEqual(expectedAction);
  });

  it('should create an action to edit list', () => {
    const expectedAction = {
      type: types.EDIT,
      payload: {
        id,
        name,
        shop,
        color,
      },
    };
    expect(actions.editList(id, name, shop, color)).toEqual(expectedAction);
  });

  it('should create an action to delete list', () => {
    const expectedAction = {
      type: types.DELETE,
      payload: {
        id,
      },
    };
    expect(actions.deleteList(id)).toEqual(expectedAction);
  });

  it('should create an action to toggle list active ', () => {
    const expectedAction = {
      type: types.TOGGLE_ACTIVE,
    };
    expect(actions.toggleListActive()).toEqual(expectedAction);
  });

  it('should create an action to open list', () => {
    const expectedAction = {
      type: types.OPEN,
      payload: {
        id,
      },
    };
    expect(actions.openList(id)).toEqual(expectedAction);
  });

  it('should create an action to add product to list', () => {
    const expectedAction = {
      type: types.ADD_PRODUCT,
      payload: {
        name: prName,
        amount,
        unit,
      },
    };
    expect(actions.addProduct(prName, amount, unit)).toEqual(expectedAction);
  });

  it('should create an action to edit product on list', () => {
    const expectedAction = {
      type: types.EDIT_PRODUCT,
      payload: {
        listId: id,
        id: prId,
        name: prName,
        amount,
        unit,
      },
    };
    expect(actions.editProduct(id, prId, prName, amount, unit)).toEqual(expectedAction);
  });

  it('should create an action to delete product from list', () => {
    const expectedAction = {
      type: types.DELETE_PRODUCT,
      payload: {
        id: prId,
      },
    };
    expect(actions.deleteProduct(prId)).toEqual(expectedAction);
  });

  it('should create an action to toggle product on list', () => {
    const expectedAction = {
      type: types.TOGGLE_PRODUCT,
      payload: {
        id: prId,
      },
    };
    expect(actions.toggleProduct(prId)).toEqual(expectedAction);
  });
});
