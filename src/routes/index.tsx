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
import { RootProfile } from '../pages/profile/RootProfile';
import { Profile } from '../pages/profile/Profile';
import { MyPets } from '../pages/profile/MyPets';
import { Donations } from '../pages/profile/Donations';
import { Adopters } from '../pages/profile/Adopters';
import { Animals } from '../pages/profile/Animals';

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
      {
        path: Route.profile,
        element: <RootProfile />,
        children: [
          {
            path: '',
            element: <Profile />,
          },
          {
            path: Route.myPets,
            element: <MyPets />,
          },
          {
            path: Route.donations,
            element: <Donations />,
          },
          {
            path: Route.adopters,
            element: <Adopters />,
          },
          {
            path: Route.animals,
            element: <Animals />,
          },
        ],
      },
    ],
  },
]);
