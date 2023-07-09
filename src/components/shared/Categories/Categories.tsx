import { ReactNode } from "react";
import { Category } from "../Category";
import { Eat } from "../Icons/Eat";
import { Shirt } from "../Icons/Shirt";
import { DailySpending } from "../Icons/DailySpending";
import { Cosmetics } from "../Icons/Cosmetics";
import { Glasses } from "../Icons/Glasses";
import { Medical } from "../Icons/Medical";
import { Book } from "../Icons/Book";
import { Electric } from "../Icons/Electric";
import { Bus } from "../Icons/Bus";
import { Mobile } from "../Icons/Mobile";
import { Building } from "../Icons/Building";

type Category = {
  id: string;
  label: string;
  icon: ReactNode;
};

type CategoriesProps = {
  name: string;
  value: string;
  onChange: (property: string, value: string) => void;
};

const categories: Category[] = [
  {
    id: "0",
    label: "Ăn uống",
    icon: <Eat />,
  },
  {
    id: "1",
    label: "Chi tiêu hằng ngày",
    icon: <DailySpending />,
  },
  {
    id: "2",
    label: "Mỹ phẩm",
    icon: <Cosmetics />,
  },
  {
    id: "3",
    label: "Phí giao lưu",
    icon: <Glasses />,
  },
  {
    id: "4",
    label: "Y tế",
    icon: <Medical />,
  },
  {
    id: "5",
    label: "Giáo dục",
    icon: <Book />,
  },
  {
    id: "6",
    label: "Tiền điện",
    icon: <Electric />,
  },
  {
    id: "7",
    label: "Đi lại",
    icon: <Bus />,
  },
  {
    id: "8",
    label: "Phí liên lạc",
    icon: <Mobile />,
  },
  {
    id: "9",
    label: "Tiền nhà",
    icon: <Building />,
  },
  {
    id: "10",
    label: "Quần áo",
    icon: <Shirt />,
  },
];

export function Categories({ name, value, onChange }: CategoriesProps) {
  return (
    <div>
      <span>Danh mục</span>
      <div className="grid grid-cols-4 place-items-center mt-4">
        {categories.map((category) => (
          <Category
            key={category.id}
            label={category.label}
            id={category.id}
            icon={category.icon}
            name={name}
            selected={value == category.id ? true : false}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
