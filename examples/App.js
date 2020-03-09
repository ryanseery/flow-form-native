import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Form, Input} from 'flow-form-native';

const inputStyle = {
  label: {
    color: 'black',
    borderColor: 'grey',
  },
};

const submitButtonStyle = {
  button: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
};

const App = () => {
  const isEmail = text => {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Form
        onSubmit={data => console.log(data)}
        submitTitle="Login"
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
      </Form>
    </View>
  );
};

export default App;
