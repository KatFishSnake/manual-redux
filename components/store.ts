import { createStore, createReducer } from "../vendor/createStore";

export type GlobalStateType = { counter: number };
type ActionType = { type: string; payload?: any };

const localReducer = function (state: GlobalStateType, action: ActionType) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

const appReducer = createReducer<GlobalStateType>(localReducer);

const store = createStore<GlobalStateType>(appReducer, { counter: 0 });

export const useDispatch = store.useDispatch;
export const useSubscribe = store.useSubscribe;
