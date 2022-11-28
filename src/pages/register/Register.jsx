import { Link } from "react-router-dom"
import "./register.css"
import Typed from "react-typed"

export default function Register({onClick}) {
    return (
        <div className="register">
           <h1 className='typedRegister'>
    <Typed strings={['This is a sample app, just click register']} typeSpeed={50}
    />
    </h1>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton" onClick={onClick}>Register</button>
      </form>
      <Link to='/login'>
        <button className="registerLoginButton">Login</button>
        </Link>
    </div>
    )
}
