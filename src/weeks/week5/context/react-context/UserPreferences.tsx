import { createContext, useState } from "react";
import { Currency } from "../../types/types";

/** Context **/
interface UserPreferencesContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const initialUserPreferences: UserPreferencesContextType = {
  currency: 'USD',
  setCurrency: () => {},
};

export const UserPreferencesContext = createContext<UserPreferencesContextType>(initialUserPreferences);

/** Provider **/
interface UserPreferencesProviderProps {
  children: React.ReactNode;
}

export const UserPreferencesProvider = ({
  children,
}: UserPreferencesProviderProps) => {
  const [currency, setCurrency] = useState<Currency>(initialUserPreferences.currency);

  const value = {
    currency,
    setCurrency,
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
}
