import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { CatoriesDataobj, allCategory, } from "../../datatablesource";

const AllAudioCategoryTable = () => {

  const [data, setData] = useState(CatoriesDataobj);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
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
    <div className="datatable" style={{paddingTop:0}}>
      <div className="datatableTitle">All Audio Categories Data</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={allCategory.concat(actionColumn)}
        pageSize={15}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AllAudioCategoryTable;
