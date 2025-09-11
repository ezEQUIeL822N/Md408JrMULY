// 代码生成时间: 2025-09-11 23:35:14
import React, { useState, useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import PropTypes from 'prop-types';

// PropTypes type definition
const propTypes = {
  children: PropTypes.node.isRequired
};

// TypeScript type definition
type NetworkStatusCheckerProps = {
  children: JSX.Element;
};

const NetworkStatusChecker: React.FC<NetworkStatusCheckerProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const handleConnectivityChange = (state) => {
    setIsConnected(state.isConnected);
  };

  useEffect(() => {
    const unsubscribe = useNetInfo().addEventListener(handleConnectivityChange);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {children(isConnected)}
    </div>
  );
};

NetworkStatusChecker.propTypes = propTypes;

export default NetworkStatusChecker;