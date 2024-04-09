"use client";

import React, { createContext, useContext, useState } from "react";

type ContextReturnType = {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<ContextReturnType>({} as ContextReturnType);

type ContextProps = {
  children: React.ReactNode;
};

export default function ContextProvider({ children }: ContextProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Context.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </Context.Provider>
  );
}

export function useCtx(){
    return useContext(Context)
}