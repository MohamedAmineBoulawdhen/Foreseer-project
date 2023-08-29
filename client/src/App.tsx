import Profiles from "./pages/Profiles";
import "./styles/App.css";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProfilesLoader } from "./utils/ProfilesLoader";
import NotFound from "./pages/NotFound";
import Error from "./utils/Error";
import Layout from "./pages/Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      {/*it should be Layout at the top //for the error element it will catch any error in any child route*/}
      <Route index element={<Profiles />} loader={ProfilesLoader} />
      {/*it should be Home as index path */}
      <Route path="news" element={<h1>News</h1>} />
      <Route path="*" element={<NotFound />} />
    </Route>
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
