// 代码生成时间: 2025-08-29 14:26:05
 * @param {string} props.response - The API response to be formatted.
 * @param {Function} props.onFormat - Callback function to handle formatted response.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ApiResponseFormatter({ response, onFormat }) {
  // State to manage the formatted response
  const [formattedResponse, setFormattedResponse] = useState(null);

  // Function to format the API response
  const formatResponse = () => {
    try {
      // Assuming the API response is a JSON string
      const parsedResponse = JSON.parse(response);
      // Perform any necessary formatting here
      const formatted = JSON.stringify(parsedResponse, null, 2);
      setFormattedResponse(formatted);
      onFormat && onFormat(formatted);
    } catch (error) {
      console.error('Error parsing response:', error);
    }
  };

  // useEffect to format the response when it changes
  React.useEffect(() => {
    if (response) {
      formatResponse();
    }
  }, [response]);

  return (
    <div>
      {formattedResponse ? <pre>{formattedResponse}</pre> : <p>No formatted response available.</p>}
    </div>
  );
}

// PropTypes or TypeScript types for props
ApiResponseFormatter.propTypes = {
  response: PropTypes.string.isRequired,
  onFormat: PropTypes.func,
};

export default ApiResponseFormatter;