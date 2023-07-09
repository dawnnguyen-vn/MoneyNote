import { Building } from "../Icons/Building";

type CategoriesProps = {
  name: string;
  onChange: (property: string, value: string) => void;
};

export function Categories({ name, onChange }: CategoriesProps) {
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="radio1">
          <Building />
          <span>Label1</span>
        </label>
        <input
          id="radio1"
          type="radio"
          name={name}
          value="1"
          onChange={handleOnchange}
        />
      </div>
      <div>
        <label htmlFor="radio2">Label2</label>
        <input
          id="radio2"
          type="radio"
          name={name}
          value="2"
          onChange={handleOnchange}
        />
      </div>
    </div>
  );
}
