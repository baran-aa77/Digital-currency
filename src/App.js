import React from 'react'
import {RouterProvider,} from "react-router-dom";
import router from './router/router'
import Home from './Pages/Home/Home'

function App() {

  return (
      <RouterProvider router={router}>
          <Home/>
      </RouterProvider>
  );
}

export default App;
