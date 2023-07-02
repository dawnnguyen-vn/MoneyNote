import { ChangeEvent } from "react";

type TypeSwitchButtonProps = {
  type: string;
  types: string[];
  onChange: (type: string) => void;
};

export function TypeSwitchButton({
  type,
  types,
  onChange,
}: TypeSwitchButtonProps) {
  const handleChangeInputType = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const isChecked = (value: string) => {
    if (value == type) {
      return true;
    }
    return false;
  };

  return (
    <div className="join flex justify-center">
      <input
        className="join-item btn btn-sm h-10 w-1/2"
        type="radio"
        value={types[0]}
        name="options"
        aria-label="Tiền chi"
        checked={isChecked(types[0])}
        onChange={handleChangeInputType}
      />
      <input
        className="join-item btn btn-sm h-10 w-1/2"
        type="radio"
        value={types[1]}
        name="options"
        aria-label="Tiền thu"
        checked={isChecked(types[1])}
        onChange={handleChangeInputType}
      />
    </div>
  );
}
