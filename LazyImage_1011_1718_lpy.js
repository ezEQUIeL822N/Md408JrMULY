// 代码生成时间: 2025-10-11 17:18:46
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时的类型定义
// import { FC, PropsWithChildren } from 'react';
// import { ImageProps } from 'react-native';
// type LazyImageProps = PropsWithChildren<Pick<ImageProps, 'style'>> & {
//   src: string;
//   alt: string;
//   placeholder?: string;
// };

const LazyImage = ({ src, alt, placeholder = '', style, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '50%',
      threshold: 0.1,
    });

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      style={style}
      {...props}
    />
  );
};

// PropTypes
LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

// TypeScript类型定义
// export const LazyImage: FC<LazyImageProps> = (props) => { /* ... */ };

export default LazyImage;