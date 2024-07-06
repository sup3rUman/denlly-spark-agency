import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BaseLayout from "./Layout/BaseLayout";
import Home from "./pages/Home";
import Beauty from "./pages/beauty";
import Insurance from "./pages/insurance";
import Cleaning from "./pages/cleaning";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <BaseLayout />}>
      <Route index element={ <Home />} />
      <Route path="/services" element={ <Services />} />
      <Route path="/contact-us" element={ <Contact />} />
      <Route path="/about-us" element={ <About />} />
      <Route path="services/beauty" element={ <Beauty />} />
      <Route path="services/cleaning" element={ <Cleaning />} />
      <Route path="services/insurance" element={ <Insurance />} />
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