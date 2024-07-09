import React, { useState } from 'react';
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const AccountSettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subAdminUsername, setSubAdminUsername] = useState('');
  const [subAdminPassword, setSubAdminPassword] = useState('');
  const [subAdminConfirmPassword, setSubAdminConfirmPassword] = useState('');

  const handlePasswordUpdate = () => {
    console.log(currentPassword, newPassword);
    // Add your password update logic here
  };

  const handleSubAdminSubmit = () => {
    if (subAdminPassword !== subAdminConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(subAdminUsername, subAdminPassword);
    // Add your sub-admin user creation logic here
  };

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar headingmain='Account Settings' />
        <div className="datatable">
          <h2 style={{ fontSize: 22 }}>Password</h2>
          <div className="input-feild-label">
            <p className="paragraph-details-user">Old Password</p>
            <input
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className='inputfeild-userDetails'
              placeholder='Old Password'
              type='password'
            />
          </div>
          <div className="input-feild-label">
            <p className="paragraph-details-user">New Password</p>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className='inputfeild-userDetails'
              placeholder='New Password'
              type='password'
            />
          </div>
          <div className="input-feild-label">
            <p className="paragraph-details-user">Confirm Password</p>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='inputfeild-userDetails'
              placeholder='Confirm Password'
              type='password'
            />
          </div>
          <button className='button-all-css' onClick={handlePasswordUpdate} style={{ marginTop: '1em' }}>
            Update Password
          </button>
          
          <h2 style={{ fontSize: 22, marginTop: '2em' }}>Add Sub-Admin User Add</h2>
          <div className="input-feild-label">
            <p className="paragraph-details-user">Username</p>
            <input
              value={subAdminUsername}
              onChange={(e) => setSubAdminUsername(e.target.value)}
              className='inputfeild-userDetails'
              placeholder='Username'
              type='text'
            />
          </div>
          <div className="input-feild-label">
            <p className="paragraph-details-user">Password</p>
            <input
              value={subAdminPassword}
              onChange={(e) => setSubAdminPassword(e.target.value)}
              className='inputfeild-userDetails'
              placeholder='Password'
              type='password'
            />
          </div>
          <div className="input-feild-label">
            <p className="paragraph-details-user">Confirm Password</p>
            <input
              value={subAdminConfirmPassword}
              onChange={(e) => setSubAdminConfirmPassword(e.target.value)}
              className='inputfeild-userDetails'
              placeholder='Confirm Password'
              type='password'
            />
          </div>
          <button className='button-all-css' onClick={handleSubAdminSubmit} style={{ marginTop: '1em' }}>
            Add Sub-Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
