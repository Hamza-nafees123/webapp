import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import AllCategoryTable from './AllCategoryTable'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const AddCategory = () => {
  const [name,setname] = useState('')
  console.log('name',name)
  const user = localStorage.getItem('user')
  console.log('user',user.token)


const handleSubmit = async () => {
  try {
    const res = await axios.post('https://new-app-testing-2d30280db142.herokuapp.com/api/addcate',{name});
    toast.success('This category is successfully added!');
    window.location.reload()
    setname('');

  } catch (error) {
    console.error('Error making API call:', error);
    if (error.response) {
      console.log('Error Response Data:', error.response.data);
      toast.error(error.response.data.message || 'Error adding category. Please try again.');
    } else if (error.request) {
      console.log('Error Request Data:', error.request);
      toast.error('No response from server. Please try again.');
    } else {
      console.log('Error Message:', error.message);
      toast.error('Error adding category. Please try again.');
    }
  } 
};

  return (
    <div className='list'>
         <Sidebar/>
       <div className="listContainer">
           
       <Navbar headingmain="Add Categories" showSearchBar={true}/>
       <div className='all-book-style'>
        <p className="paragraph-details-user">Add Categroy Name :</p>
        <div className="add-categroy-name">
       <div style={{width:'65%'}} >
    
       <input onChange={(e)=>setname(e.target.value)} value={name}  className='inputfeild-userDetails' type="text" placeholder='Plz add new category name' />    
       </div>
            <div style={{width:'30%'}}>
            <button className='button-all-css' onClick={handleSubmit} >add category</button>
            </div>
            <ToastContainer />
        </div>
        </div>
        <AllCategoryTable/>
        
       </div>
    </div>
  )
}

export default AddCategory