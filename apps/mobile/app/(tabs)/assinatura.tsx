import { View, Text, ScrollView, Button } from 'react-native';

export default function AssinaturaScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 24 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Assinatura</Text>
        <Text style={{ color: '#64748b' }}>Gerencie seu plano e métodos de pagamento</Text>
      </View>
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Pro Anual</Text>
        <Text style={{ marginTop: 8, color: '#64748b' }}>Próxima cobrança em 10/03</Text>
        <Button title="Abrir portal Stripe" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
