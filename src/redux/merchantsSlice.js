import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  merchants: [
    { id: 1, cityId: 1, name: 'Merchant 1', category: 'Indian', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 2, cityId: 1, name: 'Merchant 2', category: 'Western', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 3, cityId: 1, name: 'Merchant 3', category: 'Chinese', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 4, cityId: 1, name: 'Merchant 4', category: 'Korean', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 5, cityId: 1, name: 'Merchant 5', category: 'Korean', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 6, cityId: 1, name: 'Merchant 6', category: 'Korean', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 7, cityId: 1, name: 'Merchant 7', category: 'Korean', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 8, cityId: 1, name: 'Merchant 8', category: 'Korean', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
    { id: 9, cityId: 1, name: 'Merchant 9', category: 'Korean', image: 'https://flynn.com/wp-content/uploads/2023/10/Pizza-Hut-e1698169631994.jpg' },
  ],
};

const merchantsSlice = createSlice({
  name: 'merchants',
  initialState,
  reducers: {},
});

export const selectMerchants = state => state.merchants.merchants;
export default merchantsSlice.reducer;
