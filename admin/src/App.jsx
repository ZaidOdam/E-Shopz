import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";


function App() {
  let admin=null;
  try{
    console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin);
    admin=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  }catch(err){
    console.log(err);
  }
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          
          {admin &&
            
            <>
                <Topbar/>
                <div className="container">
                  <Sidebar/>
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/users" element={<UserList/>}/>
                    <Route path="/user/:userId" element={<User/>}/>
                    <Route path="/newUser" element={<NewUser/>} />
                    <Route path="/products" element={<ProductList/>} />
                    <Route path="/product/:productId" element={<Product/>} />
                    <Route path="/newProduct" element={<NewProduct/>}/>
                </Routes>
              </div>
            </>
          }
      </Router>
    </div>
  );
}

export default App;
