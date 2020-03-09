import { useContext } from 'react';
import { FormContext } from '../FormWrapper';

interface IShowFormDataReturn {
  data: {};
  error: {};
}

export function showFormData(): IShowFormDataReturn {
  const { data, error } = useContext(FormContext);

  return {
    data,
    error,
  };
}
