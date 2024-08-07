import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

export const AddressSection = () => {
  const { address } = useGetAccount();

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-xl bg-white justify-center">
      <h2 className="flex font-medium group text-sm">Address</h2>
      <span className="text-sm flex justify-start">{address}</span>
    </div>
  );
};
