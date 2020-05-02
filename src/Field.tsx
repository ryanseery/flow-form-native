import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useFormData } from './hooks/useFormData';
import { toCamelCase } from './utils';
import { ViewStyleProps } from './@types/view';
import { TextProps } from './@types/text';

interface FieldStyles {
  container?: ViewStyleProps;
  label?: TextProps;
  field?: {};
  error?: TextProps;
}

type FieldProps = {
  children: string;
  style?: FieldStyles;
  validate?: (text: string) => boolean;
  required?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  defaultValue?: string;
  multiline?: boolean;
  maxLength?: number;
  numberOfLines?: number;
};

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    minHeight: 30,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 6,
  },
  field: {
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

export function Field({
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
}: FieldProps): React.ReactElement {
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
        style={[localStyles.field, { ...style?.field }]}
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
