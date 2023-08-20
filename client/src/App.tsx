import Profiles from "./pages/Profiles";
import "./styles/App.css";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProfilesLoader } from "./utils/loaderRoutes";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/profiles" element={<Profiles />} loader={ProfilesLoader} />
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
