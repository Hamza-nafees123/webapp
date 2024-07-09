import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss"
import './UserDetails.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
const UserDetailsVIewPg = () => {
    const location = useLocation();
    const { data } = location.state;
    console.log('useradataview',data)
    const originalDate = data?.currentdate;
const formattedDate = new Date(originalDate).toLocaleString();

console.log('formattedDate',formattedDate)


  return (
    <div className='list'>
     <Sidebar/>
        <div className="listContainer" >
            
        <Navbar headingmain='Complte User Details' />
        <div className='all-book-style'>  
        <div style={{marginTop:'10px'}}>
          <div className="profileImg">
            <img style={{width:'10em',height:'10em',borderRadius:'50%'}} src={data?.img || 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop'} alt="" srcset="" />
            <div className="userData-details">
              <div className="name-tag">
                <label  >Name:</label>
                <p>{data.firstname} <span style={{textTransform:"capitalize"}}>{data.lastname}</span></p>
              </div>
              <div className="name-tag">
                <label  >Email:</label>
                <p>{data.email}</p>
              </div>
              <div className="name-tag">
                <label  >Gender:</label>
                <p>{data.gender}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-userDetails">
          <div className="input-feild-label">
            <p className="paragraph-details-user">First Name</p>
            <input value={data.firstname} className='inputfeild-userDetails' placeholder='First name'/>
            </div>
          <div className="input-feild-label">
            <p className="paragraph-details-user"> Last Name</p>
            <input value={data.lastname} className='inputfeild-userDetails' placeholder='Last name'/>
            </div>
          
        </div>
        <div className="row-userDetails" style={{marginTop:'1em'}}>
          <div className="input-feild-label">
            <p className="paragraph-details-user">Joining Date</p>
            <input value={formattedDate} className='inputfeild-userDetails' placeholder='Joining Date'/>
            </div>
          <div className="input-feild-label">
            <p className="paragraph-details-user"> Gender</p>
            <input value={data.gender} className='inputfeild-userDetails' placeholder='Gender'/>
            </div>
          
        </div>
        <div className="input-feild-label" style={{marginTop:'1em'}}>
            <p className="paragraph-details-user"> Email Address</p>
            <input value={data.email} className='inputfeild-userDetails' placeholder='Email Address'/>
            </div>
            <div className="input-feild-label" style={{marginTop:'1em'}}>
            <p className="paragraph-details-user"> Locations</p>
            <input value={data.location} className='inputfeild-userDetails' placeholder='Location'/>
            </div>
            <div className="input-feild-label" style={{marginTop:'1em'}}>
            <p className="paragraph-details-user"> Payment Plans</p>
            <input value={data.paymentPlains} className='inputfeild-userDetails' placeholder='Payment Plans'/>
            </div>
            <div className="input-feild-label" style={{marginTop:'1em'}}>
            <p className="paragraph-details-user"> User Messages</p>
            <textarea value={data.usermessage} rows="4" className='inputfeild-userDetails' placeholder='User Messages'/>
            </div>
            {/* <div className='cancelation-div-state'>
            <h1 style={{marginTop:20}}>Cancelation Reason</h1>
            <div className="input-feild-label" style={{marginTop:'1em'}}>
            <p className="paragraph-details-user"> Cancel Reason</p>
            <input value={data.cancelReason||'no message user is active subscription'}  className='inputfeild-userDetails' placeholder='User Messages'/>
            </div>
            <div className="input-feild-label" style={{marginTop:'1em'}}>
            <p className="paragraph-details-user"> Reason Description</p>
            <textarea value={data.cancelReasonMess|| 'no messages'} rows="4" className='inputfeild-userDetails' placeholder='User Messages'/>
            </div>
            </div> */}
        </div>
        
        
      </div>
    </div>
  )
}

export default UserDetailsVIewPg