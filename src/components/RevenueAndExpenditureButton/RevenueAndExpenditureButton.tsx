import { useContext } from "@/hooks";
import { ChangeEvent } from "react";

export function RevenueAndExpenditureButton() {
  const { setInputType } = useContext();

  const handleChangeInputType = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("hello");

    setInputType(e.target.value);
  };

  return (
    <div className="join flex justify-center">
      <input
        className="join-item btn w-1/2"
        type="radio"
        value="REVENUE"
        name="options"
        aria-label="Tiền chi"
        onChange={handleChangeInputType}
      />
      <input
        className="join-item btn w-1/2"
        type="radio"
        value="EXPENDITURE"
        name="options"
        aria-label="Tiền thu"
        onChange={handleChangeInputType}
      />
    </div>
  );
}
