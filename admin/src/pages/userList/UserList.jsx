import "./userList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from "@mui/icons-material";
import {userRows} from "../../dummyData"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function UserList() {
  const [data,setData] = useState(userRows);

  const handleDelete = (id) =>{
      setData(
          data.filter((item)=>{
            return item.id!==id;
        })
      )
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
        return(
          <div className="userListUser">
            <img src={params.row.avatar} className="userListImg" alt=""/>
            {params.row.username}
          </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 200},
    { field: 'status', headerName: 'Status', width: 120},
    { field: 'transaction', headerName: 'Transaction', width: 150},
    {
      field: "action",
      headerName:"Action",
      width: 150,
      renderCell: (params)=>{
        return(
          <>
              <Link to={"/user/"+ params.row.id} >
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutlineOutlined className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    }
    ];
  
  return (
    <div className="userList">
        <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
