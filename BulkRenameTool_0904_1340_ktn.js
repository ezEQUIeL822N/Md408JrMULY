// 代码生成时间: 2025-09-04 13:40:03
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define TypeScript type for the file data structure
type FileData = {
  name: string;
  newName: string;
};

// Define TypeScript type for the component's props
type BulkRenameToolProps = {
  files: FileData[];
  renameFile: (oldName: string, newName: string) => void;
};

const BulkRenameTool = ({ files, renameFile }: BulkRenameToolProps) => {
  // State to manage file names
  const [fileNames, setFileNames] = useState<string[]>([]);

  // Initialize state with file names
  useEffect(() => {
    setFileNames(files.map(file => file.name));
  }, [files]);

  // Handle rename operation
  const handleRename = () => {
    fileNames.forEach((name, index) => {
      const newName = fileNames[index] + '_renamed';
      renameFile(name, newName);
    });
  };

  return (
    <div>
      {fileNames.map((name, index) => (
        <div key={index}>
          <input
            value={fileNames[index] || ''}
            onChange={(e) => setFileNames(prevNames =>
              prevNames.map((file, i) => (i === index ? e.target.value : file))
            )}
          />
        </div>
      ))}
      <button onClick={handleRename}>Rename Files</button>
    </div>
  );
};

// Prop types for component
BulkRenameTool.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    newName: PropTypes.string.isRequired,
  })).isRequired,
  renameFile: PropTypes.func.isRequired,
};

export default BulkRenameTool;
