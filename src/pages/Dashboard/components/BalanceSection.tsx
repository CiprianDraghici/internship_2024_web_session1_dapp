import { useGetAccount } from "@multiversx/sdk-dapp/hooks";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

export const BalanceSection = () => {
  const { balance } = useGetAccount();

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-xl m-2 bg-white justify-center">
      <h2 className="flex font-medium group text-sm">Balance</h2>
      <FormatAmount
        value={balance}
        showLabel={true}
        egldLabel={"xEGLD"}
        className="text-sm flex justify-start"
      />
    </div>
  );
};
