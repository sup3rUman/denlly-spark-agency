import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BaseLayout from "./Layout/BaseLayout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <BaseLayout />}>
      <Route index element={ <Home />} />
      <Route path="/services" element={ <Home />} />
      <Route path="/contact" element={ <Home />} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App