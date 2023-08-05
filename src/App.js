import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import UserContext from "./context/UserContext";
import TokenContext from './context/TokenContext';
import { useState } from "react";

function App() {
const [ user, setUser ] = useState(null);
const [ token, setToken ] = useState("");


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Signup />}></Route>
            {/* <Route path="/sections/:filmId" element={<div />}></Route> */}
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
