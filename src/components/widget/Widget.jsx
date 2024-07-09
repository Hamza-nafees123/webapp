import React, { useEffect, useState } from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
const Widget = ({ type }) => {
  const [Data, setData] = useState(false);
  let data;
  let amount
  const fetchData = async () => {
    try {
      const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getUser');
      const formattedData = response.data.map((item, index) => ({
        ...item,
        id: item._id
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };
  useEffect(() => {
    fetchData();
  }, []);
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "/users", // Set the route for users
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      amount = Data?.length;
      break;
    case "order":
      data = {
        title: "MEMBERS",
        isMoney: false,
        // link: "/orders", // Set the route for orders if needed
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      amount = Data?.length;
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        // link: "/earnings", // Set the route for earnings if needed
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      amount = 120;
      break;
    case "balance":
      data = {
        title: "MARKETING EXPENSE",
        isMoney: true,
        // link: "/balance", // Set the route for balance if needed
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      amount = 1200;
      break;
    
    case "netprofit":
      data = {
        title: "NET PROFIT",
        isMoney: true,
        // link: "/netprofit", // Set the route for net profit if needed
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      amount = 20;
      break;
    case "geoLocation":
      data = {
        title: "GEO LOCATION",
        isMoney: true,
        link: "/Dashboard/map", // Set the route for geo location
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        {data.link && (
          <Link style={{textDecoration:'none'}} to={data.link} className="link">{data.link === "/users" ? "See all users" : "See Map"}</Link>
        )}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
