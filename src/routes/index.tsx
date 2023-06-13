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
import { AnimalResistration } from '../pages/AnimalResistration';
import { PrivateRouter } from './PrivateRouter';

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
        path: Route.animalRegistration,
        element: <AnimalResistration />,
      },
      {
        path: Route.profile,
        element: <RootProfile />,
        children: [
          {
            path: '',
            element: (
              <PrivateRouter rolesAcess={['authenticated', 'admin']}>
                <Profile />
              </PrivateRouter>
            ),
          },
          {
            path: Route.myPets,
            element: (
              <PrivateRouter rolesAcess={['authenticated', 'admin']}>
                <MyPets />
              </PrivateRouter>
            ),
          },
          {
            path: Route.donations,
            element: (
              <PrivateRouter rolesAcess={['admin']}>
                <Donations />
              </PrivateRouter>
            ),
          },
          {
            path: Route.adopters,
            element: (
              <PrivateRouter rolesAcess={['admin']}>
                <Adopters />
              </PrivateRouter>
            ),
          },
          {
            path: Route.animals,
            element: (
              <PrivateRouter rolesAcess={['admin']}>
                <Animals />
              </PrivateRouter>
            ),
          },
        ],
      },
    ],
  },
]);
