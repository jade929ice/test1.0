import { cn } from '../../shared/utils/cn';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
  primary: 'bg-primary text-on-primary hover:bg-primary/90 active:scale-95',
  secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90 active:scale-95',
  outline: 'border border-outline-variant bg-surface-container-highest hover:border-primary text-on-surface',
  ghost: 'hover:bg-surface-container-highest text-on-surface-variant',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';