import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from '@/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <MainNavigation />
    </NavigationContainer>
  );
}
