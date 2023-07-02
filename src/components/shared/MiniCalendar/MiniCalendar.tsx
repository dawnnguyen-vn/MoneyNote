import { ChevronLeft } from "../Icons/ChevronLeft";
import { ChevronRight } from "../Icons/ChevronRight";
import { convertDatetoString, formatDate } from "@/utils/calendar";

type MiniCalendarProps = {
  date: Date;
  onChange: (value: string) => void;
};

export function MiniCalendar({ date, onChange }: MiniCalendarProps) {
  const handleOnchange = (number: number) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + number);
    onChange(convertDatetoString(newDate));
  };

  return (
    <div className="flex items-center">
      <button type="button" onClick={() => handleOnchange(-1)}>
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() =>
          (document.getElementById("my_modal_1") as HTMLFormElement).showModal()
        }
        className="w-44 h-10 bg-base-200 rounded-lg flex items-center justify-center mx-3"
      >
        {formatDate(date)}
      </button>
      <button type="button" onClick={() => handleOnchange(1)}>
        <ChevronRight />
      </button>
    </div>
  );
}
