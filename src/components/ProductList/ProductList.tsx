import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { Product } from '@/types/data';

type ProductListProps = {
  products: Product[];
  selected: Product | null;
  onPress: (product: Product) => void;
};

export const ProductList = ({
  products,
  selected,
  onPress,
}: ProductListProps) => {
  return (
    <>
      {products.map((product, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.row,
            styles.button,
            selected === product && styles.active,
            index !== products.length - 1 && styles.buttonGap,
          ]}
          onPress={() => onPress(product)}
        >
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
  button: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 20,
  },
  active: {
    backgroundColor: '#F7D885',
  },
  buttonGap: {
    marginBottom: 10,
  },
});
