import * as React from 'react';

export const type = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1);

export interface IState {
  data: {};
  error: {};
}

const initialState: IState = {
  data: {},
  error: {},
};

export interface IArgs {
  id?: string;
  value?: string | boolean | number | object;
  error?: boolean;
}

interface IContextProps extends IState {
  setValue: (args: IArgs) => Promise<void>;
  updateValue: (args: IArgs) => Promise<void>;
  updateBlur: (args: IArgs) => Promise<void>;
  clearForm: () => void;
}

export const FormContext = React.createContext({} as IContextProps);

enum ACTIONS {
  SET_DEFAULT_VALUE = 'SET_DEFAULT_VALUE',
  UPDATE_VALUE = 'UPDATE_VALUE',
  UPDATE_BLUR = 'UPDATE_BLUR',
  CLEAR_FORM = 'CLEAR_FORM',
}

interface IAction extends IArgs {
  type: ACTIONS.SET_DEFAULT_VALUE | ACTIONS.UPDATE_VALUE | ACTIONS.UPDATE_BLUR | ACTIONS.CLEAR_FORM;
}

function reducer(state: IState, action: IAction) {
  const { type, id, value, error } = action;
  switch (type) {
    case ACTIONS.SET_DEFAULT_VALUE: {
      const stateCopy: IState = {
        ...state,
      };

      if (typeof id === 'string' && !stateCopy.data[id]) {
        stateCopy.data[id] = '';
        stateCopy.error[id] = false;
      }

      return stateCopy;
    }
    case ACTIONS.UPDATE_VALUE: {
      if (typeof id === 'string') {
        return {
          ...state,
          data: {
            ...state.data,
            [id]: value,
          },
        };
      }
    }
    case ACTIONS.UPDATE_BLUR: {
      if (typeof id === 'string') {
        return {
          ...state,
          error: {
            ...state.error,
            [id]: error,
          },
        };
      }
    }
    case ACTIONS.CLEAR_FORM:
      return { ...initialState };
    default:
      return state;
  }
}

export interface FormWrapper {
  children: React.ReactNode;
  initialValues?: {};
}

export const FormWrapper: React.FC<FormWrapper> = ({ children, initialValues }) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState, data: { ...initialValues } });

  const actions = React.useMemo(() => {
    return {
      setValue: async ({ id, value, error }: IArgs) => dispatch({ type: ACTIONS.SET_DEFAULT_VALUE, id, value, error }),
      updateValue: async ({ id, value, error }: IArgs) => dispatch({ type: ACTIONS.UPDATE_VALUE, id, value, error }),
      updateBlur: async ({ id, error }: IArgs) => dispatch({ type: ACTIONS.UPDATE_BLUR, id, error }),
      clearForm: () => dispatch({ type: ACTIONS.CLEAR_FORM }),
    };
  }, []);

  return (
    <FormContext.Provider
      value={{
        ...state,
        ...actions,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
