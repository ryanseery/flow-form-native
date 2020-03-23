import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { FormContext, FormWrapper } from './FormWrapper';
import { Button, ButtonStyles } from './Button';

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => void;
  style?: {};
  submitButtonStyle?: ButtonStyles;
  reset?: boolean;
  loading?: boolean;
  error?: null | {};
  submitTitle?: string;
  initialValues?: {};
}

const localStyles = StyleSheet.create({
  form: {},
});

const FormComponent: React.FC<IForm> = ({
  children,
  onSubmit,
  style,
  reset,
  loading,
  submitTitle,
  submitButtonStyle,
}) => {
  const { data, clearForm } = React.useContext(FormContext);
  return (
    <SafeAreaView style={style}>
      <View style={localStyles.form}>
        {children}
        <View>
          <Button
            style={submitButtonStyle}
            title={submitTitle ? submitTitle : `Submit`}
            disabled={loading}
            onPress={() => onSubmit(data)}
          />
          {reset && <Button title="Clear" disabled={loading} onPress={clearForm} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export const Form: React.FC<IForm> = ({
  children,
  onSubmit,
  style,
  reset,
  submitTitle,
  submitButtonStyle,
  initialValues,
}) => (
  <FormWrapper initialValues={initialValues}>
    <FormComponent
      onSubmit={onSubmit}
      style={style}
      reset={reset}
      submitTitle={submitTitle}
      submitButtonStyle={submitButtonStyle}
    >
      {children}
    </FormComponent>
  </FormWrapper>
);
