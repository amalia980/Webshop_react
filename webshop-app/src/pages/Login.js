import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(UserContext);
  const {user, setUser} = useContext(UserContext);


  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate(`/account/${user.firstname}`);
  };
  


  return (
    <div className="bodyLogin">
      <form onSubmit={handelLogin}>
        <h2 className="loginH2">Login</h2>
        <input className="loginInput" name="firstname" placeholder="Firstname" onChange={handleInput} />

        <input className="loginInput" name="username" placeholder="Username"  />

        <input className="loginInput" name="password" type="password" placeholder="Password"  />
      
        <button className="loginButton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
