import { Expend } from "@/components/pages/Expend";
import { InCome } from "@/components/pages/Income/Income";
import { ExpendAndIncomeButtom } from "@/components/shared/ExpendAndIncomeButton";
import { useContext } from "@/hooks";

export function Home() {
  const { inputType, inputTypes } = useContext();
  return (
    <div>
      <div className="px-2 py-6">
        <ExpendAndIncomeButtom />
      </div>
      {inputType == inputTypes[0] ? <Expend /> : <InCome />}
    </div>
  );
}
