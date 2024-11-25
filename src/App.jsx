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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route>
        <Route path='/' element={<RootLayout/>}>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/Shop" element={<Shop/>}> </Route>
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