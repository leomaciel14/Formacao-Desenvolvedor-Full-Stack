import { useState, useEffect } from "react";
import Home from "./components/Home";
import InitialScreen from "./components/InitialScreen";
import Login from "./components/Login";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("initial");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setActiveComponent("initial");
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setActiveComponent("home");
  };

  return (
    <div className="flex h-screen bg-gray-100 font-mono">
      {activeComponent === "initial" && <InitialScreen onTransitionEnd={() => setActiveComponent("login")} />}
      {activeComponent === "login" && <Login onLogin={handleLogin} />}
      {isAuthenticated && <Home />}
    </div>
  );
};

export default App;
