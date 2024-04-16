import { createContext, ReactNode, useState } from "react"

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (user: any) => {},
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
