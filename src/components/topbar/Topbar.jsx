import { Link } from "react-router-dom";
import { useState } from "react"
import "./topbar.css";

export default function Topbar({user, onClick}) {
  const [isClick, setIsClick] = useState(false) 
  if(isClick === true) {
    document.body.style.overflowY = "hidden";
  }else {
    document.body.style.overflowY = "";
  }
  const clicked = (e)=> {
    e.preventDefault()
    setIsClick(!isClick)
    console.log(isClick);
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <nav className="topCenter">
        <ul className={`topList ${isClick ? "center" : ""}`}>
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </nav>
      <div className="topRight">
        {(user === true) ? (<>
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
          <button className="topListItem" onClick={onClick}>
            LOGOUT</button>
          </>): (
           <ul className="topList">
             <li className="topListItem">
               <Link className="link" to="/login">
                 LOGIN
               </Link>
             </li>
             <li className="topListItem">
               <Link className="link" to="/register">
                 REGISTER
               </Link>
             </li>
           </ul>
        ) }
        <div id="mobile" onClick= {clicked}>
          <i id="bar" className={isClick ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}
