import { createContext, useContext, useState } from 'react';

const initialState = {
  selectedTab: 'all',
};

export const TabsContext = createContext(initialState);

export const useTabs = () => useContext(TabsContext);

export const TabsContextProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(initialState.selectedTab);

  return (
    <TabsContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
