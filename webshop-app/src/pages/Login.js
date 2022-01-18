import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  
  const {user, setUser, setLoggedIn } = useContext(UserContext);

  const [disabled, setDisabled] = useState(true)


  const handleInput = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
    setDisabled(false)
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate(`/shop/${user.firstname}/${user.lastname}`);
  };

  return (
  <>
  <div className="loginForm">
     <h1>Login</h1>
      <form onSubmit={handleLoginUser}>
       <input name="firstname" placeholder="Firstname" onChange={handleInput} />
       <input name="lastname" placeholder="Lastname" onChange={handleInput} />
       <input name="password" type="password" placeholder="Password" onChange={handleInput} />
       <h2>Optional</h2>
       <input name="adress" placeholder="Adress" onChange={handleInput} />
       <input name="city" placeholder="City" onChange={handleInput} />
        <button className="loginButton" type="submit" disabled={disabled}>Login</button>
       </form>
    </div>
  </>
  )};

export default Login;
