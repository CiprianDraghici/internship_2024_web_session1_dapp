import { Transaction } from "@multiversx/sdk-core/out"
import {useEffect, useState} from "react";
import {useGetAccount} from "@multiversx/sdk-dapp/hooks";
import {sendTransactions} from "@multiversx/sdk-dapp/services";

let ct = 0;

export const TransactionSection = () => {
    const [tx, setTx] = useState<Transaction>();

    const {address} = useGetAccount();

    const createTransaction = () => {
        const txToSign = new Transaction({
            sender: address,
            receiver: address,
            value: '0',
            gasLimit: 100000n,
            chainID: 'D',
            version: 0,
            data: Buffer.from(`Transaction ${ct++}`)
        });
        setTx(txToSign);
    }

    const sendTransaction = async () => {
        if(!address || !tx) {
            console.error("Address or transaction not found");
            return;
        }

        await sendTransactions({
            transactions: [tx],
            transactionsDisplayInfo: {
                processingMessage: 'Processing transaction',
                errorMessage: 'An error has occured',
                successMessage: 'Transaction successful'
            },
            signWithoutSending: false
        })
    }

    useEffect(() => {
        console.log("tx", tx)
    }, [tx]);

    return (
        <div className="w-full">
            <h1>Create transaction section</h1>
            <button onClick={createTransaction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create transaction
            </button>
            <button onClick={sendTransaction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Send transaction
            </button>
        </div>
    )
}