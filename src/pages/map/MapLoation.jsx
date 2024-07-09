import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import {  userLocationColm } from '../../datatablesource';
import '../../components/datatable/datatable.scss'
const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 0,
  lng: 0
};

const MapComponent = ({ users }) => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [map, setMap] = useState(null);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const goToLocation = (lat, lon) => {
    if (map) {
      map.panTo({ lat, lng: lon });
      map.setZoom(8);
    }
  };
  const handleDelete = (params)=>{
    goToLocation(params.lat, params.lon)
    window.scrollTo(0, 0);
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row)}
              style={{background:'#ee2d2f',color:'white',padding:'7px 10px',borderRadius:5,fontSize:12,cursor:'pointer'}}
            >
             View User location
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <LoadScript googleMapsApiKey="AIzaSyB_nNvYWSCB2haI7DCgR6chQmsg-T4oj8s">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        onLoad={handleMapLoad}
      >
        {users.map((user) => (
          <Marker
            key={user.id}
            position={{ lat: user.lat, lng: user.lon }}
            icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
            onClick={() => setSelectedUser(user)}
          />
        ))}

        {selectedUser && (
          <InfoWindow 
            position={{ lat: selectedUser.lat, lng: selectedUser.lon }}
            onCloseClick={() => setSelectedUser(null)}
          >
            <div style={{width:'20em',height:'7em'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img style={{width:'3em',height:'3em',borderRadius:'50%'}} src={selectedUser.img} alt="" />
                    <h6 style={{fontFamily:'Nunito',fontSize:19,paddingLeft:12,marginBottom:0}}>{selectedUser.firstname} {selectedUser.lastName}</h6>
                </div>
              
              <button  style={{marginTop:5,background:'#ee2d2f',color:'white',padding:'7px 10px',borderRadius:5,fontSize:12,cursor:'pointer'}} onClick={() => navigate('/users/view-details/', { state: { data: selectedUser } })}>View Details</button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div className="location-buttons" style={{  height: '600px',paddingTop:20}}>
        <DataGrid
        className="datagrid"
        rows={users}
        columns={userLocationColm.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
      </div>
    </LoadScript>
  );
};

export default MapComponent;
