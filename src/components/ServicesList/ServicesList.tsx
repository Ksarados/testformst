import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import type { Service } from '@/types/data';

type ServiceListProps = {
  services: Service[];
};

export const ServicesList = ({ services }: ServiceListProps) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={services}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.services} onPress={() => {}}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
      ListEmptyComponent={() => (
        <View style={[styles.services, styles.notServices]}>
          <Text>Нет доступных сервисов</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  services: {
    backgroundColor: '#F7D885',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notServices: {
    backgroundColor: '#D9D9D9',
  },
  separator: {
    height: 10,
  },
});
