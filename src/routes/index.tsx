import { createBrowserRouter } from 'react-router-dom';

import { About } from '../pages/About';
import { Adopt } from '../pages/Adopt';
import { BePart } from '../pages/BePart';
import { Contact } from '../pages/Contact';
import { Donate } from '../pages/Donate';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Route } from '../utils/Routes';
import { Root } from './Root';
import { UserRegistration } from '../pages/UserResistration';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: Route.home,
        element: <Home />,
      },
      {
        path: Route.about,
        element: <About />,
      },
      {
        path: Route.adopt,
        element: <Adopt />,
      },
      {
        path: Route.contact,
        element: <Contact />,
      },
      {
        path: Route.donate,
        element: <Donate />,
      },
      {
        path: Route.bePart,
        element: <BePart />,
      },
      {
        path: Route.login,
        element: <Login />,
      },
      {
        path: Route.userRegistration,
        element: <UserRegistration />,
      },
    ],
  },
]);
