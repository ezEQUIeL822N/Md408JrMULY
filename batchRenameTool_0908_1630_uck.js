// 代码生成时间: 2025-09-08 16:30:07
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the rename function
type RenameFunction = (file: { name: string; index: number; }) => string;

// Define the component props type
const propTypes = {
  files: PropTypes.arrayOf(PropTypes.string).isRequired,
  renameFunction: PropTypes.func.isRequired,
};

// Define the component using function component and hooks
const BatchRenameTool = ({ files, renameFunction }) => {
  // State for the new names of the files
  const [newNames, setNewNames] = useState<string[]>(files.map(file => file));
  
  // Handle input changes for each file
  const handleInputChange = (index, newName) => {
    const updatedNames = [...newNames];
    updatedNames[index] = newName;
    setNewNames(updatedNames);
  };
  
  // Render the file list
  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>
          <input
            type="text"
            value={newNames[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button onClick={() => renameFunction({ name: newNames[index], index })}>Rename</button>
        </div>
      ))}
    </div>
  );
};

// Set the propTypes to the component
BatchRenameTool.propTypes = propTypes;

export default BatchRenameTool;