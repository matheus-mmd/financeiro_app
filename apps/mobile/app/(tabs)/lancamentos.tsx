import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { Transaction } from '@financeiro/shared';

const fetchTransactions = async (): Promise<Transaction[]> => [
  {
    id: '1',
    tenantId: 'demo',
    accountId: '1',
    categoryId: '1',
    amount: -1200,
    description: 'Pagamento aluguel',
    occurredAt: new Date(),
    status: 'cleared'
  }
];

export default function LancamentosScreen() {
  const { data, isLoading } = useQuery({ queryKey: ['mobile-transactions'], queryFn: fetchTransactions });

  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Lançamentos</Text>
        <Text style={{ color: '#64748b' }}>Consulte e registre movimentações</Text>
      </View>
      {isLoading ? (
        <Text>Carregando...</Text>
      ) : (
        data?.map((transaction) => (
          <View key={transaction.id} style={{ backgroundColor: 'white', borderRadius: 16, padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{transaction.description}</Text>
            <Text style={{ color: '#ef4444', marginTop: 8 }}>
              R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
            </Text>
            <Text style={{ color: '#64748b' }}>{transaction.status}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}
