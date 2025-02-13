import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import ErrorPage from './pages/error';
import ProjectsPage from './pages/projects';
import Team from './pages/team';
import MagazinePage from './pages/magazine';
import { AnimatePresence } from 'framer-motion';
import { transition } from './transition';
import "./i18n/config.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: transition(HomePage),
    errorElement: transition(ErrorPage)
  },
  {
    path: "projects/",
    element: transition(ProjectsPage)
  },
  {
    path: "team/",
    element: transition(Team)
  },
  {
    path: "magazine/",
    element: transition(MagazinePage)
  }
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence mode='wait'>
        <RouterProvider router={router} />
      </AnimatePresence>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
