import "./productList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {deleteProduct, getProducts} from "../../redux/apiCalls";

export default function ProductList() {

  const dispatch=useDispatch();
  const products=useSelector(state=>state.product.products);

  useEffect(()=>{
    getProducts(dispatch);
  },[dispatch]);
  

  const handleDelete = (id) =>{
    deleteProduct(id,dispatch);
}

const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 220 },
  { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
      return(
        <div className="productListItem">
          <img src={params.row.img} className="productListImg" alt=""/>
          {params.row.title}
        </div>
      )
  } },
  { field: 'inStock', headerName: 'Stock', width: 200},
  { field: 'price', headerName: 'Price', width: 150},
  {
    field: "action",
    headerName:"Action",
    width: 150,
    renderCell: (params)=>{
      return(
        <>
            <Link to={"/product/"+ params.row._id} >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined className="productListDelete" onClick={()=>handleDelete(params.row._id)} />
        </>
      )
    }
  }
  ];

  return (
    <div className="productList">
      
     <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
