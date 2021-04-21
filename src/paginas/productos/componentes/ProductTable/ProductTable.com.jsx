import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.com';
import ProductRow from '../ProductRow/ProductRow.com';
import './ProductTable.style.css';

const ProductTable = () => {
    return (

      <div class="pt-container">
         
         <ProductCategoryRow CategoryName="Sporting Good" />
         <ProductRow product={{
           name:"futbol",
           price:49.99,
           stock:12,
         }}/>
         <ProductRow product={{
           name:"Baseball",
           price:9.99,
           stock:7,
         }}/>
         <ProductRow product={{
           name:"Basketball",
           price:29.99,
           stock:0,
         }}/>
         <ProductCategoryRow CategoryName="Electronics" />
         <ProductCategoryRow CategoryName="Sporting Good" />
         <ProductRow product={{
           name:"Ipod touch",
           price:99.99,
           stock:12,
         }}/>
         <ProductRow product={{
           name:"Iphone 5",
           price:399.99,
           stock:0,
         }}/>
         <ProductRow product={{
           name:"Nessus",
           price:199.99,
           stock:6,
         }}/>
         

      </div>

    )
}

export default ProductTable;