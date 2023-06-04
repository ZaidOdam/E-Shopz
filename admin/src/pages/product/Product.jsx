import {useLocation} from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./product.css"
import { Publish } from "@mui/icons-material"
import {useSelector} from "react-redux"
import {useEffect, useMemo, useState} from "react"
import {userRequest} from "../../requestMethods"

export default function Product() {

    const location=useLocation();
    const productId=location.pathname.split("/")[2];
    const product=useSelector(state=>
        state.product.products.find((product)=>product._id===productId)
    );

    const MONTHS=useMemo(
        ()=>[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        []
      );
    const [pStats,setPStats]=useState([]);

    useEffect(()=>{
        const getStats= async()=>{
            try{
                const res=await userRequest.get("orders/income?pid="+productId);
                // const list=res.data.sort((a,b)=>{
                //     return a._id-b._id;
                // });
                res.data.map((item)=>{
                    setPStats((prev)=>[
                        ...prev,
                        {name:MONTHS[item._id-1],Sales:item.total},
                    ]);
                });
            }catch(err){
                console.log(err);
            }
        }
        getStats();
    },[MONTHS]);


  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <a href="/newProduct">
                <button className="productAddButton"> Create </button>
            </a>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
            <div className="productInfoTop">
                <img src={product.img} 
                alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoButtom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">120</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">{product.inStock.toString()}</span>
                </div>
            </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input placeholder={product.title} type="text" />
                    <label>Product Description</label>
                    <input placeholder={product.desc} type="text" />
                    <label>Product Price</label>
                    <input placeholder={product.price} type="text" />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={product.img}
                            alt="" className="productUploadImg" />
                        <label htmlFor="file">
                            <Publish/>
                        </label>
                        <input type="file"  id="file"  style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
