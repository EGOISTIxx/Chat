import { createContext } from 'react'

type ContextType = {
  [key: string]: any
}

export const Context = createContext<ContextType>({
  store: '',
  firebase: '',
})
