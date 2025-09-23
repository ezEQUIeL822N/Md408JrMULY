// 代码生成时间: 2025-09-23 17:14:23
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes if not using TypeScript
const propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
};

// Using TypeScript, define the props type
type WebContentScraperProps = {
  url: string;
  children?: React.ReactNode;
};

const WebContentScraper = ({ url, children }: WebContentScraperProps) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch content from the URL
  const fetchContent = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.text();
      setContent(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // useEffect to call fetchContent on mount
  React.useEffect(() => {
    fetchContent();
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render content if available, otherwise show children
  return (
    <div>
      {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : children}
    </div>
  );
};

WebContentScraper.propTypes = propTypes;

export default WebContentScraper;
