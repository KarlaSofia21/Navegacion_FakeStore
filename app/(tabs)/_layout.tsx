import { Tabs } from "expo-router";

export default function tabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="productos" />
      <Tabs.Screen name="categorias" />
      <Tabs.Screen name="login" />
    </Tabs>
  );
}
