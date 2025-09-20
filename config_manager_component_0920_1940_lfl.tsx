// 代码生成时间: 2025-09-20 19:40:08
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TypeScript类型定义
interface ConfigManagerProps {
  config: { [key: string]: any };
  onSave: (config: { [key: string]: any }) => void;
}

const ConfigManager = ({ config, onSave }: ConfigManagerProps) => {
  // 使用useState管理配置状态
  const [currentConfig, setCurrentConfig] = useState(config);

  // 处理配置更改
  const handleConfigChange = (key: string, value: string) => {
    setCurrentConfig((prevState) => ({ ...prevState, [key]: value }));
  };

  // 处理保存配置
  const handleSave = () => {
    onSave(currentConfig);
  };

  return (
    <div>
      {Object.entries(currentConfig).map(([key, value]) => (
        <div key={key}>
          <label>{key}:</label>
          <input type="text" value={value} onChange={(e) => handleConfigChange(key, e.target.value)} />
        </div>
      ))}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

// PropTypes类型检查
ConfigManager.propTypes = {
  config: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ConfigManager;