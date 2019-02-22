import reducer from '../../js/modules/shoppingList/reducer';

describe('listReducer', () => {
  test('should add list', () => {
    const state = reducer(
      { currentOpenListId: null, isSortByNewest: true, lists: {} },
      {
        type: '@@SHOPING_LIST/ADD',
        payload: {
          id: '12a599d5-67b3-470e-8b99-a3980c79426f',
          dateCreated: '2019-02-22T14:37:13.836Z',
          name: 'Test list',
          shop: 'Test shop',
          color: '#ffa000',
        },
      }
    );
    expect(state).toEqual({
      currentOpenListId: null,
      isSortByNewest: true,
      lists: {
        '12a599d5-67b3-470e-8b99-a3980c79426f': {
          id: '12a599d5-67b3-470e-8b99-a3980c79426f',
          name: 'Test list',
          shop: 'Test shop',
          color: '#ffa000',
          isActive: true,
          dateCreated: '2019-02-22T14:37:13.836Z',
        },
      },
    });
  });

  test('should edit list', () => {
    const state = reducer(
      {
        currentOpenListId: null,
        isSortByNewest: true,
        lists: {
          '12a599d5-67b3-470e-8b99-a3980c79426f': {
            id: '12a599d5-67b3-470e-8b99-a3980c79426f',
            name: 'Test list',
            shop: 'Test shop',
            color: '#ffa000',
            isActive: true,
            dateCreated: '2019-02-22T14:37:13.836Z',
          },
        },
      },
      {
        type: '@@SHOPING_LIST/EDIT',
        payload: { id: '12a599d5-67b3-470e-8b99-a3980c79426f', name: 'Edited test list', shop: 'Test shop', color: '#ffa000' },
      }
    );
    expect(state).toEqual({
      currentOpenListId: null,
      isSortByNewest: true,
      lists: {
        '12a599d5-67b3-470e-8b99-a3980c79426f': {
          id: '12a599d5-67b3-470e-8b99-a3980c79426f',
          name: 'Edited test list',
          shop: 'Test shop',
          color: '#ffa000',
          isActive: true,
          dateCreated: '2019-02-22T14:37:13.836Z',
        },
      },
    });
  });

  test('should delete list', () => {
    const state = reducer(
      {
        currentOpenListId: null,
        isSortByNewest: true,
        lists: {
          '12a599d5-67b3-470e-8b99-a3980c79426f': {
            id: '12a599d5-67b3-470e-8b99-a3980c79426f',
            name: 'Edited test list',
            shop: 'Test shop',
            color: '#ffa000',
            isActive: true,
            dateCreated: '2019-02-22T14:37:13.836Z',
          },
        },
      },
      { type: '@@SHOPING_LIST/DELETE', payload: { id: '12a599d5-67b3-470e-8b99-a3980c79426f' } }
    );
    expect(state).toEqual({
      currentOpenListId: null,
      isSortByNewest: true,
      lists: {},
    });
  });

  test('should set open list', () => {
    const state = reducer(
      {
        lists: {
          'a552148e-5e9e-4700-a2cd-ffc93a84ce74': {
            id: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
            name: 'Test list',
            shop: 'Test shop',
            color: '#455a64',
            isActive: true,
            dateCreated: '2019-02-22T14:54:22.361Z',
          },
        },
        currentOpenListId: null,
        isSortByNewest: true,
      },
      { type: '@@SHOPING_LIST/OPEN', payload: { id: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74' } }
    );
    expect(state).toEqual({
      lists: {
        'a552148e-5e9e-4700-a2cd-ffc93a84ce74': {
          id: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
          name: 'Test list',
          shop: 'Test shop',
          color: '#455a64',
          isActive: true,
          dateCreated: '2019-02-22T14:54:22.361Z',
        },
      },
      currentOpenListId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
      isSortByNewest: true,
    });
  });
});

test('should archive list', () => {
  const state = reducer(
    {
      lists: {
        'a552148e-5e9e-4700-a2cd-ffc93a84ce74': {
          id: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
          name: 'Test list',
          shop: 'Test shop',
          color: '#455a64',
          isActive: true,
          dateCreated: '2019-02-22T14:54:22.361Z',
        },
      },
      currentOpenListId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
      isSortByNewest: true,
    },
    { type: '@@SHOPING_LIST/TOGGLE_ACTIVE' }
  );
  expect(state).toEqual({
    lists: {
      'a552148e-5e9e-4700-a2cd-ffc93a84ce74': {
        id: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
        name: 'Test list',
        shop: 'Test shop',
        color: '#455a64',
        isActive: false,
        dateCreated: '2019-02-22T14:54:22.361Z',
      },
    },
    currentOpenListId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
    isSortByNewest: true,
  });
});
