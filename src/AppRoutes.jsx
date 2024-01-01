import { Route, Routes } from "react-router-dom";
import Home from "./home"
import SignIn from "./signIn/SignIn";


function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    )
}

export default AppRoutes