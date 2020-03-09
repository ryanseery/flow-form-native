import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useFormData } from './hooks/useFormData';
import { toCamelCase } from './utils';
import { ViewStyleProps } from './@types/view';
import { TextProps } from './@types/text';

interface InputStyles {
  container?: ViewStyleProps;
  label?: TextProps;
  input?: {};
  error?: TextProps;
}

interface IInput {
  children: string;
  style?: InputStyles;
  validate?: (text: string) => boolean;
  required?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  defaultValue?: string;
  multiline?: boolean;
  maxLength?: number;
  numberOfLines?: number;
}

const localStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    minHeight: 30,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
  },
});

export function Input({
  children,
  validate,
  required,
  style,
  placeholder,
  placeholderTextColor,
  defaultValue,
  multiline,
  maxLength,
  numberOfLines,
}: IInput): React.ReactElement {
  const id = toCamelCase(children);

  const { value, error, handleChange, handleBlur, handleFocus } = useFormData({
    id,
    value: '',
    validate,
    required,
  });

  return (
    <View style={[localStyles.container, { ...style?.container }]}>
      <Text style={[localStyles.label, { ...style?.label }]}>{children}</Text>
      <TextInput
        style={[localStyles.input, { ...style?.input }]}
        onChangeText={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        defaultValue={defaultValue}
        multiline={multiline}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        secureTextEntry={id === 'password'}
      />
      {error && <Text style={[localStyles.error, { ...style?.error }]}>{`Please provide a valid ${children} `}</Text>}
    </View>
  );
}
