// 代码生成时间: 2025-08-23 14:02:32
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TypeScript 类型定义
interface HashCalculatorProps {
  algorithm?: 'sha256' | 'md5';
}

// PropTypes 类型定义
const HashCalculatorPropTypes = {
  algorithm: PropTypes.oneOf(['sha256', 'md5'])
};

// 哈希计算函数
const hashFunction = (algorithm: string, value: string): string => {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);

  return window.crypto.subtle.digest(algorithm, data).then(digest => {
    return Array.from(new Uint8Array(digest))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  });
};

// 函数组件
const HashCalculatorComponent: React.FC<HashCalculatorProps> = ({ algorithm = 'sha256' }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [hashValue, setHashValue] = useState<string>('-');

  // 处理输入值变化的函数
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 计算哈希值的函数
  const calculateHash = async () => {
    try {
      const hash = await hashFunction(algorithm, inputValue);
      setHashValue(hash);
    } catch (error) {
      console.error('Hash calculation failed:', error);
      setHashValue('Error');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text to calculate its hash"
      />
      <button onClick={calculateHash}>Calculate Hash</button>
      <p>Hash Value: {hashValue}</p>
    </div>
  );
};

HashCalculatorComponent.propTypes = HashCalculatorPropTypes;

export default HashCalculatorComponent;