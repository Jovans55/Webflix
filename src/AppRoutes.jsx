import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import VideoMain from "./videoMain/VideoMain";
import { getData } from "../api/api";
import Cookies from "js-cookie";

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState("");

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const data = await getData(token);

      if (data.error) {
        setIsAuthenticated(false);
      } else {
        setUserData(data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsAuthenticated(false);
    }
  };

  function authenticator(value) {
    setIsAuthenticated(value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Navigate to="/popcorntime" />} />
          <Route path="/signin" element={<Navigate to="/popcorntime" />} />
          <Route path="/signup" element={<Navigate to="/popcorntime" />} />
          <Route
            path="/popcorntime"
            element={<VideoMain userData={userData} />}
          />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn auth={authenticator} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/popcorntime" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;
