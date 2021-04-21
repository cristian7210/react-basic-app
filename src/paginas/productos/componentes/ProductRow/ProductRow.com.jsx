import React from 'react';

import './ProductRow.style.css';


const ProductRow = (props) => {
    return (
        <div className="pr-container">
            {
                props.product.stock === 0
            ?//if = true
                <spam className="pr-stock">{props.product.name}</spam>
            :// else
                <spam>{props.product.name}</spam>
            }
            {'   '}   {props.product.price}
        </div>
    );
}

export default ProductRow;