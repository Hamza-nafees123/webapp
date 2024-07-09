import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import AllAudioCategoryTable from './AllCategprydata'

const AddAudioCategory = () => {
  return (
    <div className='list'>
         <Sidebar/>
       <div className="listContainer">
           
       <Navbar headingmain="Add Audio Categories" showSearchBar={true}/>
       <div className='all-book-style'>
        {/* <h2 className='heading-h2-all-main'>add categories</h2> */}
        <p className="paragraph-details-user">Add Categroy Name :</p>
        <div className="add-categroy-name">
       <div style={{width:'65%'}} >
    
       <input  className='inputfeild-userDetails' type="text" placeholder='Plz add new category name' />    
       </div>
            <div style={{width:'30%'}}>
            <button className='button-all-css' >add category</button>
            </div>
           
        </div>
        </div>
        <AllAudioCategoryTable/>
       </div>
    </div>
  )
}

export default AddAudioCategory