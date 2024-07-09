import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const dashboardKey = localStorage.getItem("dashboard_key");
    console.log("asdasdas",dashboardKey)
    if (!dashboardKey) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);
  const handleLogin = async (e) => {
    try {
      const payload = {
        username,
        password
      };
      const response = await axios.post('https://new-app-testing-2d30280db142.herokuapp.com/api/admin/login', payload);
      localStorage.setItem("dashboard_key", response.data.token);
      toast.success('Login successful');
      window.location.reload()
    
    } catch (error) {
      console.error('Error:', error); // Log the full error object for debugging
      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        toast.error('Server not responding');
      } else {
        console.log('Error', error.message);
        toast.error('Unexpected error occurred');
      }
    } 
  };
  
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {!loggedIn && (
          <div className="login-form">
            <h2>Login</h2>
            <Form>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button  style={{width:'100%',marginTop:30}} className="edit-btn-mtn "  variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Form>
            <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
          </div>
        )}
        {loggedIn && (
          <>
            <div className="widgets">
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>
            <div className="widgets">
              <Widget type="netprofit" />
              <Widget type="geoLocation" />
            </div>
            <div className="charts">
              <Featured />
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table />
            </div>
           
          </>
          
        )}
      </div>
    </div>
  );
};

export default Home;
