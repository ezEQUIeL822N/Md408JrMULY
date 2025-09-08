// 代码生成时间: 2025-09-08 11:32:39
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 用于PropTypes类型检查

// 定义组件的propTypes，确保类型正确性
const propTypes = {
  defaultSize: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

// 定义组件的默认props
const defaultProps = {
  defaultSize: '100px',
  images: [],
};

// 图片尺寸批量调整器组件
const ImageResizerComponent = ({ defaultSize, images }) => {
  // 使用useState Hook来管理尺寸状态
  const [size, setSize] = useState(defaultSize);

  // 调整尺寸的函数
  const adjustSize = (newSize) => {
    setSize(newSize);
  };

  // 渲染图片
  const renderImages = () => {
    return images.map((image, index) => (
      <img key={index} src={image} style={{ width: size, height: size }} alt="resized image" />
    ));
  };

  return (
    <div>
      {/* 显示尺寸输入框，允许用户输入新的尺寸并调整图片尺寸 */}
      <input
        type="text"
        value={size}
        onChange={(e) => adjustSize(e.target.value)}
      />
      {/* 显示调整后的图片 */}
      <div>{renderImages()}</div>
    </div>
  );
};

// 应用propTypes和defaultProps
ImageResizerComponent.propTypes = propTypes;
ImageResizerComponent.defaultProps = defaultProps;

export default ImageResizerComponent;