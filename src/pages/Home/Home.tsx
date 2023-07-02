import { InputForm } from "@/components/shared/InputFrom";
import { TypeSwitchButton } from "@/components/shared/TypeSwitchButton";
import { useState } from "react";

export function Home() {
  const types = ["Expense", "Income"];
  const [type, setType] = useState<string>(types[0]);

  const handleOnchange = (type: string) => {
    setType(type);
  };

  return (
    <div>
      <div className="px-2 py-6">
        <TypeSwitchButton type={type} types={types} onChange={handleOnchange} />
      </div>
      <InputForm type={type} />
    </div>
  );
}
