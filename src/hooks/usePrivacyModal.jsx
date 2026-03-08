import { createContext, useContext, useState } from "react";

const PrivacyModalContext = createContext(null);

export function PrivacyModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <PrivacyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </PrivacyModalContext.Provider>
  );
}

export function usePrivacyModal() {
  const ctx = useContext(PrivacyModalContext);
  if (!ctx) throw new Error("Ошибка");
  return ctx;
}