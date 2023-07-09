import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="max-w-sm mx-auto shadow-lg px-2">{children}</div>;
}
