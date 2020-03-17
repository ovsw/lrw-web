import React, {useState} from 'react'

export const appContext = React.createContext()

const AppContextProvider = props => {
  const [isAlertShowing, setAlertShowing] = useState(true)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <appContext.Provider value={{
      isAlertShowing,
      showAlert: () => setAlertShowing(true),
      hideAlert: () => setAlertShowing(false),
      isMobileNavOpen,
      openMobileNav: () => setIsMobileNavOpen(true),
      closeMobileNav: () => setIsMobileNavOpen(false)
    }}>
      {props.children}
    </appContext.Provider>
  )
}

export default ({element}) => (
  <AppContextProvider>
    {element}
  </AppContextProvider>
)
