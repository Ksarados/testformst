import React, { useState } from 'react';
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

type Onboarding = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const ONBOARDING: Onboarding[] = [
  {
    title: 'О вас должны узнать!',
    text: 'Покажите свой продук людям!',
    icon: <CheckIcon />,
  },
  {
    title: 'Больше клиентов, больше продаж!',
    text: 'Привлекайте новых кливентов!',
    icon: <CheckIcon />,
  },
];

export const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < ONBOARDING.length - 1) {
      setStep(step + 1);
    } else {
      navigation.navigate('Paywall');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.onboarding}>
        <Text style={styles.title}>{ONBOARDING[step].title}</Text>
        <View>{ONBOARDING[step].icon}</View>
        <Text style={styles.text}>{ONBOARDING[step].title}</Text>
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
