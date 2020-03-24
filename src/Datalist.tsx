import * as React from 'react';
import { View, TextInput, StyleSheet, Picker } from 'react-native';
import { findMatches } from './utils';

const localStyles = StyleSheet.create({
  container: {},
  input: {},
  picker: {},
});

interface DatalistStyles {
  container?: {};
  input?: {};
  picker?: {};
}

interface IDatalist {
  items: any[];
  selectedValue: string | number;
  onValueChange: () => void;
  key?: string;
  style?: DatalistStyles;
  placeholder?: string;
  placeholderTextColor?: string;
}

export function Datalist({
  items,
  selectedValue,
  onValueChange,
  key = 'name',
  style,
  placeholder,
  placeholderTextColor,
}: IDatalist): React.ReactElement {
  const [state, setState] = React.useState('');

  if (!items) {
    throw new Error(`Datalist requires an array of values`);
  }

  if (!key) {
    console.warn(`If no key is provided it will default to name.`);
  }

  const handleChangeText = (text: string) => setState(text);

  const filteredValues = findMatches(state, items, key);

  return (
    <View style={[localStyles.container, { ...style?.container }]}>
      <TextInput
        style={[localStyles.input, { ...style?.input }]}
        onChangeText={handleChangeText}
        value={state}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <Picker
        style={[localStyles.picker, { ...style?.picker }]}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {filteredValues.map((item, index: number) => (
          <Picker.Item key={index} label={item.name} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}
