import React, { useState } from 'react'
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { CatoriesDataobj } from '../../datatablesource';
const AddNewAudioBook = () => {
    const [data, setData] = useState({
        Bookname: '',
        authorName: '',
        longDescription: '',
        image: null ,
        bookcategoryPrimary: '',
        bookcategoriesSec: '',
      });
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData({ ...data, image: file });
      };
      const handleSubmit = () => {
        console.log(data);
       
      };
      const handleSecChange = (e) => {
        setData({ ...data, bookcategoriesSec: e.target.value });
      };
      const handleSeriesChange = (e) => {
        setData({ ...data, bookcategoryPrimary: e.target.value });
      };
    
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
        <Navbar headingmain="Add New Audio Book"/>
        <div style={{width:'97%',margin:'auto'}}>
        <div className="row-userDetails" style={{width:'98%'}}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Book Title</p>
              <input
                value={data.Bookname}
                onChange={(e) => setData({ ...data, Bookname: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Book Title'
              />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Author Name</p>
              <input
                value={data.authorName}
                onChange={(e) => setData({ ...data, authorName: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Author Name'
              />
            </div>
          </div>

          <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
            <p className="paragraph-details-user"> Long Description</p>
            <textarea
              value={data.longDescription}
              onChange={(e) => setData({ ...data, longDescription: e.target.value })}
              rows="6"
              className='inputfeild-userDetails'
              placeholder='Long Description'
            />
          </div>
      <div className="row-userDetails" style={{ marginTop: '1em',width:'98%' }}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Secondary Category</p>
              <select id="cars"
                value={data.bookcategoriesSec}
                onChange={handleSecChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select Secondary Category</option>
                {CatoriesDataobj.map(category => (
                  <option key={category.id} value={category.CategoryName}>{category.CategoryName}</option>
                ))}
              </select>
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user"> Primary Category</p>
              <select id="cars"
                value={data.bookcategoryPrimary}
                onChange={handleSeriesChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select Primary Category</option>
                { CatoriesDataobj.map(category => (
                  <option key={category.id} value={category.CategoryName}>{category.CategoryName}</option>
                ))}
              </select>
            </div>
         
            </div>
          <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
          <p className="paragraph-details-user">Upload Book Cover Image Photo</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {/* Display selected image */}
            {data.image && (
              <div>
                <h3>Selected Image:</h3>
                <img src={URL.createObjectURL(data.image)} alt="Selected" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
          <p className="paragraph-details-user">Upload Book Audio File</p>
            <input type="file" accept="mp3/*" onChange={handleImageChange} />
            {/* Display selected image */}
            {data.image && (
              <div>
                <h3>Selected Image:</h3>
                <img src={URL.createObjectURL(data.image)} alt="Selected" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
        </div>
        <button className='button-all-css' onClick={handleSubmit} style={{ marginTop: '2em',marginBottom:'2em',width:'100%' }}>Add Book</button>
            </div>
            </div>
  )
}

export default AddNewAudioBook