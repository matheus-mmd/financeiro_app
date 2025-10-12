import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-500',
  secondary: 'bg-slate-100 text-brand-600 hover:bg-slate-200',
  ghost: 'bg-transparent hover:bg-slate-100'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
        styles[variant],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';
