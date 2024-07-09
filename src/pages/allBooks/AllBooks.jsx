import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss"

import AllBookDataTable from './AllBookDataTable'
const AllBooks = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
        <Navbar onchange={(e) => setSearchQuery(e.target.value)} searchQuery={searchQuery} headingmain="All Books Data" showSearchBar={true}/>
        <AllBookDataTable searchQuery={searchQuery}/>
        <div className='all-book-style'>
        </div>
        
      </div>
    </div>
  )
}

export default AllBooks