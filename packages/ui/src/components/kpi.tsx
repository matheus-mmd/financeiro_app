import { Card } from './card';

type KPIProps = {
  label: string;
  value: string;
  trend?: string;
};

export const KPI = ({ label, value, trend }: KPIProps) => (
  <Card className="text-center" title={label}>
    <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
    {trend && <p className="mt-2 text-sm text-emerald-500">{trend}</p>}
  </Card>
);
