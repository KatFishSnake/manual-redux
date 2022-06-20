import { useState } from "react";

export type ActionType = { type: string; payload?: any };

const useForceUpdate = () => {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};

export const createReducer = <T>(
  reducer: (state: T, action: ActionType) => T
) => {
  return (state: T, action: ActionType) => {
    return reducer(state, action);
  };
};

export const createStore = <T>(
  reducer: (state: T, action: ActionType) => T,
  globalState: T
) => {
  let innerGlobalStateCopy = { ...globalState };
  const listeners: Array<(s: T) => void> = [];

  const useDispatch = () => (action: ActionType) => {
    innerGlobalStateCopy = reducer(innerGlobalStateCopy, action);

    listeners.forEach((listener) => listener(innerGlobalStateCopy));
  };

  const useSubscribe = (callback: (state: T) => any) => {
    const forceUpdate = useForceUpdate();

    const callbackWrapper = (state: T) => {
      forceUpdate();
      return callback(state);
    };

    listeners.push(callbackWrapper);

    return callback(innerGlobalStateCopy);
  };

  return {
    useDispatch,
    useSubscribe,
  };
};
