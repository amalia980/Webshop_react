import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./CSS/Login.css";

const Login = () => {


  return (
    <div className="bodyLogin">
      <form >
        <h2 className="loginH2">Login</h2>
        <input className="loginInput" name="firstname" placeholder="Firstname"  />

        <input className="loginInput" name="username" placeholder="Username"  />

        <input className="loginInput" name="password" type="password" placeholder="Password"  />
      
        <button className="loginButton" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
