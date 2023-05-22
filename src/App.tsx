import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export function App() {
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
}
