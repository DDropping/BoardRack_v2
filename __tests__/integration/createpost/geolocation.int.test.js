// import React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';

// import CreatePost from '@pages/createpost';
// import { initializeStore } from '../../../../store';

// // Object.defineProperty(window, 'matchMedia', {
// //   writable: true,
// //   value: jest.fn().mockImplementation(query => ({
// //     matches: false,
// //     media: query,
// //     onchange: null,
// //     addListener: jest.fn(), // deprecated
// //     removeListener: jest.fn(), // deprecated
// //     addEventListener: jest.fn(),
// //     removeEventListener: jest.fn(),
// //     dispatchEvent: jest.fn()
// //   }))
// // });

// let store, wrapper;
// const initialState = {};
// store = initializeStore(initialState);

// beforeEach(() => {
//   moxios.install();
//   moxios.stubRequest();

//   wrapper = mount(
//     <Provider store={store}>
//       <CreatePost />
//     </Provider>
//   );
// });

// afterEach(()=>{
//     moxios.uninstall();
// })

// it('has 5 rows', () => {
//   expect(wrapper.find('Row').length).toBe(5);
// });
