import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react';
import styled from 'styled-components'
import Products from './Products';
import {publicRequest} from '../requestMethods';

const Container=styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Product = ({cat,filters,sort}) => {
  
  
  const [products,setProducts]=useState([]);
  const [filteredproducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    const getProducts=async ()=>{
      try{
        const res=await publicRequest.get(
          cat?`/products?category=${cat}`:"/products"
        );
        setProducts(res.data);
      }catch(err){

      }
    }
    getProducts();
  },[cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> 
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        )
      )
    );
  },[products,cat,filters]);

  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
      );
    }else if(sort==="asc"){
        setFilteredProducts((prev)=>
          [...prev].sort((a,b)=>a.price-b.price)
        );
    }else{
      setFilteredProducts((prev)=>
          [...prev].sort((a,b)=>b.price-a.price)
        );
    }
  },[sort]);

  return (
    <Container>
        {cat
          ?filteredproducts.map(item=>(<Products item={item} key={item._id}/>))
          :products.slice(0,8).map((item)=><Products item={item} key={item._id}/>)
        }
    </Container>
  )
}

export default Product