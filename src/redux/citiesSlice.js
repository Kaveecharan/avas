import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [
    { id: 1, name: 'MALE RESTAURANT', image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg' },
    { id: 2, name: 'HULHUMALE RESTAURANT', image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg' },
    { id: 3, name: 'HULHUMALE PHASE 2', image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?cs=srgb&dl=pexels-pixabay-290595.jpg&fm=jpg' },
  ],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
});

export const selectCities = state => state.cities.cities;
export default citiesSlice.reducer;
