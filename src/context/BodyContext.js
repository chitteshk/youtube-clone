import { createContext, useState } from "react";


export const BodyContext = createContext();

export const BodyProvider = ({children}) => {
      const [isSideNavOpen, setIsSideNavOpen] = useState(
        localStorage.getItem("sideNavOpen") === "true"
      );
      const toggleSideNav = () => {
        setIsSideNavOpen((prev) => {
          const newValue = !prev;
          localStorage.setItem("sideNavOpen", newValue);
          return newValue;
        });
      };

      const setSideNav = (value) =>{
        if(localStorage.getItem('sideNavOpen') === 'false') return;
        setIsSideNavOpen(false);
        localStorage.setItem("sideNavOpen", value);
      }

      return (
        <BodyContext.Provider value={{isSideNavOpen, toggleSideNav, setSideNav}}>
            {children}
        </BodyContext.Provider>
      )
};