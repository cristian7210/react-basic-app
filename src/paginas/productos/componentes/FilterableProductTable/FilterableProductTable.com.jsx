import React from 'react';
import ProductTable from '../ProductTable/ProductTable.com';
import SearchBar from '../search-bar/search-bar.com';
import './FilterableProductTable.style.css';


const FilterableProductTable = () => {
    return (
    <div className="fpt-container" >
        
     <SearchBar/><ProductTable/>

    </div>
    )
}

export default FilterableProductTable;