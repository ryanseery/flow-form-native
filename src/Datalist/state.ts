export interface State {
  search: string;
  expanded: boolean;
  maxHeight: number;
  minHeight: number;
}

enum ACTIONS {
  SET_SEARCH = 'SET_SEARCH',
  SET_EXPANDED = 'SET_EXPANDED',
}

interface SetSearch {
  type: ACTIONS.SET_SEARCH;
  search: string;
}
export const setSearch = (search: string): SetSearch => ({
  type: ACTIONS.SET_SEARCH,
  search,
});

interface SetExpanded {
  type: ACTIONS.SET_EXPANDED;
  expanded: boolean;
}
export const setExpanded = (expanded: boolean): SetExpanded => ({
  type: ACTIONS.SET_EXPANDED,
  expanded,
});

type Action = SetSearch | SetExpanded;

export function reducer(state: State, action: Action): State {
  console.log({ state, action });
  switch (action.type) {
    case ACTIONS.SET_SEARCH:
      return { ...state, search: action.search };
    case ACTIONS.SET_EXPANDED:
      return { ...state, expanded: action.expanded };
    default:
      throw new Error(`Datalist Received Unrecognized Action.`);
  }
}
