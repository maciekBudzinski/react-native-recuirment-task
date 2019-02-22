import reducer from '../../js/modules/products/reducer';

describe('product reducer', () => {
  test('should add product', () => {
    const state = reducer(
      { products: {} },
      {
        type: '@@PRODUCTS/ADD',
        payload: {
          listId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
          id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9',
          name: 'Test product',
          amount: '10',
          unit: 'pcs.',
        },
      }
    );
    expect(state).toEqual({
      products: {
        'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9': {
          listId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
          id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9',
          name: 'Test product',
          amount: '10',
          unit: 'pcs.',
          checked: false,
        },
      },
    });
  });
});

test('should toggle product', () => {
  const state = reducer(
    {
      products: {
        'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9': {
          listId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
          id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9',
          name: 'Test product',
          amount: '10',
          unit: 'pcs.',
          checked: false,
        },
      },
    },
    { type: '@@PRODUCTS/TOGGLE', payload: { id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9' } }
  );
  expect(state).toEqual({
    products: {
      'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9': {
        listId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
        id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9',
        name: 'Test product',
        amount: '10',
        unit: 'pcs.',
        checked: true,
      },
    },
  });
});

test('should delete product', () => {
  const state = reducer(
    {
      products: {
        'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9': {
          listId: 'a552148e-5e9e-4700-a2cd-ffc93a84ce74',
          id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9',
          name: 'Test product',
          amount: '10',
          unit: 'pcs.',
          checked: true,
        },
      },
    },
    { type: '@@PRODUCTS/DELETE', payload: { id: 'b1b0240f-9ba3-4e8b-b49f-db66aeb935d9' } }
  );
  expect(state).toEqual({
    products: {},
  });
});
