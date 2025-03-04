

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Rootlayout from "./Component/Rootlayout/Rootlayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from './pages/About';
import Sign from './pages/Sign-Up';

import Wishlist from "./pages/Wishlist";
import Card from "./pages/Card";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";

import Shop from "./pages/Shop";


import Login from "./pages/Login";


function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/wishlist" element={<Wishlist /> } />
        <Route path="/card" element={<Card />} />
        <Route path="/itemdetails/:id" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/shop" element={<Shop /> } />

        <Route path="/login" element={<Login />} />




      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
