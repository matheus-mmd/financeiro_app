import { createContext, ReactNode, useContext } from 'react';
import { create } from 'zustand';

const useTenantState = create<{ tenantId: string; setTenant: (id: string) => void }>((set) => ({
  tenantId: 'demo-tenant',
  setTenant: (tenantId) => set({ tenantId })
}));

const TenantContext = createContext(useTenantState);

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  return <TenantContext.Provider value={useTenantState}>{children}</TenantContext.Provider>;
};

export const useTenant = () => useContext(TenantContext)();
