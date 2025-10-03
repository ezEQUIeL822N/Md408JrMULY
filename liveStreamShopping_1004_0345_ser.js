// 代码生成时间: 2025-10-04 03:45:21
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义商品类型
type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
};

// 直播带货组件
const LiveStreamShopping = ({ products }) => {
  // 管理选中的商品
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  // 处理商品点击事件
  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
  };

  return (
    <div className="live-stream-shopping">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product" onClick={() => handleProductClick(product)}
            style={{ cursor: 'pointer', padding: '10px', margin: '10px', border: '1px solid #ccc' }}
          >
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            {selectedProduct && selectedProduct.id === product.id ? <p>Selected</p> : <p>Click to Select</p>}
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="selected-product">
          <h2>Selected Product</h2>
          <p>Name: {selectedProduct.name}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Description: {selectedProduct.description}</p>
          {selectedProduct.inStock ? <p>In Stock</p> : <p>Out of Stock</p>}
        </div>
      )}
    </div>
  );
};

// Prop类型检查
LiveStreamShopping.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
  })).isRequired,
};

export default LiveStreamShopping;