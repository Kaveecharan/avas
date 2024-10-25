import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice';
import merchantsReducer from './merchantsSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    merchants: merchantsReducer,
    menu: menuReducer,
  },
});

export default store;
