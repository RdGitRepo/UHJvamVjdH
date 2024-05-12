import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';
import Home, { loader as homeLoader, action as homeAction} from './Home';
import ErrorLayout from './Error';
import Main from './routes/Main';
import Contact, {loader as contactLoader, action as contactAction} from './routes/NewContact';
import EditContact, {loader as editLoader, action as editAction} from './routes/Edit';
import { action as deleteAction } from './routes/Delete'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorLayout/>,
        loader:homeLoader,
        action:homeAction,
        children:[
            {
                errorElement:<ErrorLayout/>,
                children:[
                    {
                        index:true,
                        element:<Main/>
                    },
                    {
                        path:'/contacts/:contactId',
                        element:<Contact/>,
                        loader:contactLoader,
                        action:contactAction,
                    },
                    {
                        path:'/contacts/:contactId/edit',
                        element:<EditContact/>,
                        loader:editLoader,
                        action:editAction,
                    },
                    {
                        path:'/contacts/:contactId/destory',
                        action:deleteAction,
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>}/>
    </React.StrictMode>
)

