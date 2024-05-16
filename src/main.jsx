import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import data from "./data/data.js"
// import Home from ""
import Step from "./components/Step/Step.jsx"
// import Data from ""

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },

      {
        path: "/chakras",
        element: <Step />,
        loader: async () => {return data;},
      },

      // {
      //   path: "data",
      //   element: <Data />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
