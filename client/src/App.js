
import React from "react";
import "./App.css";
import Home from "../src/components/pages/home/Home.jsx";
import Profile from "./components/pages/profile/Profile.jsx";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Home/>

      {/* <Profile/> */}

    </div>
=======
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}> </Route>
      <Route path="/Login" element={ <Login/>}> </Route>
      <Route path="/Register" element={ <Register/>}> </Route>
      <Route path="/Profile" element={ <Profile/>}> </Route>
    </Routes>
    </BrowserRouter>
>>>>>>> fe5a6036354cef755d42bb12392d790a12b9e708
  );
}

export default App;
