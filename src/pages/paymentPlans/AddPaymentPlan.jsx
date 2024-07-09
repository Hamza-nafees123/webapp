import React, { useState } from 'react'
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
const AddPaymentPlan = () => {
    const [data, setData] = useState({
       Descrption: '',
        cutPrice: '',
        actualPrice: '',
        seletPlan: '' ,
      });
    
      const handleSubmit = () => {
        console.log(data);
       
      };
      const handleseletPlanChange = (e) => {
        setData({ ...data, seletPlan: e.target.value });
      };
    const paymentPlan = [
        {id:1,seletPlan:'1 Month free (with promo code)'},
        {id:2,seletPlan:'1 Month'},
        {id:3,seletPlan:'3 Month'},
        {id:4,seletPlan:'6 Month'},
        {id:5,seletPlan:'1 Year'}
    ]
  return (
    <div className='list'>
    <Sidebar/>
       <div className="listContainer">
           
       <Navbar headingmain='Add New Payment Plan' />
       <div className='all-book-style'>
       <div className="row-userDetails" style={{width:'98%'}}>
       <div className="input-feild-label">
              <p className="paragraph-details-user"> Selet a plan</p>
              <select id="cars"
                value={data.seletPlan}
                onChange={handleseletPlanChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select a payment plan</option>
                {paymentPlan.map(category => (
                  <option key={category.id} value={category.seletPlan}>{category.seletPlan}</option>
                ))}
              </select>
            </div>
          
          <div className="input-feild-label">
            <p className="paragraph-details-user"> Descrption white</p>
            <input value={data.Descrption}  onChange={(e) => setData({ ...data, Descrption: e.target.value })} className='inputfeild-userDetails' placeholder='Add Descrption'/>
            </div>
          
        </div>
        <div className="row-userDetails" style={{width:'98%'}}>
        <div className="input-feild-label">
            <p className="paragraph-details-user"> Cut Price Red</p>
            <input value={data.cutPrice}  onChange={(e) => setData({ ...data, cutPrice: e.target.value })} className='inputfeild-userDetails' placeholder='Add Descrption'/>
            </div>
          
          <div className="input-feild-label">
            <p className="paragraph-details-user"> Actual Price</p>
            <input value={data.actualPrice}  onChange={(e) => setData({ ...data, actualPrice: e.target.value })} className='inputfeild-userDetails' placeholder='Add Descrption'/>
            </div>
          
        </div>
        <button className='button-all-css' onClick={handleSubmit} style={{ marginTop: '2em',width:'100%',textAlign:'center' }}>Add Payment Plan</button>
       </div>
       
       </div>
       </div>
  )
}

export default AddPaymentPlan