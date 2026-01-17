import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '@/components/ui/button/Button';
import { ProductList } from '@/components/ProductList/ProductList';
import { PRODUCTS } from '@/constants/data';
import type { Product } from '@/types/data';
import { useProductStore } from '@/store/useProduct';
import { useNavigation } from '@react-navigation/native';

import type { MainNavigatorParamList } from '@/types/navigation';

type OnboardingScreenNavigationProp = StackNavigationProp<
  MainNavigatorParamList,
  'Onboarding'
>;

export const PaywallScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { setProduct } = useProductStore();
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleNext = () => {
    if (selectedProduct) {
      setProduct(selectedProduct);
      navigation.navigate('Home');
    }
  };

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
      <Button title='Купить' onPress={handleNext} disabled={!selectedProduct} />
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
