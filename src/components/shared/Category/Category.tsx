import { ReactNode } from "react";
import "./index.css";

export type CategoryProps = {
  id: string;
  label: string;
  name: string;
  icon: ReactNode;
  selected: boolean;
  onChange: (property: string, value: string) => void;
};

export function Category({
  id,
  icon,
  name,
  label,
  onChange,
  selected,
}: CategoryProps) {
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div
      className={
        "w-[80px] py-2 px-1 rounded-md border-2 mt-2" +
        (selected ? " category-selected" : "")
      }
    >
      <label
        className="flex flex-col w-full items-center"
        htmlFor={"category" + id}
      >
        {icon}
        <span className="text-[13px] truncate w-full text-center">{label}</span>
      </label>
      <input
        id={"category" + id}
        type="radio"
        name={name}
        value={id}
        hidden
        onChange={handleOnchange}
      />
    </div>
  );
}
