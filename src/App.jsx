
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

function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<Sign />} />
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
