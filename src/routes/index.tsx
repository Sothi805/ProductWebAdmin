import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/features/home/HomePage";
import LoginPage from "@/features/auth/page/LoginPage";
import DriverMasterRoute from "./DriverMasterRoute";
import { useCookies } from "react-cookie";
import Dashboard from "./Dashboard";

const Router = () => {
  const [cookies] = useCookies(["token"]);

  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          {/* Redirect to /login if no token is present */}
          {!cookies.token && <Route path="*" element={<Navigate to="/login" />} />}
          {cookies.token ? (
            <Route path="/" element={<HomePage />}>
              <Route path="/products/*" element={<DriverMasterRoute />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          ) : (
            <Route path="/login" element={<LoginPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default Router;

const NotFoundPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <span className="font-extrabold text-2xl">
        404 - Oops! Page Not Found!
      </span>
    </div>
  );
};
