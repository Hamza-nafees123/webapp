import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss"
import AllSeriesBook from './AllSeriesBook'
const Series = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
        <Navbar headingmain="All Series Book Data" showSearchBar={true}/>
        <AllSeriesBook/>
        <div className='all-book-style'>
        </div>
        
      </div>
    </div>
  )
}

export default Series