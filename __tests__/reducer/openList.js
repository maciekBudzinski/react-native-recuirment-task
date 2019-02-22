import reducers from '../../js/modules/shoppingList/reducer';

test('reducers', () => {
  let state;
  state = reducers(
    {
      shoppingList: {
        isSortByNewest: true,
        currentOpenListId: '2d838dc7-045d-4d08-b2c4-60b319212c27',
        lists: {
          '2d838dc7-045d-4d08-b2c4-60b319212c27': {
            id: '2d838dc7-045d-4d08-b2c4-60b319212c27',
            name: 'dad',
            shop: 'wqed',
            color: '#455a64',
            products: {
              'd2d0a0b1-9907-40cf-a22c-67d5db5f17d0': {
                id: 'd2d0a0b1-9907-40cf-a22c-67d5db5f17d0',
                name: 'dsadsa',
                amount: 'dsadsa',
                unit: 'dsadsa',
                checked: false,
              },
            },
            dateCreated: '2019-02-22T09:10:29.558Z',
            isActive: true,
          },
          '6fe868a7-f310-49ae-8ab5-bc7ffb67afbe': {
            id: '6fe868a7-f310-49ae-8ab5-bc7ffb67afbe',
            name: 'da',
            shop: 'qwqe',
            color: '#1976d2',
            products: {
              '69be843e-a2df-41c7-8b8f-0017d253759e': {
                id: '69be843e-a2df-41c7-8b8f-0017d253759e',
                name: 'daqwe',
                amount: 'dasd',
                unit: 'dasd',
                checked: true,
              },
            },
            dateCreated: '2019-02-22T09:10:57.910Z',
            isActive: false,
          },
          'f14831ac-2dbc-433c-a9bf-d1682dfe0e95': {
            id: 'f14831ac-2dbc-433c-a9bf-d1682dfe0e95',
            name: 'asdd',
            shop: '',
            color: '#0097a7',
            products: {},
            isActive: true,
            dateCreated: '2019-02-22T09:11:39.964Z',
          },
          '6c06b771-c16d-4911-8b5d-8dd6ac216f40': {
            id: '6c06b771-c16d-4911-8b5d-8dd6ac216f40',
            name: 'sadeqwewq',
            products: {},
            isActive: true,
            dateCreated: '2019-02-22T09:12:26.128Z',
            shop: 'eqadasd',
            color: '#ffa000',
          },
          '60e8a686-9239-461a-876e-db9f41f1a829': {
            id: '60e8a686-9239-461a-876e-db9f41f1a829',
            name: 'das',
            shop: 'asdsa',
            color: '#0097a7',
            products: {
              '524cd981-8614-4035-b65e-1f56343f7e33': {
                id: '524cd981-8614-4035-b65e-1f56343f7e33',
                name: 'dsadsa',
                amount: '',
                unit: '',
                checked: false,
              },
            },
            isActive: false,
            dateCreated: '2019-02-22T10:17:21.605Z',
          },
          '8d66bb80-40af-4888-b0b0-2209ce17e01c': {
            id: '8d66bb80-40af-4888-b0b0-2209ce17e01c',
            name: 'dsadsad',
            shop: 'adasdsad',
            color: '#d32f2f',
            products: {},
            dateCreated: '2019-02-22T11:01:45.653Z',
            isActive: false,
          },
        },
      },
      _persist: { version: -1, rehydrated: true },
    },
    { type: '@@SHOPING_LIST/OPEN', payload: { id: '6c06b771-c16d-4911-8b5d-8dd6ac216f40' } }
  );
  expect(state).toEqual({
    shoppingList: {
      isSortByNewest: true,
      currentOpenListId: '6c06b771-c16d-4911-8b5d-8dd6ac216f40',
      lists: {
        '2d838dc7-045d-4d08-b2c4-60b319212c27': {
          id: '2d838dc7-045d-4d08-b2c4-60b319212c27',
          name: 'dad',
          shop: 'wqed',
          color: '#455a64',
          products: {
            'd2d0a0b1-9907-40cf-a22c-67d5db5f17d0': {
              id: 'd2d0a0b1-9907-40cf-a22c-67d5db5f17d0',
              name: 'dsadsa',
              amount: 'dsadsa',
              unit: 'dsadsa',
              checked: false,
            },
          },
          dateCreated: '2019-02-22T09:10:29.558Z',
          isActive: true,
        },
        '6fe868a7-f310-49ae-8ab5-bc7ffb67afbe': {
          id: '6fe868a7-f310-49ae-8ab5-bc7ffb67afbe',
          name: 'da',
          shop: 'qwqe',
          color: '#1976d2',
          products: {
            '69be843e-a2df-41c7-8b8f-0017d253759e': {
              id: '69be843e-a2df-41c7-8b8f-0017d253759e',
              name: 'daqwe',
              amount: 'dasd',
              unit: 'dasd',
              checked: true,
            },
          },
          dateCreated: '2019-02-22T09:10:57.910Z',
          isActive: false,
        },
        'f14831ac-2dbc-433c-a9bf-d1682dfe0e95': {
          id: 'f14831ac-2dbc-433c-a9bf-d1682dfe0e95',
          name: 'asdd',
          shop: '',
          color: '#0097a7',
          products: {},
          isActive: true,
          dateCreated: '2019-02-22T09:11:39.964Z',
        },
        '6c06b771-c16d-4911-8b5d-8dd6ac216f40': {
          id: '6c06b771-c16d-4911-8b5d-8dd6ac216f40',
          name: 'sadeqwewq',
          products: {},
          isActive: true,
          dateCreated: '2019-02-22T09:12:26.128Z',
          shop: 'eqadasd',
          color: '#ffa000',
        },
        '60e8a686-9239-461a-876e-db9f41f1a829': {
          id: '60e8a686-9239-461a-876e-db9f41f1a829',
          name: 'das',
          shop: 'asdsa',
          color: '#0097a7',
          products: {
            '524cd981-8614-4035-b65e-1f56343f7e33': {
              id: '524cd981-8614-4035-b65e-1f56343f7e33',
              name: 'dsadsa',
              amount: '',
              unit: '',
              checked: false,
            },
          },
          isActive: false,
          dateCreated: '2019-02-22T10:17:21.605Z',
        },
        '8d66bb80-40af-4888-b0b0-2209ce17e01c': {
          id: '8d66bb80-40af-4888-b0b0-2209ce17e01c',
          name: 'dsadsad',
          shop: 'adasdsad',
          color: '#d32f2f',
          products: {},
          dateCreated: '2019-02-22T11:01:45.653Z',
          isActive: false,
        },
      },
    },
    _persist: { version: -1, rehydrated: true },
  });
});
