import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "../list/list.scss";
import '../UserDetailsViewpg/UserDetails.css';
import { AudioBookDataObj, AudioBooksData, BookColmData, BookData } from '../../datatablesource'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
const AddAudioBooks = () => {
    const [data, setData] = useState(AudioBookDataObj);
    const navigation = useNavigate();
  
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const handleViewDetails = (params) => {
      navigation('/Dashboard/add-audio-books/audio-book-details', { state: { data: params } });
    };
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="cellAction">
     
                <div onClick={()=>handleViewDetails(params.row)} className="viewButton">Edit</div>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        },
      },
    ];
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
        <Navbar headingmain="All Audio Books Data" showSearchBar={true}/>
        <div className="add-categroy-name" style={{width:'97%',margin:'auto',marginTop:30,paddingRight:10}}>
            <div className="auidoBook-div-sub-coln"><h2 className='heading-h2-all-main' style={{color:'#ee2d2f',fontSize:22}}>Add New Audio Book</h2></div>
            <div className="auidoBook-div-sub-coln"><button className="addButton" onClick={()=>navigation('/Dashboard/add-audio-books/add-new-audio-book-add')} style={{width:'13em',background:'#ee2d2f',color:'white'}}>Add Book</button></div>
        </div>
        <div className="datatable" >
      <DataGrid
        className="datagrid"
        rows={data}
        columns={AudioBooksData.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
        <div className='all-book-style'>
        </div>
        
      </div>
    </div>
  )
}

export default AddAudioBooks