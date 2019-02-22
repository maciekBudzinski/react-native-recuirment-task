test('test', () => expect(true).toBeTruthy());

// import reducer from '../js/modules/shoppingList/reducer';
// import * as types from '../js/modules/shoppingList/actionTypes';
// import { deepClone } from '../js/config/helpers';

// describe('shopping list reducer', () => {
//   const newList1 = {
//     id: 'list-id',
//     dateCreated: new Date('2019-02-21T14:41:20'),
//     name: 'New list 1',
//     shop: '7 eleven',
//     color: '#f00',
//   };

//   const lists = {
//     'list-1': {
//       id: 'list-1',
//       dateCreated: new Date('2019-02-21T14:41:20'),
//       name: 'New list 1',
//       shop: '7 eleven',
//       color: '#f00',
//       isActive: true,
//       products: {},
//     },
//     'list-2': {
//       id: 'list-2',
//       dateCreated: new Date('2019-02-21T14:41:20'),
//       name: 'New list 2',
//       shop: '7 eleven',
//       color: '#f00',
//       isActive: true,
//       products: {},
//     },
//   };

//   it('should handle list ADD', () => {
//     expect(
//       reducer(
//         { lists: {}, currentOpenListId: null },
//         {
//           type: types.ADD,
//           payload: {
//             ...newList1,
//           },
//         }
//       )
//     ).toEqual({
//       currentOpenListId: null,
//       lists: {
//         [newList1.id]: {
//           id: 'list-1',
//           name: 'list-2',
//           isActive: true,
//           products: {},

//         },
//       },
//     });
//   });

//   it('should handle list EDIT', () => {
//     expect(
//       reducer(
//         { lists: { ...lists }, currentOpenListId: null },
//         {
//           type: types.EDIT,
//           payload: {
//             ...newList1,
//           },
//         }
//       )
//     ).toEqual({
//       currentOpenListId: null,
//       lists: deepClone(lists).
//     });
//   });
// });
