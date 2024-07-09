import React from 'react'
import "../list/list.scss"
import '../UserDetailsViewpg/UserDetails.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import PromoCodeGenerator from './GeneratePomocodes'
const PromoCodes = () => {
  return (
    <div className='list'>
    <Sidebar/>
       <div className="listContainer">
           
       <Navbar headingmain='Promo Codes' />
       <div className='all-book-style'> <PromoCodeGenerator/> </div>
       
       </div>
       </div>
  )
}

export default PromoCodes