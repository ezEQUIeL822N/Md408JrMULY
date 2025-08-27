// 代码生成时间: 2025-08-27 17:37:09
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 数据模型设计
const CounterComponent = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// PropTypes or TypeScript 类型
CounterComponent.propTypes = {
  initialCount: PropTypes.number,
};

export default CounterComponent;