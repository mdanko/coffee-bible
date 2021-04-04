import { createContext, useContext, useState } from 'react';

const initialState = {
  data: [],
};

export const CoffeeContext = createContext(initialState);

export const useCoffee = () => useContext(CoffeeContext);

export const CoffeeContextProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState(initialState.data);

  const addCoffee = coffee =>
    setCoffeeData(
      coffeeData.concat({
        id: coffeeData.length,
        ...coffee,
      })
    );

  return (
    <CoffeeContext.Provider
      value={{
        addCoffee,
        setCoffeeData,
        coffeeData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
