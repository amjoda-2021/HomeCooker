import "./App.css";
import { useState } from "react";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthContext from "./store/auth";
import Config from "./store/config";
import Things from "./components/thing/Things";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/user/Profile";
import Thing from "./components/thing/Thing";
import Navbar from "./components/layout/Navbar";
import WelcomePage from "./components/WelcomePage";
import CreateThingForm from "./components/thing/forms/CreateThingForm";
function App() {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth")) || {
      userId: null,
      token: null,
      email: null,
    }
  );
  const signOut = () => {
    localStorage.clear();
    setAuth({ userId: null, token: null, email: null });
  };
  return (
    <Config.Provider value={{ urlAPI: "http://localhost:3000" }}>
      <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
        <Router>
          <Navbar signOut={signOut} auth={auth} />
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route exact path="/signin" element={<Login setAuth={setAuth} />} />
            <Route
              exact
              path="/signup"
              element={<SignUp setAuth={setAuth} />}
            />
            <Route exact path="/profile" element={<Profile auth={auth} />} />
            <Route exact path="/things" element={<Things />} />
            <Route path="/things/:thingId" element={<Thing />} />
            <Route path="/things/createThing" element={<CreateThingForm />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </Config.Provider>
  );
}

export default App;
