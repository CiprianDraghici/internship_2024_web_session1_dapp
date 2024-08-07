import { Transaction } from "@multiversx/sdk-core/out";
import { useEffect, useState } from "react";
import {
  useGetAccount,
  useGetPendingTransactions,
} from "@multiversx/sdk-dapp/hooks";
import { sendTransactions } from "@multiversx/sdk-dapp/services";

let ct = 0;

export const TransactionSection = () => {
  const [tx, setTx] = useState<Transaction>();
  const { pendingTransactionsArray } = useGetPendingTransactions();

  const { address } = useGetAccount();

  const createTransaction = () => {
    const txToSign = new Transaction({
      sender: address,
      receiver: address,
      value: "0",
      gasLimit: 100000n,
      chainID: "D",
      version: 0,
      data: Buffer.from(`Transaction ${ct++}`),
    });
    setTx(txToSign);
  };

  const sendTransaction = async () => {
    if (!address || !tx) {
      console.error("Address or transaction not found");
      return;
    }

    await sendTransactions({
      transactions: [tx],
      transactionsDisplayInfo: {
        processingMessage: "Processing transaction",
        errorMessage: "An error has occured",
        successMessage: "Transaction successful",
      },
      signWithoutSending: false,
    });
  };

  useEffect(() => {
    console.log("tx", tx);
  }, [tx]);

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-xl bg-white">
      <h2 className="flex font-medium group text-sm">
        Create and send transaction
      </h2>
      <button
        onClick={createTransaction}
        className="w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-2 rounded"
      >
        Create transaction
      </button>
      <pre className="text-sm text-left">
        <code>{JSON.stringify(tx?.toPlainObject(), null, 2)}</code>
      </pre>
      <button
        onClick={sendTransaction}
        className="w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-2 rounded"
        disabled={pendingTransactionsArray.length > 0}
      >
        {pendingTransactionsArray.length > 0 ? (
          <span>Sending...</span>
        ) : (
          <span>Send transaction</span>
        )}
      </button>
    </div>
  );
};
