// 代码生成时间: 2025-08-22 23:32:42
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// TypeScript类型定义
interface SchedulerProps {
  interval: number; // 定时任务的间隔时间（秒）
  callback: () => void; // 定时任务执行的回调函数
}

// 使用PropTypes进行类型检查
const propTypes = {
  interval: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

const SchedulerComponent = ({ interval, callback }: SchedulerProps) => {
  // 状态管理，用于存储定时器ID
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // 设置定时任务
    const id = setInterval(callback, interval * 1000);
    setTimerId(id);

    // 清理函数，用于清除定时任务
    return () => clearInterval(id);
  }, [interval, callback]);

  useEffect(() => {
    // 组件卸载时清除定时任务
    return () => {
      if (timerId !== null) clearInterval(timerId);
    };
  }, [timerId]);

  return (
    <div>
      <p>定时任务调度器正在运行...</p>
      <button onClick={() => {
        if (timerId !== null) {
          clearInterval(timerId);
          setTimerId(null);
        }
      }}>停止定时任务</button>
    </div>
  );
};

SchedulerComponent.propTypes = propTypes;

export default SchedulerComponent;
