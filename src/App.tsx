import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <RouterProvider router={router} />
    </div>
  );
}
