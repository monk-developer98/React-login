import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  };

  const SUBMIT = (e) => {
    e.preventDefault();

    let mail = JSON.parse(localStorage.getItem(`${login.email}`)).email;
    let pass = JSON.parse(localStorage.getItem(`${login.email}`)).password;

        
    if (login.password === pass && login.email === mail) {
        localStorage.setItem('is_logged_in',true)
        window.location.href = '/home'    
    }else{
        alert('Invaild details')
    }
    
  };

  return (
    <div className="REG_Container">
     
      <form onSubmit={SUBMIT} className="FORM">
        <div className="head">
          <h2>Log!n Here</h2>
        </div>
        <div className="inputF">
          <label htmlFor="email">E-Mail</label>
          <input
            onChange={handleChange}
            value={login.email}
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter Your E-mail"
          />
        </div>
        <div className="inputF">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={login.password}
            id="password"
            name="password"
            type="password"
            required
            placeholder="Your Password"
          />
        </div>
        <button type="submit">Log!n</button>
        <p className="log">
          Don't have an accuont {" "}
          <Link to="/Register"> Signup?
          </Link>
        </p>
      </form>   
    </div>
  );
};

export default Login;
