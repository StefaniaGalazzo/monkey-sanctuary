/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import Authentication from "./components/pages/Authentication";
import { UserProvider, useFetchUser } from "./lib/authContext";
import NavBarCustom from "./components/elements/NavBarCustom";
import Register from "./components/pages/Register";

function App() {
  const { user, loading } = useFetchUser();

  return (
    <UserProvider value={{ user, loading }}>
      <NavBarCustom />
      <Routes>
        <Route path={"/monkey-sanctuary"} element={<Home />} />
        <Route
          path={"/monkey-sanctuary/authentication"}
          element={<Authentication />}
        />
        <Route path={"/monkey-sanctuary/register"} element={<Register />} />
        <Route path={"/monkey-sanctuary/my-tree"} element={<User />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
