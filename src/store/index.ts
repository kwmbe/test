import{ configureStore } from '@reduxjs/toolkit'
import orgConfReducer from './organisationConfigSlice';
import contactDetailReducer from './contactDetailSlice';
import addressReducer from './addressSlice';

// ...

const store = configureStore({
  reducer: {
    orgConf: orgConfReducer,
    contactDetail: contactDetailReducer,
    address: addressReducer,
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
