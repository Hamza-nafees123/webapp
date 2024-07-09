// import "./datatable.scss";
// import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource"; // Assuming userColumns is imported correctly
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress component from MUI

// const Datatable = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false); // State for loading indicator
//   const navigation = useNavigate();

//   const fetchData = async () => {
//     setIsLoading(true); // Start loading indicator
//     try {
//       const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getUser');
//       const formattedData = response.data.map((item, index) => ({
//         ...item,
//         id: item._id // Use '_id' or another unique property as 'id'
//       }));
//       setData(formattedData);
//       console.log(formattedData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setIsLoading(false); // Stop loading indicator
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const handleViewDetails = (params) => {
//     navigation('/users/view-details/', { state: { data: params } });
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <div onClick={() => handleViewDetails(params.row)} className="viewButton">View</div>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="datatable">
//       {isLoading ? ( // Render spinner if isLoading is true
//         <div className="loadingSpinner">
//           <CircularProgress color="error" />
//         </div>
//       ) : ( // Render DataGrid when isLoading is false
//         <DataGrid
//           className="datagrid"
//           rows={data}
//           columns={userColumns.concat(actionColumn)}
//           pageSize={15}
//           rowsPerPageOptions={[9]}
//           checkboxSelection
//         />
//       )}
//     </div>
//   );
// };

// export default Datatable;
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource"; // Assuming userColumns is imported correctly
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const Datatable = ({searchQuery}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://new-app-testing-2d30280db142.herokuapp.com/api/getUser');
      const formattedData = response.data.map((item, index) => ({
        ...item,
        id: item._id
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://new-app-testing-2d30280db142.herokuapp.com/api/deleteUser/${id}`);
      if (res.status === 200) {
        setData(data.filter((item) => item.id !== id));
      } else {
        console.error('Failed to delete user. Please try again.');
      }
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  const handleViewDetails = (params) => {
        navigation('/users/view-details/', { state: { data: params } });
      };

  const filteredData = data.filter(user =>
    user.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div onClick={() => handleViewDetails(params.row)} className="viewButton">View</div>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      );
    },
  };

  return (
    <div className="datatable">
      {isLoading ? (
        <div className="loadingSpinner">
          <CircularProgress color="error" />
        </div>
      ) : (  
          <DataGrid
            className="datagrid"
            rows={filteredData}
            columns={[...userColumns, actionColumn]}
            pageSize={11}
            rowsPerPageOptions={[10, 15, 20]}
          />
      
      )}
    </div>
  );
};

export default Datatable;
