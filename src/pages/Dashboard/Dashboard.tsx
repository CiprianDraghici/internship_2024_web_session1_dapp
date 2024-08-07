import { BalanceSection } from "./components/BalanceSection";
import { AddressSection } from "./components/AddressSection.tsx";
import { TransactionSection } from "./components/TransactionSection.tsx";
import { NativeAuthSection } from "./components/NativeAuthSection.tsx";

export const Dashboard = () => {
  return (
    <div className="h-screen bg-neutral-100 text-3xl font-bold text-center flex flex-col items-center py-4">
      <h2 className="mb-4">Dashboard</h2>
      <AddressSection />
      <BalanceSection />
      <TransactionSection />
      <NativeAuthSection />
    </div>
  );
};
