import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import "./App.css";
import LoginHome from "../components/LoginHome";
import WhoWatch from "../components/WhoWatch";
import HomePage from "../components/HomePage";
import MovieModalTest from "../components/MovieModalTest";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (localStorage.getItem('avatarSelected')) {
          // Do nothing, user can stay on the current page
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
      <ToastContainer theme="dark" />
      <Routes location={backgroundLocation || location}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/whowatch" element={<WhoWatch />} />
        <Route path="/login" element={<LoginHome />} />
        <Route path="/movie/:id" element={<MovieModalTest />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route path="/movie/:id" element={<MovieModalTest />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
