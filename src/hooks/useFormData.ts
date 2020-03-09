import * as React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { FormContext } from '../FormWrapper';

interface IUseFormData {
  id: string;
  value: string;
  required?: boolean;
  validate?: (text: string) => boolean;
}

export function useFormData({ id, value, required, validate }: IUseFormData) {
  const { data, error, setValue, updateValue, updateBlur } = React.useContext(FormContext);

  React.useEffect(() => {
    setValue({ id, value });
  }, []);

  const handleChange = (text: string) => {
    function validation(): boolean {
      if (required) {
        return validate ? validate(text) : false;
      }
      return false;
    }

    updateValue({
      id,
      value: text,
      error: validation(),
    });
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    function validation(): boolean {
      if (required) {
        return validate ? validate(e.nativeEvent.text) : false;
      }
      return false;
    }

    updateBlur({ id, error: validation() });
  };

  const handleFocus = () => {
    updateBlur({ id, error: false });
  };

  return {
    value: data[id],
    error: error[id],
    handleChange,
    handleBlur,
    handleFocus,
  };
}
