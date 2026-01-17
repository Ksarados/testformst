import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@/screens/HomeScreen';
import { OnboardingScreen } from '@/screens/onboarding/OnboardingScreen';
import { PaywallScreen } from '@/screens/paywall/PaywallScreen';
import { useProductStore } from '@/store/useProduct';

const Stack = createStackNavigator();

export function MainNavigation() {
  const { product } = useProductStore();

  return (
    <Stack.Navigator
      initialRouteName={product ? 'Home' : 'Onboarding'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      <Stack.Screen name='Paywall' component={PaywallScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
}
