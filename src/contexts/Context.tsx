import React, {
  ProviderExoticComponent,
  ProviderProps,
  useContext as useContextFn,
} from "react";

export function createContext<T>(): [
  () => T,
  ProviderExoticComponent<ProviderProps<T | undefined>>,
  React.Context<T | undefined>
] {
  // The default value in `createContext` is only used if the consumer is used outside of a provider
  // because we're checking that the value exists in `useCtx`, we can assume that a provider
  // exists and we don't need to pass anything here.
  const context = React.createContext<T | undefined>(undefined);

  const useContext = (): T => {
    const context_ = useContextFn(context);

    if (!context_) {
      throw new Error("Context used without provider");
    }

    return context_;
  };

  return [useContext, context.Provider, context] as [
    () => T,
    typeof context.Provider,
    typeof context
  ];
}
