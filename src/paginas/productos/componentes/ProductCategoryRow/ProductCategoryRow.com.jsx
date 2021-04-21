import React from 'react';

import './ProductCategoryRow.style.css';


const ProductCategoryRow = (props) => {
    return (
        <div className="pcr-container">
            {props.CategoryName}
        
        </div>
    )
}

export default ProductCategoryRow;