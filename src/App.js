import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import ProductList from './features/product-list/ProductList';
import LoginPage from './pages/Login';
import SignUpPage from './features/auth/components/SignUp';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './features/Cart/component/CartPage';
import ChekoutPage from './features/Cart/component/Chekout';


// It is like at which path which component will run
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
  {
    path: "/chekout",
    element: <ChekoutPage></ChekoutPage>
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
