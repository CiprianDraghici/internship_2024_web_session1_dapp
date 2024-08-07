import {useGetAccount} from "@multiversx/sdk-dapp/hooks";

export const AddressSection = () => {
    const {
        address
    } = useGetAccount();

    return (
        <div className="bg-neutral-200 p-4 rounded-lg w-full max-w">
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <div className="flex justify-between">
                <span className="text-small">{address}</span>
            </div>
        </div>
    );
}