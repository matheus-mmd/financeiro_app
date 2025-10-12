import { Tabs } from 'expo-router';

const tabs = [
  { name: 'index', title: 'Dashboard' },
  { name: 'contas', title: 'Contas' },
  { name: 'lancamentos', title: 'Lançamentos' },
  { name: 'assinatura', title: 'Assinatura' }
];

export default function TabsLayout() {
  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} options={{ title: tab.title }} />
      ))}
    </Tabs>
  );
}
