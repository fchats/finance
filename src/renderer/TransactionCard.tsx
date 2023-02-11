import { Transaction } from '../data/Transaction';
interface CardProps {
    transaction: Transaction;
}
export default function TransactionCard(props: CardProps) {
    return (
        <ul>
            <li>{props.transaction.name}</li>
            <li>{props.transaction.total}</li>
            <li>{props.transaction.category}</li>
            <li>{props.transaction.timeCreated.toString()}</li>
            <li>{props.transaction.name}</li>
        </ul>
    );
}
