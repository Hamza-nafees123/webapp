import React, { useState } from 'react'
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import {paymentPlanData, paymentPlanDataobj } from '../../datatablesource'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
const PaymentsPlans = () => {
    const [data, setData] = useState(paymentPlanDataobj);
    const navigation = useNavigate();
  // Function to handle adding or cancelling a book banner
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const handleViewDetails = (params) => {
    navigation('/Dashboard/payment-plans/payment-plan-details', { state: { paymentData: params } });
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
   
              <div onClick={()=>handleViewDetails(params.row)} className="viewButton">Edit</div>
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
           
       <Navbar headingmain='Payment Plan' />
       <div className='all-book-style'> 
       <div className="add-categroy-name" style={{width:'100%',margin:'auto',marginTop:30,paddingRight:20}}>
            <div className="auidoBook-div-sub-coln"><h2 className='heading-h2-all-main' style={{color:'#ee2d2f',fontSize:22}}>Add New Payment Plan</h2></div>
            <div className="auidoBook-div-sub-coln"><button className="addButton" onClick={()=>navigation('/Dashboard/payment-plans/add-payment-plan')}>Add plan</button></div>
        </div>
      </div>
       <div className="datatable" style={{marginRight:20,paddingTop:0}} >
      <DataGrid
        className="datagrid"
        rows={data}
        columns={paymentPlanData.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div> 
       
       </div>
       </div>
  )
}

export default PaymentsPlans