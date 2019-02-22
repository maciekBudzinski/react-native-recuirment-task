import reducer from '../js/modules/shoppingList/reducer';
import * as types from '../js/modules/shoppingList/actionTypes';

describe('shopping list reducer', () => {
  const newList1 = {
    id: 'list-id',
    lastEditedTime: new Date('2019-02-21T14:41:20'),
    name: 'New list 1',
    shop: '7 eleven',
    color: '#f00',
  };

  it('should handle ADD', () => {
    expect(
      reducer(
        { lists: {}, currentOpenListId: null },
        {
          type: types.ADD,
          payload: {
            ...newList1,
          },
        }
      )
    ).toEqual({
      currentOpenListId: null,
      lists: {
        [newList1.id]: {
          ...newList1,
          isActive: true,
          products: {},
        },
      },
    });
  });
});
