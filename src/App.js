import "./App.css";
import {React, useState} from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";


function App() {
  const [user] = useState(localStorage.getItem('is_logged_in'))

  return (
    <BrowserRouter>
      <div className="App" basename='/'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {user=='true'?<Route exact path="/Home" element={<Home />} />:null}
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
