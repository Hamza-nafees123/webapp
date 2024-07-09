import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BookColmData } from "../../datatablesource"; // Assuming you have this for columns
import { CircularProgress } from "@mui/material";

const Datatable = ({ searchQuery }) => {
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

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://new-app-testing-2d30280db142.herokuapp.com/books/deletebook/${id}`);
      if (res.status === 200) {
        setData(data.filter((item) => item.id !== id));
        toast.success('Book deleted successfully!');
      } else {
        toast.error('Failed to delete book. Please try again.');
      }
    } catch (error) {
      console.error('Error making API call:', error);
      toast.error('Failed to delete book. Please try again.');
    }
  };

  const handleViewDetails = (params) => {
    navigation('/all-books/book-details', { state: { data: params } });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div onClick={() => handleViewDetails(params.row)} className="viewButton">Edit</div>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];

  const filteredData = data.filter(book => 
    book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="datatable">
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
      />)}
    </div>
  );
};

export default Datatable;
