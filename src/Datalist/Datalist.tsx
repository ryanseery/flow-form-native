import * as React from 'react';
import { View, TextInput, StyleSheet, Picker, Text, Keyboard } from 'react-native';
import { reducer, setSearch, setExpanded } from './state';
import { findMatches } from '../utils';

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'grey',
  },
  label: {
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
  picker: {
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
});

interface DatalistStyles {
  container?: {};
  label?: {};
  input?: {};
  picker?: {};
}

type Data = { label: string; value: string };

interface IDatalist {
  children: string;
  data: Data[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  style?: DatalistStyles;
  placeholder?: string;
  placeholderTextColor?: string;
}

export function Datalist({
  children,
  data,
  selectedValue,
  onValueChange,
  style,
  placeholder,
  placeholderTextColor,
}: IDatalist): React.ReactElement {
  const [state, dispatch] = React.useReducer(reducer, {
    search: '',
    expanded: false,
    maxHeight: 0,
    minHeight: 0,
  });

  if (!data) {
    throw new Error(`Datalist requires an array of values`);
  }

  const _keyboardDidShow = () => {
    dispatch(setExpanded(true));
  };

  const _keyboardDidHide = () => {
    dispatch(setExpanded(false));
  };

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const filteredValues = findMatches(state.search, data, 'label');

  return (
    <View style={{ ...style?.container }}>
      <Text style={[localStyles.label, { ...style?.label }]}>{children ?? ''}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[localStyles.input, { ...style?.input }]}
        value={state.search}
        onChange={e => dispatch(setSearch(e.nativeEvent.text))}
      />
      {state.expanded && (
        <Picker
          style={[localStyles.picker, { ...style?.picker }]}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {filteredValues.map((item, index: number) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      )}
    </View>
  );
}
