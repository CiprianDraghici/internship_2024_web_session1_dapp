import {useGetAccount} from "@multiversx/sdk-dapp/hooks";
// import {formatAmount} from "@multiversx/sdk-dapp/utils";
import {FormatAmount} from "@multiversx/sdk-dapp/UI";

export const BalanceSection = () => {
    const {
        balance
    } = useGetAccount();

    return (
        <div className="bg-neutral-200 p-4 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Balance</h3>
            <div className="flex justify-between">
                {/*<span>{*/}
                {/*    formatAmount({*/}
                {/*        input: balance,*/}
                {/*        decimals: 18,*/}
                {/*        digits: 4,*/}
                {/*        showLastNonZeroDecimal: false,*/}
                {/*        addCommas: true*/}
                {/*    })*/}
                {/*} xEGLD</span>*/}
                <FormatAmount
                    value={balance}
                    showLabel={true}
                    egldLabel={"xEGLD"}
                />
            </div>
        </div>
    );
}