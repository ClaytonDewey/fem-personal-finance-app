import React from 'react';
import { Icon } from '../svg';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destroy';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonClassName = ['btn', `btn-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClassName} type={type} {...props}>
      {children}
      {variant === 'tertiary' ? <Icon name='caret-right' /> : null}
    </button>
  );
};
export default Button;
