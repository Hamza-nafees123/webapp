import React, { useState } from 'react'
import { CancelUserData, ContactPage, ContactPageDataOBJ, userColumns } from '../../datatablesource';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { DataGrid } from '@mui/x-data-grid';
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import Navbar from '../../components/navbar/Navbar';
const ConatactPage = () => {
    const [data, setData] = useState(ContactPageDataOBJ);
    const navigation = useNavigate();
  
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const handleViewDetails = (params) => {
      navigation('/users/view-details/', { state: { data: params } });
    };
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="cellAction">
       
                  <div onClick={()=>handleViewDetails(params.row)} className="viewButton">View</div>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div className='list'>
    <Sidebar/>
       <div className="listContainer">
           
       <Navbar headingmain='Contact Us' showSearchBar={true} />
       <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={ContactPage.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
       </div>
       </div>
  )
}

export default ConatactPage