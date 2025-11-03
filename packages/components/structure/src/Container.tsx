import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Container({ children, className, style }: ContainerProps) {
  const baseStyle: React.CSSProperties = {
    maxWidth: 960,
    margin: '0 auto',
    padding: 24,
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
  };

  return (
    <div className={className} style={{ ...baseStyle, ...style }}>
      {children}
    </div>
  );
}
