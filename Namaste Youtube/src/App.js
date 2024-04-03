import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body.js';
import Demo from './components/Demo.js';
import MainContainer from './components/MainContainer.js';
import WatchPage from './components/WatchPage.js';
import Header from './components/header/Header.js';
import appStore from './store/appStore.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {path: '/', element: <MainContainer />},
      {path: 'watch', element: <WatchPage />},
      {path: 'demo', element: <Demo />},
    ],
  }
]);

export default function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}