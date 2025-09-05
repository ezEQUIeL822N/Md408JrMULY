// 代码生成时间: 2025-09-05 19:41:38
// TestReportGenerator.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的PropTypes类型
const propTypes = {
  testResults: PropTypes.arrayOf(
    PropTypes.shape({
      testName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      details: PropTypes.string,
    })
  ).isRequired,
  onGenerateReport: PropTypes.func.isRequired,
};

// 定义组件的默认Props
const defaultProps = {
  testResults: [],
};

// 函数组件，使用useState进行状态管理
const TestReportGenerator = ({ testResults, onGenerateReport }) => {
  // 状态：报告的内容和是否显示报告
  const [reportContent, setReportContent] = useState('');
  const [showReport, setShowReport] = useState(false);

  // 处理生成报告的函数
  const handleGenerateReport = () => {
    const content = testResults.map((result) => {
      return `Test Name: ${result.testName}
Status: ${result.status}
Details: ${result.details || 'N/A'}

`;
    }).join('');
    setReportContent(content);
    setShowReport(true);
    onGenerateReport(content);
  };

  return (
    <div>
      {showReport ? (
        <div>
          <h2>Test Report</h2>
          <pre>{reportContent}</pre>
          <button onClick={() => setShowReport(false)}>Hide Report</button>
        </div>
      ) : (
        <button onClick={handleGenerateReport}>Generate Report</button>
      )}
    </div>
  );
};

TestReportGenerator.propTypes = propTypes;
TestReportGenerator.defaultProps = defaultProps;

export default TestReportGenerator;