
import React, { useEffect, useState } from 'react';
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import MapComponent from './MapLoation';


const Map = () => {
  const users = [
    { id: 1, ip: '103.244.176.31',img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'hamza',
    lastName:'harry' },
    // { id: 2,  firstname:'ubaid', ip: '101.214.176.11' },
    // { id: 3,  firstname:'testing', ip: '1.1.1.1' },
    { id: 3, ip: '1.1.1.1',img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'David',
    lastName:'harry' },
    { id: 2, ip: '101.214.176.11',img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'Noimie',
    lastName:'harry' },
    { id: 4, ip: '113.244.176.31',img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'Aeena',
    lastName:'harry' },
    { id: 5, ip: '133.244.171.31',img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'Henry',
    lastName:'harry' },
    { id: 6, ip: '101.241.176.31',img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Cancelled",
    gender: "Male",
    Geo:'Karachi Pakistan',
    joiningDate:'22-05-2023',
    paymentPlains:'3 month ',
    userMessages:'hey bro how are you',
    firstname:'Jhon',
    lastName:'harry' },
  ];

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locs = await Promise.all(users.map(async user => {
        const response = await fetch(`https://ipinfo.io/${user.ip}/geo?token=5963fdcf54d529`);
        const data = await response.json();
        const [lat, lon] = data.loc.split(',');
        return { ...user, lat: parseFloat(lat), lon: parseFloat(lon) };
      }));
      setLocations(locs);
    };

    fetchLocations();
  }, []);

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar headingmain="Geo Location Map" />
        <div className='all-book-style'>
          <MapComponent users={locations} />
        </div>
      </div>
    </div>
  );
};

export default Map;
