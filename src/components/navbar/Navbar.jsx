import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";  
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = ({headingmain,showSearchBar,searchQuery,onchange}) => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search" style={{border:'none',padding:0}}>
          
          <h2 className='heading-h2-all-main' >{headingmain}</h2>
        </div>
        <div className="items">
        {showSearchBar && (
            <div className="item">
              <input  value={searchQuery}
          onChange={onchange} type="text" placeholder="Search..." className="search" style={{width:'20em'}} />
              <SearchOutlinedIcon />
            </div>
          )}
          {/* <div className="item">
          
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
