import { Route, Routes } from "react-router-dom";
import Home from "./home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import VideoMain from "./videoMain/VideoMain";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/popcorntime" element={<VideoMain />} />
    </Routes>
  );
}

export default AppRoutes;
