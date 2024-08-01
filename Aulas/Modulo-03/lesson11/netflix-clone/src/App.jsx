import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import LoginHome from "../components/LoginHome";
import WhoWatch from "../components/WhoWatch";
import HomePage from "../components/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (localStorage.getItem('avatarSelected')) {
          navigate('/home');
        } else {
          navigate('/whowatch');
        }
      } else {
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <div className="w-full h-dvh">
      <ToastContainer theme="dark"></ToastContainer>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/whowatch" element={<WhoWatch />} />
        <Route path="/login" element={<LoginHome />} />
      </Routes>
    </div>
  );
};

export default App;
