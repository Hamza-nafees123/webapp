import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

const List = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const dashboardKey = localStorage.getItem("dashboard_key");
    console.log(dashboardKey)
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
    <div className="list">
      <Sidebar/>
      {/* <div className="listContainer">
        <Navbar headingmain="All User" showSearchBar={true}/>
        <Datatable/>
      </div> */}
      <div className="listContainer">
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
            <ToastContainer/>
          </div>
        )}
        {loggedIn && (
          <div className="listContainer">
             <Navbar onchange={(e) => setSearchQuery(e.target.value)} searchQuery={searchQuery} headingmain="All User" showSearchBar={true}/>
          {/* <Navbar headingmain="All User" showSearchBar={true}/> */}
          <Datatable searchQuery={searchQuery}/>
        </div>)
}
    </div>
    </div>
  )
}

export default List