import { MiniCalendar } from "@/components/shared/MiniCalendar";
import "./index.css";
import { convertStringToDate } from "@/utils/calendar";
type InputDateProps = {
  name: string;
  value: string;
  onChange: (property: string, value: string) => void;
};

export function InputDate({ name, value, onChange }: InputDateProps) {
  const handleOnchange = (value: string) => {
    onChange(name, value);
  };
  return (
    <div className="flex justify-between items-center pb-5">
      <span>Ngày</span>
      <MiniCalendar
        date={convertStringToDate(value)}
        onChange={handleOnchange}
      />
    </div>
  );
}
