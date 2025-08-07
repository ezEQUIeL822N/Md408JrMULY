// 代码生成时间: 2025-08-08 04:50:48
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the data and the function signature for the fetchData function
const propTypes = {
  url: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const RestfulApiComponent = ({ url, fetchData }) => {
  // State to manage API data and loading status
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect to handle fetching data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        // Call the fetchData function provided as a prop
        const result = await fetchData(url);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [url, fetchData]); // Re-run the effect if the URL or fetchData function changes

  // Render the component with fetched data, loading state, or error message
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

// Type check the props
RestfulApiComponent.propTypes = propTypes;

export default RestfulApiComponent;
