import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks";

export const NativeAuthSection = () => {
  const { tokenLogin } = useGetLoginInfo();

  console.log("nativeAuthToken", tokenLogin?.nativeAuthToken);

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-xl bg-white mt-2">
      <h2 className="flex font-medium group text-sm">Native Auth Token</h2>
      <div
        contentEditable="false"
        className="overflow-auto break-words p-2 border border-gray-300 rounded text-sm text-left"
        role="textbox"
        aria-multiline="true"
      >
        {tokenLogin?.nativeAuthToken}
      </div>
    </div>
  );
};
