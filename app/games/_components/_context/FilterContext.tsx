import { createContext, useState } from "react";
interface FilterContextProps {
  handleFilter: (name: string) => void;
}
export const FilterContext = createContext<FilterContextProps>({
  handleFilter: () => {},
});
