import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import RootLayout from './Components/RootLayout';
import SingleProducts from './Components/SingleProducts';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Comparison from './Components/Comparison';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Blog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
        <Route path='/' element={<RootLayout/>}>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/Shop" element={<Shop/>}> </Route>
            <Route path="/singleproducts" element={<SingleProducts/>}> </Route>
            <Route path="/cart" element={<Cart/>}> </Route>
            <Route path="/checkout" element={<Checkout/>}> </Route>
            <Route path="/comparison" element={<Comparison/>}> </Route>
            <Route path="/contact" element={<Contact/>}> </Route>
            <Route path="/blog" element={<Blog/>}> </Route>
        </Route>
    </Route>
    </>
  )
);

function App() {
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App