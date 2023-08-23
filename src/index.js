import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// REACT ROUTER //
import { createBrowserRouter, RouterProvider} from "react-router-dom"

//LOADERS //
import { getHappenings, getTestimonials } from './loaders';


//COMPONENTS //
import App from './Components/App';
import Home from './Components/Home';
import Happenings from './Components/Happenings';
import Curiosities from './Components/Curiosities';
import Conspire from './Components/Conspire';
import ErrorPage from './Components/ErrorPage'
import SignUpForm from './Components/SignUpForm';
import HubMap from './Components/HubMap';



//LOADERS ???//

//WE PLACE ALL OUR ROUTES IN THE ARRAY BELOW
const router = createBrowserRouter([
  {
      path:"/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [ //CHILDREN ARE THE SUBROUTES FOR OUR MAIN APP!!

      {
        index: true, //THIS IS THE DEFAULT ROUTE INSIDE THE APP
        element: <Home />  
      },

      { path: "happenings",
        element: <Happenings />,
        loader: getHappenings

      },

      {path: "curiosities",
        element: <Curiosities />,
        loader: getTestimonials
      },

      {path: "conspire",
      element: <Conspire />
      },
      {
        path: "signUp",
        element: <SignUpForm /> 
      },
      {
        path: "hubmap",
        element: <HubMap />
      }
    ]
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );

