import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const DetailsBookTab = () => {
  const location = useLocation();
  const { data } = location.state;
  const navigation = useNavigate();
console.log(data)
  const [formData, setFormData] = useState({
    Bookname: data?.bookTitle || '',
    RedTitleBanner: data?.oblicAuthor || '',
    authorName: data?.authorName || '',
    bookcategoryPrimary: data?.primaryCategory?.name || '',
    bookcategoriesSec: data?.secondaryCategory?.name || '',
    series: data?.series || '',
    shortDiscription: data?.shortDescription || '',
    longDiscription: data?.longDescription || '',
    userMessages: data?.userMessages || '',
    img: data?.bookCoverImage?.url || 'https://www.setantabooks.com/cdn/shop/products/IMG_9322_6e7219ba-55da-43ff-bac1-ba6bc68acb8d.jpg?v=1706971799&width=480'
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
 
  const handleDelete = async () => {
    setLoading(true); // Start spinner
    try {
      const res = await axios.delete(`https://new-app-testing-2d30280db142.herokuapp.com/books/deletebook/${data?.id}`);
      if (res.status === 200) {
        toast.success('Book deleted successfully!');
        navigation('/all-books')
      } else {
        toast.error('Failed to delete book. Please try again.');
      }
    } catch (error) {
      console.error('Error making API call:', error);
      toast.error('Failed to delete book. Please try again.');
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  const handleUpdate = async () => {
    setLoading(true); // Start spinner
    try {
      const response = await axios.put(`https://new-app-testing-2d30280db142.herokuapp.com/books/updatebook/${data.id}`, formData);
      if (response.status === 200) {
        toast.success('Book details updated successfully!');
      } else {
        toast.error('Failed to update book details. Please try again.');
      }
    } catch (error) {
      console.error('Error updating book details:', error);
      toast.error('Failed to update book details. Please try again.');
    } finally {
      setLoading(false); // Stop spinner
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar headingmain={`${data?.bookTitle} Book Details`} />
        <div className='all-book-style'>
          {loading && (
            <div className="spinner-overlay">
              <Spinner animation="border" variant="danger" />
             
            </div>
          )}
          <div style={{ marginTop: '10px' }}>
            <div className="profileImg">
              <img style={{ width: '10em', height: '10em', borderRadius: '50%' }} src={formData.img} alt="" />
              <div className="userData-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="name-tag">
                  <label>Name:</label>
                  <p>{formData.Bookname}</p>
                </div>
                <div className="btn-froth">
                  <Button style={{ width: '10em', background: 'white', borderColor: '#ee2d2f', color: '#ee2d2f' }} onClick={handleUpdate} disabled={loading}>Update</Button>
                  <Button style={{ width: '10em', background: '#ee2d2f', borderColor: '#ee2d2f' }} onClick={handleDelete} disabled={loading}>Delete</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row-userDetails">
            <div className="input-feild-label">
              <p className="paragraph-details-user">Book Title (white)</p>
              <input value={formData.Bookname} onChange={(e) => setFormData({ ...formData, Bookname: e.target.value })} className='inputfeild-userDetails' placeholder='Book Title (white)' />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user"> Book Title/Oblic author(red)</p>
              <input value={formData.RedTitleBanner} onChange={(e) => setFormData({ ...formData, RedTitleBanner: e.target.value })} className='inputfeild-userDetails' placeholder='Book Title/Oblic author(red)' />
            </div>
          </div>
          <div className="row-userDetails" style={{ marginTop: '1em' }}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Author Name</p>
              <input value={formData.authorName} onChange={(e) => setFormData({ ...formData, authorName: e.target.value })} className='inputfeild-userDetails' placeholder='Author Name' />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user"> Primary Category</p>
              <input disabled value={formData.bookcategoryPrimary} className='inputfeild-userDetails' placeholder='Primary Category' />
            </div>
          </div>
          <div className="row-userDetails" style={{ marginTop: '1em' }}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Secondary Category</p>
              <input disabled value={formData.bookcategoriesSec} className='inputfeild-userDetails' placeholder='Secondary Category' />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user"> Series</p>
              <input disabled value={formData.series ? 'Yes' : 'No'} className='inputfeild-userDetails' placeholder='Series' />
            </div>
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em' }}>
            <p className="paragraph-details-user"> Short Description</p>
            <textarea value={formData.shortDiscription} onChange={(e) => setFormData({ ...formData, shortDiscription: e.target.value })} rows="3" className='inputfeild-userDetails' placeholder='Short Description' />
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em' }}>
            <p className="paragraph-details-user"> Long Description</p>
            <textarea value={formData.longDiscription} onChange={(e) => setFormData({ ...formData, longDiscription: e.target.value })} rows="6" className='inputfeild-userDetails' placeholder='Long Description' />
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em' }}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em' }}>
            <p className="paragraph-details-user"> User Messages</p>
            <textarea value={formData.userMessages} onChange={(e) => setFormData({ ...formData, userMessages: e.target.value })} rows="4" className='inputfeild-userDetails' placeholder='User Messages' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBookTab;
