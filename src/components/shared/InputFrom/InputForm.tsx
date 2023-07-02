import { CalendarModel } from "@/components/shared/CalendarModel/CalendarModel";
import { InputDate } from "@/components/shared/DateInput";
import { convertDatetoString } from "@/utils/calendar";
import { useEffect, useState } from "react";

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
