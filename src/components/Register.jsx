import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profession: "select",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const SUBMIT = (e) => {
    e.preventDefault();

    localStorage.setItem(`${register.email}`,JSON.stringify(register))
    window.location.reload();
  };
 
  return (
    <div className="REG_Container">
      <form onSubmit={SUBMIT} className="FORM">
        <div className="head">
          <h2>S!gn Up Here</h2>
        </div>
        <div className="inputF">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={register.name}
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter Your Fullname"
          />
        </div>
        <div className="inputF">
          <label htmlFor="email">E-Mail</label>
          <input
            onChange={handleChange}
            value={register.email}
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter Your E-mail"
          />
        </div>
        <div className="inputF">
          <label htmlFor="phone">Phone</label>
          <input
            onChange={handleChange}
            value={register.phone}
            id="phone"
            name="phone"
            type="number"
            required
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="inputF">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={register.password}
            id="password"
            name="password"
            type="password"
            required
            placeholder="Create Password"
          />
        </div>
        <div className="inputF">
          <label htmlFor="profession">Profession</label>
          <select
            onChange={handleChange}
            value={register.profession}
            name="profession"
            id="profession"
            required
          >
            <option value="select"> - Choose Your Profession - </option>
            <option value="frontend">Front End Developer</option>
            <option value="backend">Back End Developer</option>
            <option value="python">Python Developer</option>
            <option value="java">Java Developer</option>
          </select>
        </div>
        <button type="submit">Subm!t</button>
        <p className="log">
          If You Already registered{" "}
          <Link to="/">
            log in?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
