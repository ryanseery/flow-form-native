import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

enum SIZE_TYPES {
  SMALL = 'small',
  LARGE = 'large',
}

export interface ButtonStyles {
  container?: {};
  button?: {};
  title?: {};
  activityIndicator?: {};
  activityIndicatorColor?: string;
  activityIndicatorSize?: SIZE_TYPES;
}

interface IButton {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  style?: ButtonStyles;
}

const localStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  activityIndicator: {
    transform: [{ scale: 0.7 }],
    marginTop: 0,
    marginLeft: 5,
  },
});

// TODO create disabled style / refactor loading style
export function Button({ title, onPress, style, isLoading }: IButton): React.ReactElement {
  return (
    <TouchableOpacity style={[localStyles.container, { ...style?.container }]} disabled={isLoading} onPress={onPress}>
      <View style={[localStyles.button, { ...style?.button }]}>
        <Text style={[localStyles.title, { ...style?.title }]}>{title}</Text>
        {isLoading && (
          <View style={[localStyles.activityIndicator, { ...style?.activityIndicator }]}>
            <ActivityIndicator
              size={style?.activityIndicatorSize ?? SIZE_TYPES.SMALL}
              color={style?.activityIndicatorColor ?? '#0000ff'}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
