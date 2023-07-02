import { useContext } from "@/hooks";
import { ChangeEvent } from "react";

export function ExpenseAndIncomeButtom() {
  const { inputType, setInputType, inputTypes } = useContext();

  const handleChangeInputType = (e: ChangeEvent<HTMLInputElement>) => {
    setInputType(e.target.value);
  };

  const isChecked = (value: string) => {
    if (value == inputType) {
      return true;
    }
    return false;
  };

  return (
    <div className="join flex justify-center">
      <input
        className="join-item btn btn-sm h-10 w-1/2"
        type="radio"
        value={inputTypes[0]}
        name="options"
        aria-label="Tiền chi"
        checked={isChecked(inputTypes[0])}
        onChange={handleChangeInputType}
      />
      <input
        className="join-item btn btn-sm h-10 w-1/2"
        type="radio"
        value={inputTypes[1]}
        name="options"
        aria-label="Tiền thu"
        checked={isChecked(inputTypes[1])}
        onChange={handleChangeInputType}
      />
    </div>
  );
}
