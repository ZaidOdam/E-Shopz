import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import Products from "./Products";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({ padding: "10px 0px" })};
    
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "15px" })};
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "50px" })};
`;

const Centre = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    cursor: pointer;
    font-weight: bold;
    ${mobile({ fontSize: "18px" })};
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const SearchedProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
`;

const Navbar = () => {
  const [products, setProducts] = useState([]);

  const quantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const filterBySearch = async (e) => {
    try {
      const query = e.target.value;
      if (query === "") {
        setProducts([]);
      } else {
        const res = await publicRequest.get(`/products/search?search=${query}`);
        setProducts(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" onChange={filterBySearch} />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>

          <Centre>
            <Logo
              onClick={() => {
                navigate("/");
              }}
            >
              E-Shopz
            </Logo>
          </Centre>

          <Right>
            {user === null ? (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  REGISTER
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  SIGN IN
                </MenuItem>
              </>
            ) : (
              <MenuItem
                onClick={() => {
                  logout(dispatch);
                }}
              >
                LOGOUT
              </MenuItem>
            )}
            <Link to="/cart">
              <MenuItem>
                <Badge
                  badgeContent={quantity}
                  color="primary"
                  overlap="rectangular"
                >
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
      <SearchedProduct>
        {products.map((item) => (
          <Products item={item} key={item._id} />
        ))}
      </SearchedProduct>
    </>
  );
};

export default Navbar;
