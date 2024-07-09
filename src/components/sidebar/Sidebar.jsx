import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link,  useNavigate } from "react-router-dom";
import {useState } from "react";
import { FaBookOpen } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { GiBlackBook } from "react-icons/gi";
import MyVerticallyCenteredModal from "../modalPopup/ModalPopup";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { BiCarousel } from "react-icons/bi";
import { PiFileAudio } from "react-icons/pi";

import ImgLogo from '../assets/logo.png'
const Sidebar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigation =  useNavigate()
  const handleLogout = () => {
    setLoading(true);
    
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("maintoken"); 
    localStorage.removeItem("dashboard_key");
    localStorage.clear(); 
    navigation('/'); 
    window.location.reload();
   
}
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none",paddingTop:'24px' }}>
         <img style={{width:'80%',objectFit:'contain'}} src={ImgLogo}/>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
         <Link  className='navlink-class' to='/Dashboard'>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link >
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/all-books" style={{ textDecoration: "none" }}>
            <li>
            <GiBlackBook className="icon"/>
            
              <span>All Books</span>
            </li>
          </Link>
          <Link to="/Dashboard/add-category" style={{ textDecoration: "none" }}>
          <li>
          <TbCategory className="icon" /> 
            <span>Add Category</span>
          </li>
          </Link>
          <Link to="/Dashboard/add-new-books" style={{ textDecoration: "none" }}>
          <li>
          <FaBookOpen  className="icon"/>
       
            <span>Add New Book</span>
          </li>
          </Link>
          <Link to="/Dashboard/add-book-banners" style={{ textDecoration: "none" }}>
          <li>
          <BiCarousel className="icon"/>
       
            <span>Add Book Banners</span>
          </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link style={{ textDecoration: "none" }} to='/Dashboard/series'>
          <li>
            <InsertChartIcon className="icon" />
            <span>Series</span>
          </li>
          </Link>
          <Link to="/Dashboard/add-audio-category" style={{ textDecoration: "none" }}>
          <li>
          <TbCategory className="icon" /> 
            <span>Add Audio Category</span>
          </li>
          </Link>
          <Link   to='/Dashboard/add-audio-books' style={{ textDecoration: "none" }}>
          <li>
            <PiFileAudio  className="icon"/>
            <span>Add Auido Books</span>
          </li>
          </Link>
          <Link to='/Dashboard/payment-plans' style={{ textDecoration: "none" }}> 
          <li>
          <CreditCardIcon className="icon" />
            <span>Payment Plans</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
         <Link to='/Dashboard/promo-codes' style={{ textDecoration: "none" }}>
          <li>
            <IoQrCodeOutline className="icon"  />
            <span>Promo Code</span>
          </li>
          </Link>
          <Link style={{ textDecoration: "none" }}  to='/Dashboard/cancelled-user'>
          <li >
          <HiOutlineUsers className="icon" />
            <span >Cancelled Users</span>
           
          </li>
          </Link>
          <Link to='/Dashboard/contact-us' style={{ textDecoration: "none" }}>
          <li>
          <RiContactsBook3Line className="icon" />
            <span>Contact Us</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <Link style={{ textDecoration: "none" }} to ='/Dashboard/account-settings'>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Account Setting</span>
          </li>
          </Link>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Term of Use</span>
          </li>
          <li>

<MdOutlinePrivacyTip  className="icon"/>

<span>Privacy Policy</span>
</li> */}
          <li onClick={() => setModalShow(true)}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
            
          </li>
          <MyVerticallyCenteredModal loading={loading}
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleLog={handleLogout}
      />
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
