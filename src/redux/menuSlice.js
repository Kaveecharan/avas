import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [
    { id: 1, merchantId: 1, merchantName: 'KFC', name: 'Food 1', category: 'Breakfast', price: 10, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 2, merchantId: 1, merchantName: 'KFC', name: 'Food 2', category: 'Lunch', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 3, merchantId: 1, merchantName: 'KFC', name: 'Food 3', category: 'Starter', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 4, merchantId: 2, merchantName: 'KFC', name: 'Food 4', category: 'Dinner', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 5, merchantId: 1, merchantName: 'KFC', name: 'Food 5', category: 'Breakfast', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 6, merchantId: 1, merchantName: 'KFC', name: 'Food 6', category: 'Breakfast', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 7, merchantId: 1, merchantName: 'KFC', name: 'Food 6', category: 'Breakfast', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 8, merchantId: 1, merchantName: 'KFC', name: 'Food 6', category: 'Breakfast', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
    { id: 9, merchantId: 1, merchantName: 'KFC', name: 'Food 6', category: 'Breakfast', price: 15, image: 'https://tb-static.uber.com/prod/image-proc/processed_images/09549f24ad012933f6f6b188deec57e7/c9252e6c6cd289c588c3381bc77b1dfc.jpeg' },
  ],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export const selectMenu = state => state.menu.menu;
export default menuSlice.reducer;
