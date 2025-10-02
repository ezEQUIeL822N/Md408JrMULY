// 代码生成时间: 2025-10-03 04:26:39
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the node prop
const nodeShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const BlockchainNodeManager = ({ nodes }) => {
  // State to keep track of active nodes
  const [activeNodes, setActiveNodes] = useState(nodes.filter(node => node.isActive));

  // Function to toggle node activity
  const toggleNode = (nodeId) => {
    setActiveNodes(
      activeNodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, isActive: !node.isActive };
        }
        return node;
      }),
    );
  };

  return (
    <div>
      <h1>Blockchain Nodes</h1>
      <ul>
        {activeNodes.map(node => (
          <li key={node.id}>{node.name} - <button onClick={() => toggleNode(node.id)}>Toggle</button></li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes for the nodes prop
BlockchainNodeManager.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape(nodeShape)).isRequired,
};

export default BlockchainNodeManager;