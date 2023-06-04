import {useState} from "react"
import "./newProduct.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import {addProduct} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";


export default function NewProduct(){
    const [inputs,setInputs]=useState({});
    const [file,setFile]=useState(null);
    const [cat,setCat]=useState([]);

    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        });
    };
    const handleCat=(e)=>{
        setCat(e.target.value.split(","));
    };

    const handleClick=(e)=>{
        e.preventDefault();

        const fileName= new Date().getTime()+file.name;
        const storage=getStorage(app);
        const storageRef=ref(storage,fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product= {...inputs,img:downloadURL,categories:cat};
                    addProduct(product,dispatch);  
                });
            }
        );

    }



    return(
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Image</label>
                    <input type="file" name="" id="" onChange={e=>setFile(e.target.files[0])} />
                </div>
                <div className="newProductItem">
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Nike T-shirt" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Description</label>
                    <input name="desc" type="text" placeholder="Description..." onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Price</label>
                    <input name="price" type="number" placeholder="Price /-" onChange={handleChange} />
                </div>
                <div className="newProductItem">
                    <label>Categories</label>
                    <input type="text" placeholder="jeans,shirt" onChange={handleCat} />
                </div>
                <div className="newProductItem">
                    <label>Stock</label>
                    <select name="inStock" className="newProductSelect" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleClick} className="newProductButton">Create</button>
            </form>
        </div>
    )
}