import React, { useState } from 'react'
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import AllBannerBookTable from './AddBannersBook';
const AddBookBanners = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar onchange={(e) => setSearchQuery(e.target.value)} searchQuery={searchQuery} headingmain="Add Book Banners" showSearchBar={true}/>
        <div className='all-book-style' style={{marginBottom:30}}> </div>
       <AllBannerBookTable searchQuery={searchQuery}/>
            </div>
            </div>
  )
}

export default AddBookBanners