/* eslint-disable react-refresh/only-export-components -- Provider and hook are co-located by design */
import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext(null);

export function MobileMenuProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenuOpen() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenuOpen must be used within MobileMenuProvider");
  return [ctx.mobileMenuOpen, ctx.setMobileMenuOpen];
}
