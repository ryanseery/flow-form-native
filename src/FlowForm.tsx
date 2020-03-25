import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormContext, FormWrapper } from './FormWrapper';
import { Button, ButtonStyles } from './Button';

interface FormStyles {
  container?: {};
}

interface IForm {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (data: object) => void;
  style?: FormStyles;
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

  // TODO add more error catching
  if (!children) {
    throw new Error(`FlowForm expects to have children.`);
  }

  return (
    <View style={[localStyles.form, { ...style?.container }]}>
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
  );
};

export const FlowForm: React.FC<IForm> = ({
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
