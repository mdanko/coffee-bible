import { createContext, useContext, useState } from 'react';
import { COFFEE } from '../data';

const initialState = {
  data: COFFEE,
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
        coffeeData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
