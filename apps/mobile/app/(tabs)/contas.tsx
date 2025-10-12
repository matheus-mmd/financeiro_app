import { View, Text, ScrollView, RefreshControl, Button } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { Account } from '@financeiro/shared';

const fetchAccounts = async (): Promise<Account[]> => [
  {
    id: '1',
    tenantId: 'demo',
    name: 'Conta Corrente',
    type: 'checking',
    balance: 12500
  }
];

export default function ContasScreen() {
  const { data, refetch, isFetching } = useQuery({ queryKey: ['mobile-accounts'], queryFn: fetchAccounts });

  return (
    <ScrollView
      contentContainerStyle={{ padding: 24, gap: 16 }}
      refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
    >
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Contas</Text>
        <Text style={{ color: '#64748b' }}>Gerencie seus saldos em múltiplas instituições</Text>
      </View>
      {data?.map((account) => (
        <View key={account.id} style={{ backgroundColor: 'white', borderRadius: 16, padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{account.name}</Text>
          <Text style={{ color: '#64748b' }}>Saldo atual</Text>
          <Text style={{ marginTop: 8, fontSize: 16 }}>R$ {account.balance.toLocaleString('pt-BR')}</Text>
        </View>
      ))}
      <Button title="Adicionar conta" onPress={() => {}} />
    </ScrollView>
  );
}
