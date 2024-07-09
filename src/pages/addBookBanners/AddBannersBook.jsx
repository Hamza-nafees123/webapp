import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { BookColmData } from "../../datatablesource";
import '../UserDetailsViewpg/UserDetails.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const AllBannerBookTable = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/books/getbook');
      const formattedData = response.data.books.map((item, index) => ({
        ...item,
        id: item._id
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch books. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filteredData = data.filter(book => 
    book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Function to handle adding or cancelling a book banner
  const handleBannerAction = (id) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        // Toggle status between 'added' and 'not added' (if already added, cancel it)
        return { ...item, status: item.status === 'added' ? 'not added' : 'added' };
      }
      return item;
    });
    setData(updatedData);
  };

  // Function to log IDs when Update button is clicked
  const handleUpdate = () => {
    const updatedIds = data.filter(item => item.status === 'added').map(item => item.id);
    console.log("Updated IDs:", updatedIds);
  };

  // Action column definition with buttons for add, cancel, and update
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="addButton"
              style={{ background: params.row.status === 'added' ? '#ee2d2f' : 'white', color: params.row.status === 'added' ? 'white' : '#ee2d2f' }}
              onClick={() => handleBannerAction(params.row.id)}
            >
              {params.row.status === 'added' ? 'Cancel Book Banner' : 'Add Book Banner'}
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable" style={{ paddingTop: 0}}>
      <ToastContainer/>
      {isLoading ? (
        <div className="loadingSpinner">
          <CircularProgress color="error" />
        </div>
      ) : (
       
      <DataGrid
        className="datagrid"
        rows={filteredData}
        columns={BookColmData.concat(actionColumn)}
        pageSize={11}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
      
  
      )}
  
    </div>
  );
};

export default AllBannerBookTable;
