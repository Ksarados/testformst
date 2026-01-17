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
        <TouchableOpacity key={index} style={styles.row}>
          <View>{product.icon}</View>
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.price}>$ {product.price}</Text>
              {product.fullPrice && (
                <Text style={styles.textThrough}>{product.fullPrice}</Text>
              )}
            </View>
            <View style={styles.row}>
              <Text>Купить рекламу на {product.name}</Text>
              {product.fullPrice ? <Text> по скидке!</Text> : <Text>.</Text>}
            </View>
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
  info: {
    justifyContent: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'medium',
  },
  textThrough: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
});
