import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import News from './Components/News';
import Error from './Components/Error';
import App from './App';

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    errorElement : <Error/>,
    children : [
      {
        index : true,
        element: <News categoryofnews="general" requesttype="everything"/>,        
      },
      {
        path : "/sports",
        element : <News categoryofnews="sports"/>        
      },
      {
        path : "/entertainment",
        element : <News categoryofnews="entertainment"/>        
      },
      {
        path : "/health",
        element : <News categoryofnews="health"/>        
      },
      {
        path : "/science",
        element : <News categoryofnews="science"/>        
      },
      {
        path : "/technology",
        element : <News categoryofnews="technology"/>        
      },
      {
        path : "/general",
        element : <News categoryofnews="general"/>        
      },
      {
        path : "/business",
        element : <News categoryofnews="business"/>        
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Fall Back Element</h1>}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
