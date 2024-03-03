import React from 'react';
import ReactDOM from 'react-dom/client';
import Week0 from './weeks/week0/App.tsx';
import Week1 from './weeks/week1/App.tsx';
import Week2 from './weeks/week2/App.tsx';
import Week3 from './weeks/week3/App.tsx';
import Week4 from './weeks/week4/App.tsx';
import Week5 from './weeks/week5/App.tsx';
import Week6 from './weeks/week6/App.tsx';
import Week7 from './weeks/week7/App.tsx';
import Week8 from './weeks/week8/App.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import SearchPage from './weeks/week4/pages/SearchPage/SearchPage.tsx';
import FavoritePage from './weeks/week4/pages/FavoritePage/FavoritePage.tsx';
import WatchListPage from './weeks/week4/pages/WatchListPage/WatchListPage.tsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <Week0 />,
    },
    {
      path: "/week0",
      element:  <Week0 />,
    },
    {
      path: "/week1",
      element:  <Week1 />,
    },
    {
      path: "/week2",
      element:  <Week2 />,
    },
    {
      path: "/week3",
      element:  <Week3 />,
    },
    {
      path: "/week4",
      element:  <Week4 />,
      children: [
        {
          index: true,
          element: <SearchPage />,
        },
        {
          path: 'search',
          element: <SearchPage />
        },
        {
          path: 'watchlist',
          element: <WatchListPage />
        },
        {
          path: 'favorite',
          element: <FavoritePage />
        },
      ],
    },
    {
      path: "/week5",
      element:  <Week5 />,
    },
    {
      path: "/week6",
      element:  <Week6 />,
    },
    {
      path: "/week7",
      element:  <Week7 />,
    },
    {
      path: "/week8",
      element:  <Week8 />,
    },
  ],
  {
    basename: '/stocks-app',
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
