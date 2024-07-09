import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BookColmData, BookData, userColumns,userRows } from "../../datatablesource";

const AllSeriesBook = () => {

  const [data, setData] = useState(BookData);
  const navigation = useNavigate();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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
    <div className="datatable" >
      <DataGrid
        className="datagrid"
        rows={data}
        columns={BookColmData.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AllSeriesBook;
