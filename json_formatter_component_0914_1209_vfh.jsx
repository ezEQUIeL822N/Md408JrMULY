// 代码生成时间: 2025-09-14 12:09:37
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for expected props
const propTypes = {
  json: PropTypes.string.isRequired,  // JSON string
  onChange: PropTypes.func.isRequired  // Callback function when conversion is done
};

// Define the component
const JsonFormatterComponent = ({ json, onChange }) => {
  // State to manage JSON content and formatted content
  const [jsonContent, setJsonContent] = useState(json);
  const [formattedJson, setFormattedJson] = useState('');

  // Function to handle the JSON formatting
  const handleFormat = () => {
    try {
      // Attempt to parse the JSON and format it
      const parsedJson = JSON.parse(jsonContent);
      const formatted = JSON.stringify(parsedJson, null, 2);
      setFormattedJson(formatted);
      onChange(formatted);
    } catch (error) {
      // Handle JSON parsing errors
      console.error('Invalid JSON:', error);
      setFormattedJson('Invalid JSON');
    }
  };

  // Event handler for input changes
  const handleInputChange = (event) => {
    setJsonContent(event.target.value);
  };

  return (
    <div>
      <textarea
        value={jsonContent}
        onChange={handleInputChange}
        style={{ width: '100%', height: '200px' }}
        placeholder="Enter JSON..."
      />
a
      <button onClick={handleFormat}>Format JSON</button>

      {formattedJson && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
          {formattedJson}
        </div>
      )}
    </div>
  );
};

// Set PropTypes for the component
JsonFormatterComponent.propTypes = propTypes;

export default JsonFormatterComponent;