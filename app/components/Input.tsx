'use client';

import React, { useState } from 'react';

import { Icon } from '../svg';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type = 'text', ...props }: InputProps) => {
  const isPasswordInput = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  if (!isPasswordInput) {
    return <input type={type} {...props} />;
  }

  return (
    <div style={{ position: 'relative' }}>
      <input type={showPassword ? 'text' : 'password'} {...props} />
      <button
        type='button'
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {showPassword ? <Icon name='eye-hide' /> : <Icon name='eye' />}
      </button>
    </div>
  );
};

export default Input;
