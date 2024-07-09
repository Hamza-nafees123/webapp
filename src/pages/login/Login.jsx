import React, { useState } from "react";
import { Box, CircularProgress, FormControl, FormLabel, Input, Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading status
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      // Show error message or perform any desired action
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);

    try {
      const payload = {
        username,
        password
      };
      const response = await axios.post('https://new-app-testing-2d30280db142.herokuapp.com/api/admin/login', payload);
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('maintoken', JSON.stringify(response.data.token));
      toast.success('Login successful');
     console.log(response.data  )
      window.location.reload()
      setTimeout(() => {
        navigation('Dashboard');
      }, 1000);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: "auto", marginTop: 8, padding: 4 }}>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {loading ? ( // Show loader if loading is true
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Button style={{width:'100%'}} className="edit-btn-mtn" onClick={handleLogin}>Sign In</Button>
        )}
      </Stack>
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
    </Paper>
  );
};

export default Login;
