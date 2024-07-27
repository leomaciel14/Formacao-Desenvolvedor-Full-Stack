import { useEffect, useState } from "react";
import Home from "./components/Home";
import InitialScreen from "./components/InitialScreen";
import Login from "./components/Login";
import { FaGithub } from "react-icons/fa";

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
    <div className="flex h-screen flex-col">
      <div className="flex h-screen bg-gray-100 font-mono">
        {activeComponent === "initial" && (
          <InitialScreen onTransitionEnd={() => setActiveComponent("login")} />
        )}
        {activeComponent === "login" && <Login onLogin={handleLogin} />}
        {isAuthenticated && <Home />}
      </div>
      <div className="bg-blue-950 z-999">
        <a className="hover:underline underline-offset-2 " href="https://github.com/leomaciel14">
          <p className="text-center text-sm">
            <strong>Desenvolvido por: </strong>
            Leonardo Boeira Maciel
          </p>
        </a>
      </div>
    </div>
  );
};

export default App;
