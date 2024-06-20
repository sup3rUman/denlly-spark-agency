import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import './styles.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import BaseLayout from './Layout/BaseLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
