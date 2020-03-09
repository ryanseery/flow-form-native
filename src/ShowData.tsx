import * as React from 'react';
import { View, Text } from 'react-native';
import { showFormData } from './hooks/showFormData';

interface IShowData {}

export const ShowData: React.FC<IShowData> = () => {
  const { data, error } = showFormData();

  return (
    <View>
      <Text>{JSON.stringify({ data, error }, null, 2)}</Text>
    </View>
  );
};
