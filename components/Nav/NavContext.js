import React, { useContext, useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const NavContext = React.createContext()
const NavUpdateContext = React.createContext();

export function useNavState() {
    return useContext(NavContext)
}

export function useNavStateUpdate() {
    return useContext(NavUpdateContext)
}


export function NavProvider({ children }) {

    const [navState, setNavState] = useState(false)

    const scrollHandler = () => {
        setNavState(!navState)
        !navState ? disableBodyScroll(document.body) : enableBodyScroll(document.body)
        }

      return (

        <NavContext.Provider value={navState}>
            <NavUpdateContext.Provider value={scrollHandler}>
            {children}
            </NavUpdateContext.Provider>
      </NavContext.Provider>
      )
}