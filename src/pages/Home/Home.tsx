import { Expense } from "@/components/pages/Expense";
import { InCome } from "@/components/pages/Income/Income";
import { ExpenseAndIncomeButtom } from "@/components/shared/ExpenseAndIncomeButton";
import { useContext } from "@/hooks";

export function Home() {
  const { inputType, inputTypes } = useContext();
  return (
    <div>
      <div className="px-2 py-6">
        <ExpenseAndIncomeButtom />
      </div>
      {inputType == inputTypes[0] ? <Expense /> : <InCome />}
    </div>
  );
}
