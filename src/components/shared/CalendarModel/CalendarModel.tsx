import {
  convertDatetoString,
  convertStringToDate,
  formatShortWeekday,
} from "@/utils/calendar";
import Calendar from "react-calendar";
import {
  NavigationLabelArgs,
  Value,
} from "react-calendar/dist/cjs/shared/types";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { ChevronRight } from "../Icons/ChevronRight";
import { useState } from "react";

type CalendarModelProps = {
  name: string;
  value: string;
  onChange: (property: string, value: string) => void;
};

export function CalendarModel({ name, value, onChange }: CalendarModelProps) {
  const [date, setDate] = useState<Date>(new Date(convertStringToDate(value)));
  const handleSelectDate = () => {
    onChange(name, convertDatetoString(date));
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box w-fit">
        <Calendar
          className="max-w-[360px]"
          prev2Label={null}
          next2Label={null}
          prevLabel={<ChevronLeft />}
          nextLabel={<ChevronRight />}
          navigationLabel={({ date }: NavigationLabelArgs) => {
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return <span>{`tháng ${month} năm ${year}`}</span>;
          }}
          formatShortWeekday={formatShortWeekday}
          onChange={(value: Value) => {
            setDate(value as Date);
          }}
          value={date}
        />
        <div className="float-right flex gap-8 mt-3">
          <button className="text-primary">Bỏ chọn</button>
          <button onClick={handleSelectDate} className="text-primary">
            OK
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
}
