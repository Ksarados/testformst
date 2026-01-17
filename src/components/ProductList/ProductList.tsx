import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { Product } from '@/types/data';

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.row}>
            <Text>$ {product.price}</Text>
            {product.fullPrice && <Text>{product.fullPrice}</Text>}
          </View>
          <View style={styles.row}>
            <Text>Купить рекламу на {product.name}</Text>
            {product.fullPrice ? <Text> по скидке!</Text> : <Text>.</Text>}
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
