// 代码生成时间: 2025-09-11 14:06:52
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// TypeScript类型定义
interface ApiResponse {
  id: number;
  title: string;
  author: string;
  body: string;
}

const RestfulApiComponent: React.FC<{
  apiEndpoint: string;
}> = ({ apiEndpoint }) => {
  // state定义
  const [data, setData] = useState<ApiResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 使用useEffect钩子来请求数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  // 渲染组件
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

// PropTypes验证
RestfulApiComponent.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
};

// TypeScript类型检查
RestfulApiComponent.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
};

export default RestfulApiComponent;