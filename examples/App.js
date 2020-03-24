import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlowForm, Input} from 'flow-form-native';

const inputStyle = StyleSheet.create({
  label: {
    color: 'black',
    borderColor: 'grey',
  },
});

const submitButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const App = () => {
  const isEmail = text => {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  };

  return (
    <View style={styles.container}>
      <FlowForm
        onSubmit={data => console.log(data)}
        submitTitle="Login"
        initialValues={{emailAddress: 'Test', password: ''}}
        submitButtonStyle={submitButtonStyle}>
        <Input
          style={inputStyle}
          placeholder="Enter your email"
          required
          validate={isEmail}>
          Email Address
        </Input>
        <Input style={inputStyle} placeholder="Enter your password">
          Password
        </Input>
      </FlowForm>
    </View>
  );
};

export default App;
