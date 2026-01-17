import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/button/Button';
import CheckIcon from '@assets/icons/CheckIcon';
import type { MainNavigatorParamList } from '@/types/navigation';

type OnboardingScreenNavigationProp = StackNavigationProp<
  MainNavigatorParamList,
  'Onboarding'
>;

export const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleNext = () => {
    navigation.navigate('Paywall');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.onboarding}>
        <Text style={styles.title}>О вас должны узнать!</Text>
        <CheckIcon />
        <Text style={styles.text}>Покажите свой продук людям!</Text>
      </View>
      <Button onPress={handleNext} title='Next' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 16,
  },
  onboarding: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 32,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 48,
    textAlign: 'center',
  },
});
