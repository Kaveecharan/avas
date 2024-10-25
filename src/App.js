import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderPage from './pages/OrderPage';
import MerchantsPage from './pages/MerchantsPage';
import MenuPage from './pages/MenuPage';
import FoodPage from './pages/FoodPage';
import './App.css';

const router = createBrowserRouter([
  {
    children: [
      { path: '/', element: <OrderPage /> },
      { path: '/merchants/:cityId', element: <MerchantsPage /> },
      { path: '/menu/:merchantId', element: <MenuPage /> },
      { path: '/food/:foodId', element: <FoodPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
