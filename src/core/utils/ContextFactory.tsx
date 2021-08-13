import * as React from 'react'

import { runIfFn } from './Function'
import { createContext } from './ReactContext'

const errorMessage = (name: string, provider: 'Dispatch' | 'State') => `useContext: ${name}${provider} is undefined. Seems you forgot to wrap component within the Provider`

export const contextFactory = <S, A>(reducer: React.Reducer<S, A>, stateValueOrFunction: S | (() => S), name?: string) => {
  const initialState = () => ({ ...runIfFn(stateValueOrFunction) })

  const [StateProvider, useState] = createContext<S>({ name, errorMessage: errorMessage(name, 'State') })

  const [DispatchProvider, useDispatch] = createContext<React.Dispatch<A>>({ name, errorMessage: errorMessage(name, 'Dispatch') })

  const WrappedProvider: React.FC = function ({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState())

    return (
      <StateProvider value={state}>
        <DispatchProvider value={dispatch}>{children}</DispatchProvider>
      </StateProvider>
    )
  }

  const useFactoryState = useState

  const useFactoryDispatch = useDispatch

  return { WrappedProvider, useFactoryState, useFactoryDispatch }
}
