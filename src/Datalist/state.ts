import { Animated } from 'react-native';

export interface State {
  search: string;
  expanded: boolean;
  animation: Animated.AnimatedValue;
  maxHeight: number;
  minHeight: number;
}

enum ACTIONS {
  SET_SEARCH = 'SET_SEARCH',
  SET_MIN_HEIGHT = 'SET_MIN_HEIGHT',
  SET_MAX_HEIGHT = 'SET_MAX_HEIGHT',
  TOGGLE = 'TOGGLE',
}

interface SetSearch {
  type: ACTIONS.SET_SEARCH;
  search: string;
}
export const setSearch = (search: string): SetSearch => ({
  type: ACTIONS.SET_SEARCH,
  search,
});

interface SetMinHeight {
  type: ACTIONS.SET_MIN_HEIGHT;
  minHeight: number;
}
export const setMinHeight = (minHeight: number): SetMinHeight => ({
  type: ACTIONS.SET_MIN_HEIGHT,
  minHeight,
});

interface SetMaxHeight {
  type: ACTIONS.SET_MAX_HEIGHT;
  maxHeight: number;
}
export const setMaxHeight = (maxHeight: number): SetMaxHeight => ({
  type: ACTIONS.SET_MAX_HEIGHT,
  maxHeight,
});

interface Toggle {
  type: ACTIONS.TOGGLE;
}
export const toggle = (): Toggle => ({
  type: ACTIONS.TOGGLE,
});

type Action = SetSearch | SetMinHeight | Toggle | SetMaxHeight;

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.SET_SEARCH:
      return { ...state, search: action.search };
    case ACTIONS.SET_MIN_HEIGHT:
      return { ...state, minHeight: action.minHeight };
    case ACTIONS.SET_MAX_HEIGHT:
      return { ...state, maxHeight: action.maxHeight };
    case ACTIONS.TOGGLE: {
      let initialValue = state.expanded ? state.maxHeight + state.minHeight : state.minHeight;
      let finalValue = state.expanded ? state.minHeight : state.maxHeight + state.minHeight;

      state.animation.setValue(initialValue);

      Animated.spring(state.animation, {
        toValue: finalValue,
      }).start();

      return { ...state, expanded: !state.expanded };
    }
    default:
      throw new Error(`Datalist Received Unrecognized Action.`);
  }
}
