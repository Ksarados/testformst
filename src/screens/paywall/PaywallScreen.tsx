import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PaywallScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PaywallScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
