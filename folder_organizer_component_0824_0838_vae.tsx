// 代码生成时间: 2025-08-24 08:38:26
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the structure of the folder data
interface FolderNode {
  name: string;
  children?: FolderNode[];
}

// Define the props types for the component
interface FolderOrganizerProps {
  initialFolders: FolderNode[];
}

const FolderOrganizerComponent: React.FC<FolderOrganizerProps> = ({ initialFolders }) => {
  // State to manage folder data with children
  const [folders, setFolders] = useState<FolderNode[]>(initialFolders);

  // Function to add a new folder
  const addFolder = (parentName: string, folderName: string) => {
    setFolders((prevFolders) => prevFolders.map((folder) => {
      if (folder.name === parentName) {
        return {
          ...folder,
          children: [...folder.children || [], { name: folderName } as FolderNode],
        };
      }
      return folder;
    }));
  };

  // Function to remove a folder
  const removeFolder = (folderName: string) => {
    setFolders((prevFolders) => prevFolders.map((folder) => {
      if (folder.children) {
        return {
          ...folder,
          children: folder.children.filter((child) => child.name !== folderName),
        };
      }
      return folder;
    }));
  };

  // Render the folder structure
  const renderFolder = (folder: FolderNode, parentName: string, index: number) => (
    <div key={index} style={{ marginLeft: '20px' }}>{folder.name}
      {folder.children && (
        <ul>
          {folder.children.map((child, index) => renderFolder(child, folder.name, index))}
        </ul>
      )}
      <button onClick={() => addFolder(folder.name, `New Folder (${parentName})`)}>Add Folder</button>
      <button onClick={() => removeFolder(folder.name)}>Remove Folder</button>
    </div>
  );

  return (
    <div>
      <h1>Folder Organizer</h1>
      <ul>
        {folders.map((folder, index) => renderFolder(folder, '', index))}
      </ul>
    </div>
  );
};

// PropTypes type definitions
FolderOrganizerComponent.propTypes = {
  initialFolders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }),
  ).isRequired,
};

// TypeScript type definitions
FolderOrganizerComponent.propTypes = {
  initialFolders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      ),
    }),
  ).isRequired,
};

export default FolderOrganizerComponent;