import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components/ui/button/Button';

export const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Paywall');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>OnboardingScreen</Text>
      </View>
      <Button onPress={handleNext} title='Next' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
});
