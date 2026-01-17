import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@/screens/HomeScreen';
import { OnboardingScreen } from '@/screens/onboarding/OnboardingScreen';
import { PaywallScreen } from '@/screens/paywall/PaywallScreen';

const Stack = createStackNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
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
