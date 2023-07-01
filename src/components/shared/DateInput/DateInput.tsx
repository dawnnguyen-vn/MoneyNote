import { useState } from "react";
import Calendar from "react-calendar";
import {
  NavigationLabelArgs,
  Value,
} from "react-calendar/dist/cjs/shared/types";
import { MiniCalendar } from "@/components/shared/MiniCalendar";
import "./index.css";
import { ChevronLeft } from "@/components/shared/Icons/ChevronLeft";
import { ChevronRight } from "@/components/shared/Icons/ChevronRight";
import { formatShortWeekday } from "@/utils/calendar";

export function InputDate() {
  const [date, setDate] = useState<Date>(new Date());
  const [tempDate, setTempDate] = useState<Date>(new Date());

  const handleOnChange = (value: Value) => {
    setDate(value as Date);
  };

  return (
    <div>
      <div className="flex justify-between items-center pb-5">
        <span>Ngày</span>
        <MiniCalendar date={date} onChange={handleOnChange} />
      </div>
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
              setTempDate(value as Date);
            }}
            value={tempDate}
          />
          <div className="float-right flex gap-8 mt-3">
            <button className="text-primary">Bỏ chọn</button>
            <button onClick={() => setDate(tempDate)} className="text-primary">
              OK
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}
