import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';

const fetchDashboard = async () => ({
  revenue: 25400,
  expenses: 17200,
  cash: 8200
});

export default function DashboardScreen() {
  const { data } = useQuery({ queryKey: ['mobile-dashboard'], queryFn: fetchDashboard });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24, gap: 24 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Dashboard</Text>
        <Text style={{ color: '#64748b' }}>Resumo financeiro do tenant demo</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
        {data &&
          Object.entries(data).map(([key, value]) => (
            <View
              key={key}
              style={{
                flexBasis: '45%',
                backgroundColor: 'white',
                borderRadius: 16,
                padding: 16,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 2
              }}
            >
              <Text style={{ color: '#475569', textTransform: 'uppercase', fontSize: 12 }}>{key}</Text>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>R$ {value.toLocaleString('pt-BR')}</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}
