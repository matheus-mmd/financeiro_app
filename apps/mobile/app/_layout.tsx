import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { TenantProvider } from './store/tenant-store';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <TenantProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }} />
      </QueryClientProvider>
    </TenantProvider>
  );
}
