import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
};

export const Button = ({ onPress, title, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      disabled={disabled}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F7D885',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
