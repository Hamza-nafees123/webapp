import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { allCategory } from "../../datatablesource"; // Assuming you have imported `allCategory` from your source file
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress component from MUI
import { ToastContainer, toast } from "react-toastify";

const AllCategoryTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id)); // Update local state
  
    try {
      const res = await axios.delete(`https://new-app-testing-2d30280db142.herokuapp.com/api/deletecate/${id}`);
      toast.success('This category is successfully deleted!'); // Show success toast
  
    } catch (error) {
      console.error('Error making API call:', error);
      if (error.response) {
        console.log('Error Response Data:', error.response.data);
        toast.error(error.response.data.message || 'Error deleting category. Please try again.');
      } else if (error.request) {
        console.log('Error Request Data:', error.request);
        toast.error('No response from server. Please try again.');
      } else {
        console.log('Error Message:', error.message);
        toast.error('Error deleting category. Please try again.');
      }
    } 
  };

  const fetchData = async () => {
    setIsLoading(true); // Start loading indicator
    try {
      const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getCate');
      const formattedData = response.data.map((item, index) => ({
        ...item,
        id: item._id // Use '_id' or another unique property as 'id'
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
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
    <div className="datatable" style={{ paddingTop: 0 }}>
      <div className="datatableTitle">All Categories Data</div>
      <ToastContainer />
      {isLoading ? (
        <div className="loadingSpinner">
          <CircularProgress color="error" />
        </div>
      ) : (
        data?.length > 0 ? (
          <DataGrid
            className="datagrid"
            rows={data}
            columns={allCategory?.concat(actionColumn)}
            pageSize={15}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        ) : (
          <p>No data available</p> // Handle empty state if necessary
        )
      )}
    </div>
  );
};

export default AllCategoryTable;
