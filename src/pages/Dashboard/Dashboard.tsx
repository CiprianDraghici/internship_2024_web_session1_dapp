import { BalanceSection } from "./components/BalanceSection";
import { AddressSection } from "./components/AddressSection.tsx";
import { TransactionSection } from "./components/TransactionSection.tsx";
import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks";

export const Dashboard = () => {
  const { tokenLogin } = useGetLoginInfo();

  console.log("nativeAuthToken", tokenLogin?.nativeAuthToken);

  return (
    <div className="h-screen bg-neutral-100 text-3xl font-bold text-center flex flex-col items-center py-4">
      <h2>Dashboard</h2>
      <AddressSection />
      <BalanceSection />
      <TransactionSection />
      <div className="w-full">
        <h1>Native Auth Token</h1>
        <pre className="w-1/2">
          <code className="w-5">{tokenLogin?.nativeAuthToken}</code>
        </pre>
      </div>
    </div>
  );
};
