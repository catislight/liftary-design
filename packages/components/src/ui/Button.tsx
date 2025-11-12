import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
};

export function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className,
  style,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  };

  const variantStyles = {
    primary: {
      backgroundColor: disabled ? '#ccc' : '#007bff',
      color: 'white',
    },
    secondary: {
      backgroundColor: disabled ? '#e9ecef' : '#6c757d',
      color: 'white',
    },
  };

  return (
    <button
      className={className}
      style={{ ...baseStyle, ...variantStyles[variant], ...style }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
