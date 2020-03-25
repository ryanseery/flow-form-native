import * as React from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface IAvoidKeyboard {
  children: React.ReactNode | React.ReactNode[];
  style?: {};
}

export function AvoidKeyboard({ children, style }: IAvoidKeyboard): React.ReactElement {
  if (!children) {
    throw new Error(`AvoidKeyboard expects to have children components.`);
  }

  return (
    <SafeAreaView style={localStyles.container}>
      <KeyboardAvoidingView
        style={localStyles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[localStyles.container, { ...style }]}>{children}</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
