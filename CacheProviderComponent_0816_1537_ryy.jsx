// 代码生成时间: 2025-08-16 15:37:53
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CacheProviderComponent = ({ cacheKey, fetchData, initialData }) => {
  // State to store the cached data
  const [data, setData] = useState(initialData);
  
  // Effect to fetch and cache data if it's not present
  useEffect(() => {
    const fetchAndUpdateCache = async () => {
      if (!data) {
        const newData = await fetchData();
        setData(newData);
      }
    };
    
    fetchAndUpdateCache();
  }, [data, fetchData, cacheKey]);  // Dependencies for the effect
  
  // Function to clear the cache
  const clearCache = () => {
    setData(null);
  };
  
  // PropTypes for type checking
  const propTypes = {
    cacheKey: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired,
    initialData: PropTypes.any,
  };
  
  return (
    <div>
      {data ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={clearCache}>Clear Cache</button>
    </div>
  );
};

export default CacheProviderComponent;