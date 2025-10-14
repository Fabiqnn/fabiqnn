'use client';

import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

type ThemeContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const DarkThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  return (
    <DarkThemeContext.Provider value={[dark, setDark]}>
      {children}
    </DarkThemeContext.Provider>
  );
}