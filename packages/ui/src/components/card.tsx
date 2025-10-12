import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren<{ className?: string; title?: string; description?: string }>;

export const Card = ({ className, title, description, children }: CardProps) => (
  <section className={clsx('rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900', className)}>
    {(title || description) && (
      <header className="mb-4 space-y-1">
        {title && <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>}
        {description && <p className="text-sm text-slate-500 dark:text-slate-300">{description}</p>}
      </header>
    )}
    {children}
  </section>
);
