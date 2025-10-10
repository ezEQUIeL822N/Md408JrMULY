// 代码生成时间: 2025-10-11 01:59:21
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// VRGameFramework组件
const VRGameFramework = ({ gameName, initialScore }) => {
  // 使用useState Hook来管理游戏得分
  const [score, setScore] = useState(initialScore);

  // 功能：增加分数
  const addScore = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <h1>{gameName}</h1>
      <p>Score: {score}</p>
      <button onClick={addScore}>Add Score</button>
    </div>
  );
};

// PropTypes类型检查
VRGameFramework.propTypes = {
  gameName: PropTypes.string.isRequired,
  initialScore: PropTypes.number,
};

// 默认属性值
VRGameFramework.defaultProps = {
  initialScore: 0,
};

export default VRGameFramework;
