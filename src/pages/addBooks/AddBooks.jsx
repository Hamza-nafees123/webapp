// import React, { useEffect, useState } from 'react';
// import "../list/list.scss";
// import '../UserDetailsViewpg/UserDetails.css';
// import Sidebar from '../../components/sidebar/Sidebar';
// import Navbar from '../../components/navbar/Navbar';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';

// const AddBooks = () => {
//  const [catdata,setcatdata]=useState([])
//  const navigation = useNavigate()
//  const [data, setData] = useState({
//   Bookname: '',
//   RedTitleBanner: '',
//   authorName: '',
//   bookcategoryPrimary: { id: '', name: '' },
//   bookcategoriesSec: { id: '', name: '' },
//   shortDescription: '',
//   longDescription: '',
//   image: null,
//   series: ''
// });
// const [loading, setLoading] = useState(false);
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setData({ ...data, image: file });
//   };
//   const handleSubmit = async() => {
//     setLoading(true);
//     const { Bookname, RedTitleBanner,authorName,bookcategoryPrimary,bookcategoriesSec,shortDescription,longDescription,image,series } = data;
//     const payload = {
//       bookTitle: Bookname,
//       oblicAuthor: RedTitleBanner,
//       authorName: authorName,
//       primaryCategory: bookcategoryPrimary, 
//       secondaryCategory: bookcategoriesSec, 
//       series: false,
//       shortDescription: shortDescription,
//       longDescription: longDescription,
//       bookCoverImage: image,
//       pdfUpdate: "https://example.com/book-updates.pdf",
//       epubUpload: "https://example.com/book-epub.epub",
//       kindleMobiUpload: "https://example.com/book-mobi.mobi"
//   }
//     console.log(payload);
//     try {
//       const res = await axios.post('https://new-app-testing-2d30280db142.herokuapp.com/books/createbook',payload);
//       toast.success('This category is successfully added!');
//      setTimeout(() => {
//       navigation('/all-books')
//      }, 2000); 
      
      
  
//     } catch (error) {
//       console.error('Error making API call:', error);
//       if (error.response) {
//         console.log('Error Response Data:', error.response.data);
//         toast.error(error.response.data.message || 'Error adding category. Please try again.');
//       } else if (error.request) {
//         console.log('Error Request Data:', error.request);
//         toast.error('No response from server. Please try again.');
//       } else {
//         console.log('Error Message:', error.message);
//         toast.error('Error adding category. Please try again.');
//       }
//     } finally{
//       setLoading(false);
//     }
   
//   };
//   const fetchData = async () => {
   
//     try {
//       const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getCate');
//       const formattedData = response.data.map((item, index) => ({
//         ...item,
//         id: item._id 
//       }));
//      console.log(formattedData)
//      setcatdata(formattedData)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } 
//   };
//   useEffect(()=>{
//     fetchData()
//   },[])
//   const dataseries = [
//   {id:1,name:'Yes'},
//   {id:2,name:'No'}
//   ]
//   const handleSeriesChange = (e) => {
//     const selectedCategory = catdata.find(category => category.name === e.target.value);
//     setData({ ...data, 
//       bookcategoryPrimary: selectedCategory ? selectedCategory.id : '' 
//     });
//   };
  
//   const handleSecChange = (e) => {
//     const selectedCategory = catdata.find(category => category.name === e.target.value);
//     setData({ ...data, 
//       bookcategoriesSec: selectedCategory ? selectedCategory.id : '' 
//     });
//   };
//   const handleSeriessChange = (e) => {
//     setData({ ...data, series: e.target.value });
//   };

//   return (
//     <div className='list'>
//       <Sidebar />
//       <div className="listContainer">
//         <Navbar headingmain="Add New Book" />  
//         <div className='all-book-style'>
//         {loading && (
//             <div className="spinner-overlay">
//               <Spinner animation="border" variant="danger" />
             
//             </div>
//           )}
//           <div className="row-userDetails" style={{width:'98%'}}>
//             <div className="input-feild-label">
//               <p className="paragraph-details-user">Book Title (white)</p>
//               <input
//                 value={data.Bookname}
//                 onChange={(e) => setData({ ...data, Bookname: e.target.value })}
//                 className='inputfeild-userDetails'
//                 placeholder='Book Title (white)'
//               />
//             </div>
//             <div className="input-feild-label">
//               <p className="paragraph-details-user"> Book Title/Oblic author(red)</p>
//               <input
//                 value={data.RedTitleBanner}
//                 onChange={(e) => setData({ ...data, RedTitleBanner: e.target.value })}
//                 className='inputfeild-userDetails'
//                 placeholder='Book Title/Oblic author(red)'
//               />
//             </div>
//           </div>

//           <div className="row-userDetails" style={{ marginTop: '1em',width:'98%'}}>
//             <div className="input-feild-label">
//               <p className="paragraph-details-user">Author Name</p>
//               <input
//                 value={data.authorName}
//                 onChange={(e) => setData({ ...data, authorName: e.target.value })}
//                 className='inputfeild-userDetails'
//                 placeholder='Author Name'
//               />
//             </div>
//             <div className="input-feild-label">
//               <p className="paragraph-details-user"> Primary Category</p>
//               <select id="cars"
//                 value={data.bookcategoryPrimary.name}
//                 onChange={handleSeriesChange}
//                 style={{ textTransform: 'capitalize' }}
//               >
//                 <option value=''>Select Primary Category</option>
//                 { catdata?.map(category => (
//                   <option key={category.id} value={category.name}>{category.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
         
//           <div className="row-userDetails" style={{ marginTop: '1em',width:'98%' }}>
//             <div className="input-feild-label">
//               <p className="paragraph-details-user">Secondary Category</p>
//               <select id="cars"
//                 value={data.bookcategoriesSec.name}
//                 onChange={handleSecChange}
//                 style={{ textTransform: 'capitalize' }}
//               >
//                 <option value=''>Select Secondary Category</option>
//                 {catdata?.map(category => (
//                   <option key={category.id} value={category.name}>{category.name}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="input-feild-label">
//               <p className="paragraph-details-user">Series</p>
//               <select id="cars"
//                 value={data.series}
//                 onChange={handleSeriessChange}
//                 style={{ textTransform: 'capitalize' }}
//               >
//                 <option value=''>Select Series</option>
//                 {dataseries.map(category => (
//                   <option key={category.id} value={category.name}>{category.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
//             <p className="paragraph-details-user"> Short Description</p>
//             <textarea
//               value={data.shortDescription}
//               onChange={(e) => setData({ ...data, shortDescription: e.target.value })}
//               rows="3"
//               className='inputfeild-userDetails'
//               placeholder='Short Description'
//             />
//           </div>

//           <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
//             <p className="paragraph-details-user"> Long Description</p>
//             <textarea
//               value={data.longDescription}
//               onChange={(e) => setData({ ...data, longDescription: e.target.value })}
//               rows="6"
//               className='inputfeild-userDetails'
//               placeholder='Long Description'
//             />
//           </div>

//           <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
//           <p className="paragraph-details-user">Upload Book Cover Image Photo</p>
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//             {/* Display selected image */}
//             {data.image && (
//               <div>
//                 <h3>Selected Image:</h3>
//                 <img src={URL.createObjectURL(data.image)} alt="Selected" style={{ maxWidth: '100%' }} />
//               </div>
//             )}
//           </div>
//           <div className="input-feild-label" style={{ marginTop: '1em',width:'98%' }}>
//           <p className="paragraph-details-user">Upload Book File PDF</p>
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//             {/* Display selected image */}
//             {data.image && (
//               <div>
//                 <h3>Selected Image:</h3>
//                 <img src={URL.createObjectURL(data.image)} alt="Selected" style={{ maxWidth: '100%' }} />
//               </div>
//             )}
//           </div>

// <ToastContainer/>
//           <button className='button-all-css' onClick={handleSubmit} style={{ marginTop: '1em' }}>Add Book</button>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddBooks;
import React, { useEffect, useState } from 'react';
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const AddBooks = () => {
  const [catdata, setcatdata] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    Bookname: '',
    RedTitleBanner: '',
    authorName: '',
    bookcategoryPrimary: '',
    bookcategoriesSec: '',
    shortDescription: '',
    longDescription: '',
    image: null,
    pdfFile: null,
    series: ''
  });
  const [loading, setLoading] = useState(false);
  const dataseries = [
      {id:1,name:'Yes'},
      {id:2,name:'No'}
      ]
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, pdfFile: file });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { Bookname, RedTitleBanner, authorName, bookcategoryPrimary, bookcategoriesSec, shortDescription, longDescription, image, pdfFile, series } = data;

    const formData = new FormData();
    formData.append('bookTitle', Bookname);
    formData.append('oblicAuthor', RedTitleBanner);
    formData.append('authorName', authorName);
    formData.append('primaryCategory', bookcategoryPrimary);
    formData.append('secondaryCategory', bookcategoriesSec);
    formData.append('series', series === 'Yes');
    formData.append('shortDescription', shortDescription);
    formData.append('longDescription', longDescription);
    if (image) formData.append('bookCoverImage', image);
    if (pdfFile) formData.append('pdfUpdate', pdfFile);
    formData.append('epubUpload', "https://example.com/book-epub.epub");
    formData.append('kindleMobiUpload', "https://example.com/book-mobi.mobi");

    try {
      const res = await axios.post('https://new-app-testing-2d30280db142.herokuapp.com/books/createbook', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('This category is successfully added!');
      setTimeout(() => {
        navigate('/all-books');
      }, 2000);
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
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getCate');
      const formattedData = response.data?.map((item) => ({
        ...item,
        id: item._id
      }));
      setcatdata(formattedData);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSeriesChange = (e) => {
    const selectedCategory = catdata.find(category => category.name === e.target.value);
    setData({ ...data, bookcategoryPrimary: selectedCategory ? selectedCategory.id : '' });
  };

  const handleSecChange = (e) => {
    const selectedCategory = catdata.find(category => category.name === e.target.value);
    setData({ ...data, bookcategoriesSec: selectedCategory ? selectedCategory.id : '' });
  };

  const handleSeriessChange = (e) => {
    setData({ ...data, series: e.target.value });
  };

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar headingmain="Add New Book" />
        <div className='all-book-style'>
          {loading && (
            <div className="spinner-overlay">
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <div className="row-userDetails" style={{ width: '98%' }}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Book Title (white)</p>
              <input
                value={data.Bookname}
                onChange={(e) => setData({ ...data, Bookname: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Book Title (white)'
              />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user"> Book Title/Oblic author(red)</p>
              <input
                value={data.RedTitleBanner}
                onChange={(e) => setData({ ...data, RedTitleBanner: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Book Title/Oblic author(red)'
              />
            </div>
          </div>

          <div className="row-userDetails" style={{ marginTop: '1em', width: '98%' }}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Author Name</p>
              <input
                value={data.authorName}
                onChange={(e) => setData({ ...data, authorName: e.target.value })}
                className='inputfeild-userDetails'
                placeholder='Author Name'
              />
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user"> Primary Category</p>
              <select id="cars"
                value={data.bookcategoryPrimary.name}
                onChange={handleSeriesChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select Primary Category</option>
                {catdata.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row-userDetails" style={{ marginTop: '1em', width: '98%' }}>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Secondary Category</p>
              {/* <select id="cars"
                value={data.bookcategoriesSec}
                onChange={handleSecChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select Secondary Category</option>
                {catdata.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select> */}
              <select id="cars"
                value={data.bookcategoriesSec.name}
                onChange={handleSecChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select Secondary Category</option>
                {catdata?.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="input-feild-label">
              <p className="paragraph-details-user">Series</p>
              <select id="cars"
                value={data.series.name}
                onChange={handleSeriessChange}
                style={{ textTransform: 'capitalize' }}
              >
                <option value=''>Select Series</option>
                {dataseries.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em', width: '98%' }}>
            <p className="paragraph-details-user"> Short Description</p>
            <textarea
              value={data.shortDescription}
              onChange={(e) => setData({ ...data, shortDescription: e.target.value })}
              rows="3"
              className='inputfeild-userDetails'
              placeholder='Short Description'
            />
          </div>

          <div className="input-feild-label" style={{ marginTop: '1em', width: '98%' }}>
            <p className="paragraph-details-user"> Long Description</p>
            <textarea
              value={data.longDescription}
              onChange={(e) => setData({ ...data, longDescription: e.target.value })}
              rows="6"
              className='inputfeild-userDetails'
              placeholder='Long Description'
            />
          </div>

          <div className="input-feild-label" style={{ marginTop: '1em', width: '98%' }}>
            <p className="paragraph-details-user">Upload Book Cover Image Photo</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {/* Display selected image */}
            {data.image && (
              <div>
                <h3>Selected Image:</h3>
                <img style={{width:'14%'}} src={URL.createObjectURL(data.image)} alt="Selected" style={{ maxWidth: '100%' }} />
              </div>
            )}
          </div>
          <div className="input-feild-label" style={{ marginTop: '1em', width: '98%' }}>
            <p className="paragraph-details-user">Upload Book File PDF</p>
            <input type="file" accept="application/pdf" onChange={handlePdfChange} />
            {/* Display selected PDF */}
            {data.pdfFile && (
              <div>
                <h3>Selected PDF:</h3>
                <p>{data.pdfFile.name}</p>
              </div>
            )}
          </div>

          <ToastContainer />
          <button className='button-all-css' onClick={handleSubmit} style={{ marginTop: '1em' }}>Add Book</button>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;
