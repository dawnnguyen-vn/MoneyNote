import { ReactNode, createContext, useState } from "react";

export const Context = createContext<Context>({} as Context);

type Context = {
  inputType: string;
  setInputType: (inputType: string) => void;
};

export default function AppContext({ children }: { children: ReactNode }) {
  const [inputType, setInputType] = useState<string>("REVENUE");
  const context: Context = {
    inputType,
    setInputType,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
