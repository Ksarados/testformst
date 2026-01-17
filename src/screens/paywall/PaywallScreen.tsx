import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/button/Button';
import { ProductList } from '@/components/ProductList/ProductList';
import { PRODUCTS } from '@/constants/data';
import type { Product } from '@/types/data';

export const PaywallScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Выберите наш продукт</Text>
        <View style={styles.products}>
          <ProductList
            products={PRODUCTS}
            selected={selectedProduct}
            onPress={setSelectedProduct}
          />
        </View>
      </View>
      <Button title='Купить' onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  products: {
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 32,
    textAlign: 'center',
  },
});
