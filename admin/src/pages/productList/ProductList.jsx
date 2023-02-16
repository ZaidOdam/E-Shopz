import "./productList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from "@mui/icons-material";
import {productRows} from "../../dummyData"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function ProductList() {

  const [data,setData]=useState(productRows);

  const handleDelete = (id) =>{
    setData(
        data.filter((item)=>{
          return item.id!==id;
      })
    )
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
      return(
        <div className="productListItem">
          <img src={params.row.img} className="productListImg" alt=""/>
          {params.row.name}
        </div>
      )
  } },
  { field: 'stock', headerName: 'Stock', width: 200},
  { field: 'status', headerName: 'Status', width: 120},
  { field: 'price', headerName: 'Price', width: 150},
  {
    field: "action",
    headerName:"Action",
    width: 150,
    renderCell: (params)=>{
      return(
        <>
            <Link to={"/product/"+ params.row.id} >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
        </>
      )
    }
  }
  ];

  return (
    <div className="productList">
      
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
