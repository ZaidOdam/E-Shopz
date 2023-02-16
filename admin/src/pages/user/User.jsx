import {CalendarToday, LocationOnOutlined, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material"
import {Link} from "react-router-dom"
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="data:image/jpeg;base64,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" 
              alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Zaid Odam</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity/>
                <span className="userShowInfoTitle">zaid_odam</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday/>
                <span className="userShowInfoTitle">11-12-2001</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid/>
                <span className="userShowInfoTitle">+91-7744080417</span>
              </div>
              <div className="userShowInfo">
                <MailOutline/>
                <span className="userShowInfoTitle">zaidodam@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationOnOutlined/>
                <span className="userShowInfoTitle">Kolhapur, India</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder="zaid_odam" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="Zaid Odam" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="zaidodam@gmail.com" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder="+91-7744080417" className="userUpdateInput" />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder="Kolhapur, India" className="userUpdateInput" />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="data:image/jpeg;base64,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" 
                  alt="" className="userUpdateImg" />
                  <label htmlFor="file" className="userUpdateIcon"> <Publish/> </label> 
                  <input type="file" name="" id="file" style={{display:"none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
