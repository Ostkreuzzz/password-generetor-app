import React, { useMemo, useState, ReactNode } from 'react';

interface GlobalContextType {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = React.createContext<GlobalContextType>({
  password: '',
  setPassword: () => {},
});
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [password, setPassword] = useState('');

  const contextValue = useMemo(() => {
    return {
      password,
      setPassword,
    };
  }, [password, setPassword]);

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};
