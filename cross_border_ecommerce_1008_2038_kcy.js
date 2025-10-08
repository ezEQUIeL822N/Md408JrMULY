// 代码生成时间: 2025-10-08 20:38:48
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the Product type using PropTypes
const ProductPropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string
};

// Define the state type
type StateType = {
    products: Array<Object>,
    searchQuery: string
};

const CrossBorderEcommerce = ({ initialProducts }) => {
    // State to manage products and search query
    const [products, setProducts] = useState(initialProducts);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on the search query
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filteredProducts = query ?
            products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())) :
            products;
        setProducts(filteredProducts);
    };

    return (
        <div>
            <h1>Cross-Border Ecommerce Platform</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products..."
            />
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price} {product.currency}</p>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// PropTypes for the component
CrossBorderEcommerce.propTypes = {
    initialProducts: PropTypes.arrayOf(PropTypes.shape(ProductPropTypes)).isRequired,
};

export default CrossBorderEcommerce;