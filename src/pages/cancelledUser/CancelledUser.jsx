import React, { useEffect, useState } from 'react'
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { CancelUserData, userColumns, } from '../../datatablesource'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
const CancelledUser = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const navigation = useNavigate();
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getUser');
        const formattedData = response.data.map((item, index) => ({
          ...item,
          id: item._id
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const handleViewDetails = (params) => {
      navigation('/users/cancel-user-details', { state: { data: params } });
    };
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
     
                <div onClick={()=>handleViewDetails(params.row)} className="viewButton">View</div>
             
            </div>
          );
        },
      },
    ];
  return (
    <div className='list'>
    <Sidebar/>
       <div className="listContainer">
           
       <Navbar onchange={(e) => setSearchQuery(e.target.value)} searchQuery={searchQuery} headingmain='Cancelled Users' showSearchBar={true} />
       <div className="datatable">
       {isLoading ? (
        <div className="loadingSpinner">
          <CircularProgress color="error" />
        </div>
      ) : ( 
      <DataGrid 
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={11}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />)}
    </div>
       </div>
       </div>
  )
}

export default CancelledUser