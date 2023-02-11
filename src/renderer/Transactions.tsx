import { Wallet } from '../data/Wallet';

import { TransactionCard } from 'TransactionCard';

interface TransactionProps {
    wallet: Wallet;
}

export default function Transactions(props: TransactionProps) {
    console.log(props.wallet.transactions);
    let transactions = props.wallet.transactions;
    let cards = transactions.map((x) => {
        <li>
            <TransactionCard />
        </li>;
    });
    return <div></div>;
}
