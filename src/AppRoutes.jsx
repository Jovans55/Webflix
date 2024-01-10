import { Route, Routes } from "react-router-dom";
import Home from "./home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;
