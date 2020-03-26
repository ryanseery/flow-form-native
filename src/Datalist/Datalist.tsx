import * as React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Picker,
  Text,
  Keyboard,
  Animated,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
} from 'react-native';
import { reducer, setSearch, setMinHeight, setMaxHeight, toggle } from './state';
import { findMatches } from '../utils';

// const testData = [
//   { label: 'Java', value: 'java' },
//   { label: 'JavaScript', value: 'javascript' },
//   { label: 'Swift', value: 'swift' },
//   { label: 'C++', value: 'c++' },
//   { label: 'Python', value: 'python' },
//   { label: 'PHP', value: 'php' },
// ];

interface LocalStyles {
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  picker: ViewStyle;
}

const localStyles = StyleSheet.create<LocalStyles>({
  container: {
    overflow: 'hidden',
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

export interface LayoutRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LayoutChangeEvent {
  layout: LayoutRectangle;
}

interface DatalistStyles {
  container?: ViewStyle;
  label?: TextStyle;
  input?: TextStyle;
  picker?: ViewStyle;
}

type Data = { label: string; value: string };

export type DataListReturnValue = Data;

interface IDatalist {
  children: string;
  data: Data[];
  selectedValue: null | Data;
  onValueChange: (value: DataListReturnValue) => void;
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
    animation: new Animated.Value(65),
    maxHeight: 0,
    minHeight: 0,
  });

  if (!data) {
    throw new Error(`Datalist requires an array of values`);
  }

  const _keyboardDidHide = () => dispatch(toggle());

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const handleMinHeight = (e: NativeSyntheticEvent<LayoutChangeEvent>) => {
    dispatch(setMinHeight(e.nativeEvent.layout.height));
  };

  const handleMaxHeight = (e: NativeSyntheticEvent<LayoutChangeEvent>) => {
    dispatch(setMaxHeight(e.nativeEvent.layout.height));
  };

  const filteredValues = findMatches(state.search, data, 'label');

  return (
    <Animated.View style={[localStyles.container, { ...style?.container }, { height: state.animation }]}>
      <View onLayout={handleMinHeight}>
        <Text style={[localStyles.label, { ...style?.label }]}>{children ?? ''}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[localStyles.input, { ...style?.input }]}
          value={state.search}
          onChange={e => dispatch(setSearch(e.nativeEvent.text))}
          onFocus={() => dispatch(toggle())}
        />
      </View>
      <View onLayout={handleMaxHeight}>
        {filteredValues.length !== 0 && (
          <Picker
            style={[localStyles.picker, { ...style?.picker }]}
            selectedValue={selectedValue}
            onValueChange={value => {
              dispatch(setSearch(value.label));
              onValueChange(value);
            }}
          >
            {filteredValues.map((item, index: number) => (
              <Picker.Item key={index} label={item.label} value={item} />
            ))}
          </Picker>
        )}
      </View>
    </Animated.View>
  );
}
