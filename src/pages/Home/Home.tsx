import { Expenditure } from "@/components/pages/Expenditure";
import { Revenue } from "@/components/pages/Revenue/Revenue";
import { RevenueAndExpenditureButton } from "@/components/shared/RevenueAndExpenditureButton";
import { useContext } from "@/hooks";

export function Home() {
  const { inputType, inputTypes } = useContext();
  return (
    <div>
      <div className="px-2 py-6">
        <RevenueAndExpenditureButton />
      </div>
      {inputType == inputTypes[0] ? <Revenue /> : <Expenditure />}
    </div>
  );
}
