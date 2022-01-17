import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { firstname, password } = useParams();
  const { setUser, setLoggedIn } = useContext(UserContext);

  const [loginUser, setLoginUser] = useState({
    firstname: "",
    lastname: "",
    password: "",
    adress: "",
    city: "",
  });

  const handleInput = (e) => {
    setLoginUser({...loginUser, [e.target.name]: e.target.value });
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    firstname && password ? setUser({...loginUser, firstname, password }) : setUser({...loginUser, firstname, password});
    navigate(`/account/${loginUser.firstname}/${loginUser.lastname}`);
  };

  return (
  <>
  <div className="loginForm">
     <h1>Login</h1>
      <form onSubmit={handleLoginUser}>
       <input name="firstname" placeholder="Firstname" onChange={handleInput} />
       <input name="lastname" placeholder="Lastname" onChange={handleInput} />
       <input type="password" name="password" placeholder="Password" onChange={handleInput} />
       <h2>Optional</h2>
       <input name="adress" placeholder="Adress" onChange={handleInput} />
       <input name="city" placeholder="City" onChange={handleInput} />
        <button className="loginButton" type="submit">Login</button>
       </form>
    </div>
  </>
  )};

export default Login;
