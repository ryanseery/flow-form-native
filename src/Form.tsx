import * as React from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
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
  container: {},
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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <SafeAreaView style={[localStyles.container, { ...style }]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
