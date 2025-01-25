import React, { StrictMode, Suspense   } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error.jsx'
import { store } from './components/store.jsx';
import { Provider } from 'react-redux'
import Fallback from './components/Fallback.jsx';

const BrowseBooks = React.lazy(() => import('./components/BrowseBooks.jsx'));
const AddBook = React.lazy(() => import('./components/AddBook.jsx'));
const Home = React.lazy(() => import('./components/Home.jsx'));
const Bookdetails = React.lazy(() => import('./components/Bookdetails.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<Fallback />}><App /></Suspense>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Fallback />}><Home /></Suspense>
      },
      {
        path: '/BrowseBooks',
        element: <Suspense fallback={<Fallback />}><BrowseBooks /></Suspense>
      },
      {
        path: '/AddBook',
        element: <Suspense fallback={<Fallback />}><AddBook /></Suspense>
      },
      {
        path: '/Book/:id',
        element: <Suspense fallback={<Fallback />}><Bookdetails /></Suspense>
      },
      
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} ></RouterProvider>
    </Provider>
  </StrictMode>,
)
