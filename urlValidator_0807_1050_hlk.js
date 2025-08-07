// 代码生成时间: 2025-08-07 10:50:53
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValidUrl } from './urlValidationUtils'; // 假设我们有一个工具函数来验证URL

// 函数组件URLValidator
const URLValidator = ({ url }) => {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  const handleValidation = () => {
    const valid = isValidUrl(url);
    setIsValid(valid);
    if (!valid) {
      setError('Invalid URL');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => { handleValidation(); }}
      />
      {isValid ? (
        <p style={{ color: 'green' }}>Valid URL</p>
      ) : (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </div>
  );
};

// 使用PropTypes进行类型检查
URLValidator.propTypes = {
  url: PropTypes.string.isRequired,
};

export default URLValidator;