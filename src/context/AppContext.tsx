import { ReactNode, createContext, useState } from "react";

const inputTypes = ["REVENUE", "EXPENDITURE"];

type Context = {
  inputType: string;
  setInputType: (inputType: string) => void;
  inputTypes: string[];
};

export const Context = createContext<Context>({} as Context);

export default function AppContext({ children }: { children: ReactNode }) {
  const [inputType, setInputType] = useState<string>(inputTypes[0]);
  const context: Context = {
    inputType,
    setInputType,
    inputTypes,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
