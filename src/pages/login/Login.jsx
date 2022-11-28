import { Link } from "react-router-dom";
import "./login.css";
import Typed from 'react-typed'

export default function Login({onClick}) {
  return (
   
    <div className="login"> 
    <h1 className='typedLogin'>
    <Typed strings={['This is a sample app, just click login']} typeSpeed={50}
    />
    </h1>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" onClick={onClick}>Login</button>
      </form>
      <Link to='/register'>
        <button className="loginRegisterButton">Register</button>
        </Link>
    </div>
  );
}
