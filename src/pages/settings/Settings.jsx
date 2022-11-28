import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {useState} from 'react'

export default function Settings(onDClick) {
  const [showMessage, setShowMessage] = useState(false)


  const onSubmit=(e)=>{
    e.preventDefault()
    setShowMessage(!showMessage)
  }
  return (

    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <button className="settingsTitleDelete"
          onClick={onDClick}
          >Delete Account</button>
        </div>
        <form className="settingsForm" onSubmit={onSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sample" name="name" />
          <label>Email</label>
          <input type="email" placeholder="Sample@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          {showMessage && <p style={{color: 'green'}}>Submit button clicked</p>}
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
