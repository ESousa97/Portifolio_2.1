// src/components/Button.js
import React from 'react';

const Button = React.forwardRef(({ href, label, variant = 'default', ...rest }, ref) => (
  <a
    ref={ref}
    href={href}
    className={`cta-button ${variant}`}
    role="button"
    {...rest}
  >
    {label}
  </a>
));

export default Button;
