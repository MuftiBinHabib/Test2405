import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ThreeD from './components/threeD.jsx'
import Header from './components/Header.jsx';
import Map from './components/Map.jsx';
import Practice from './components/Practice.jsx';
import Games from './components/Games.jsx';
import firebaseConfig from '../firebase.config.js';
import WebCam from './components/WebCam.jsx';
import HelpfulWebsites from './components/HelpfulWebsites.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "3d",
        element: <ThreeD/>,
      },
      {
        path: "pt",
        element:<Practice/>,
      },
      {
        path: "games",
        element:<Games/>,
      },
      {
        path: "webcam",
        element:<WebCam/>,
      },
      {
        path: "websites",
        element:<HelpfulWebsites/>,
      },
    
    
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
