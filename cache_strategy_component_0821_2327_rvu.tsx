// 代码生成时间: 2025-08-21 23:27:52
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// TypeScript类型定义
interface CacheStrategyProps {
  data: any; // 可以被缓存的数据
  children: (cachedData: any) => React.ReactNode; // 用于渲染缓存数据的函数
}

// 使用PropTypes定义类型
const propTypes = {
  data: PropTypes.any.isRequired,
  children: PropTypes.func.isRequired,
};

// 缓存策略组件
const CacheStrategyComponent: React.FC<CacheStrategyProps> = ({ data, children }) => {
  // state管理，用于存储缓存数据
  const [cachedData, setCachedData] = useState(null);

  // 缓存数据，仅当数据变化时更新
  useEffect(() => {
    const cachedDataFromCache = localStorage.getItem('cachedData');
    if (cachedDataFromCache) {
      setCachedData(JSON.parse(cachedDataFromCache));
    } else {
      setCachedData(data);
      localStorage.setItem('cachedData', JSON.stringify(data));
    }
  }, [data]);

  // 当组件卸载时，清理缓存
  useEffect(() => {
    return () => {
      localStorage.removeItem('cachedData');
    };
  }, []);

  // 渲染缓存数据
  return <>{children(cachedData)}</>;
};

// 设置propTypes
CacheStrategyComponent.propTypes = propTypes;

export default CacheStrategyComponent;