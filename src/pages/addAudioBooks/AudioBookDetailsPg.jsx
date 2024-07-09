import React, { useState } from 'react'
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
const AudioBookDetailsPg = () => {
    const location = useLocation();
    const { data } = location.state;
    console.log('useradataview',data)
    const [dataa, setData] = useState({
        Bookname: data?.Bookname,
        authorName: data?.authorName,
        longDescription: data?.longDiscription,
        image: null ,
      });
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData({ ...data, image: file });
      };
      const handleSubmit = () => {
        console.log(data);
       
      };
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
        <Navbar headingmain="Audio Book Details"/>
        <div style={{width:'97%',margin:'auto'}}>
        <div className="row-userDetails" style={{width:'98%'}}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Book Title</p>
              <input
                value={dataa.Bookname}
                onChange={(e) => setData({ ...dataa, Bookname: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Book Title'
              />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Author Name</p>
              <input
                value={dataa.authorName}
                onChange={(e) => setData({ ...dataa, authorName: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Author Name'
              />
            </div>
          </div>

          <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
            <p className="paragraph-details-user"> Long Description</p>
            <textarea
              value={dataa.longDescription}
              onChange={(e) => setData({ ...dataa, longDescription: e.target.value })}
              rows="6"
              className='inputfeild-userDetails'
              placeholder='Long Description'
            />
          </div>
          <div className="row-userDetails" style={{ marginTop: '1em',width:'98%' }}>
          
          <div className="input-feild-label">
            <p className="paragraph-details-user">Secondary Category</p>
            <input value={data?.bookcategoriesSec} className='inputfeild-userDetails' placeholder='Author Name'/>
            </div> 
<div className="input-feild-label">
            <p className="paragraph-details-user">Primary Category</p>
            <input value={data?.bookcategoryPrimary} className='inputfeild-userDetails' placeholder='Author Name'/>
            </div> 
           
            </div>
          <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
          <p className="paragraph-details-user">Upload Book Cover Image Photo</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {/* Display selected image */}
            {dataa.image && (
              <div>
                <h3>Selected Image:</h3>
                <img src={URL.createObjectURL(dataa.image)} alt="Selected" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
          <p className="paragraph-details-user">Upload Book Audio File</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {/* Display selected image */}
            {dataa.image && (
              <div>
                <h3>Selected Image:</h3>
                <img src={URL.createObjectURL(dataa.image)} alt="Selected" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
          <button className='button-all-css' onClick={handleSubmit} style={{ marginTop: '2em',marginBottom:'2em',width:'100%' }}>Update Book</button>
        </div>
            </div>
            </div>
  )
}

export default AudioBookDetailsPg