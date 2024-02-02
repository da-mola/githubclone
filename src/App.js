import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AllRepositories from "./pages/AllRepositories";
import RepositoryDetails from "./pages/RepositoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: '/all-repositories',
    element: <AllRepositories />
  },
  {
    path: '/repository/:repoId',
    element: <RepositoryDetails />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
