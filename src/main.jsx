import { StrictMode, Suspense   } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BrowseBooks from './components/BrowseBooks.jsx';
import AddBook from './components/AddBook.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx'
import Bookdetails from './components/Bookdetails.jsx';
import { store } from './components/store.jsx';
import { Provider } from 'react-redux'
import Fallback from './components/Fallback.jsx';


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
