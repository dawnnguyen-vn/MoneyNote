import { CalendarModel } from "@/components/shared/CalendarModel/CalendarModel";
import { InputDate } from "@/components/shared/DateInput";
import { convertDatetoString } from "@/utils/calendar";
import { useEffect, useState } from "react";
import { Categories } from "../Categories";

type InputFormProps = {
  type: string;
};

type FormData = {
  inputDate: string;
  type: string;
  memo: string;
  amount: string;
  categoryId: string;
};

export function InputForm({ type }: InputFormProps) {
  const initFormData: FormData = {
    inputDate: convertDatetoString(new Date()),
    type: type,
    memo: "",
    amount: "0",
    categoryId: "0",
  };
  const [formData, setFormData] = useState<FormData>(initFormData);

  useEffect(() => {
    resetFormData();
  }, [type]);

  const handleSetFormData = (property: string, value: string) => {
    setFormData((prevData: FormData) => {
      const formData: FormData = {
        ...prevData,
        type: type,
        [property]: value,
      };

      return formData;
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const resetFormData = () => {
    setFormData(initFormData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputDate
          name="inputDate"
          value={formData.inputDate}
          onChange={handleSetFormData}
        />
        <div className="flex items-center justify-between pb-4">
          <span className="w-20">Ghi chú</span>
          <input
            type="text"
            className="w-full border-b-[1px] border-gray-400 outline-0 max-w-[256px]"
          />
        </div>

        <div className="flex items-center justify-between pb-4">
          <span className="w-20">Tiền chi</span>
          <div className="flex items-center w-full max-w-[256px]">
            <input
              type="text"
              className="input input-bordered input-primary w-full input-sm"
            />
            <span className="text-lg ml-1">₫</span>
          </div>
        </div>

        <Categories name="categoryId" onChange={handleSetFormData} />

        <button type="submit">submit</button>
      </form>
      <CalendarModel
        name="inputDate"
        value={formData.inputDate}
        onChange={handleSetFormData}
      />
    </div>
  );
}
