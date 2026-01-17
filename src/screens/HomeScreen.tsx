import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useProductStore } from '@/store/useProduct';
import { SERVICES } from '@/constants/data';
import { ServicesList } from '@/components/ServicesList/ServicesList';
import { Button } from '@/components/ui/button/Button';
import { useNavigation } from '@react-navigation/native';
import type { MainNavigatorParamList } from '@/types/navigation';

type OnboardingScreenNavigationProp = StackNavigationProp<
  MainNavigatorParamList,
  'Paywall'
>;

export const HomeScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const { product, resProduct } = useProductStore();

  const handleAppear = () => {
    resProduct();
    navigation.navigate('Paywall');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Главный экран</Text>
        <View style={styles.product}>
          <Text style={styles.secondTitle}>Вы преобрели продукт</Text>
          <Text style={styles.text}>Реклама на{product?.name}.</Text>
          <Text style={styles.text}>За $ {product?.price}</Text>
        </View>
        <Button title='Отказаться от продукта' onPress={handleAppear} />
        <View>
          <Text style={styles.secondTitle}>Вам доступны сервисы</Text>
          <View style={styles.imageContent}>
            <Image
              style={styles.image}
              source={require('../../assets/images/call.png')}
            />
          </View>
          <ServicesList services={SERVICES} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 32,
    textAlign: 'center',
  },
  secondTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContent: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    marginTop: 10,
    marginBottom: 10,
  },
});
