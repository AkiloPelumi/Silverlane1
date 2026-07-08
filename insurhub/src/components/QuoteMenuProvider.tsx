"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import QuoteSlideMenu from "./QuoteSlideMenu";

interface QuoteMenuContextType {
  openQuoteMenu: () => void;
}

const QuoteMenuContext = createContext<QuoteMenuContextType | undefined>(undefined);

export function QuoteMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteMenu = () => setIsOpen(true);

  return (
    <QuoteMenuContext.Provider value={{ openQuoteMenu }}>
      {children}
      <QuoteSlideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteMenuContext.Provider>
  );
}

export function useQuoteMenu() {
  const context = useContext(QuoteMenuContext);
  if (!context) {
    throw new Error("useQuoteMenu must be used within a QuoteMenuProvider");
  }
  return context;
}