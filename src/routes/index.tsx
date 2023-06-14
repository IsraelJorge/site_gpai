import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Loading } from '../components/Loading';
import { About } from '../pages/About';
import { Adopt } from '../pages/Adopt';
import { AnimalDetails } from '../pages/AnimalDetails';
import { AnimalResistration } from '../pages/AnimalResistration';
import { BePart } from '../pages/BePart';
import { Contact } from '../pages/Contact';
import { Donate } from '../pages/Donate';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Adopters } from '../pages/profile/Adopters';
import { Animals } from '../pages/profile/Animals';
import { Donations } from '../pages/profile/Donations';
import { MyPets } from '../pages/profile/MyPets';
import { Profile } from '../pages/profile/Profile';
import { RootProfile } from '../pages/profile/RootProfile';
import { UserRegistration } from '../pages/UserResistration';
import { Route } from '../utils/Routes';
import { PrivateRouter } from './PrivateRouter';

const Root = lazy(() => import('./Root'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <div className="w-full h-screen">
            <Loading />
          </div>
        }
      >
        <Root />
      </Suspense>
    ),
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
        path: '/animal-details/:id',
        element: <AnimalDetails />,
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
