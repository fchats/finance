import { Wallet } from '../data/Wallet';
import './WalletCard.css';

interface WalletProps {
    wallet: Wallet;
}

export default function WalletCard(props: WalletProps) {
    let wallet = props.wallet;
    console.log('wallet.name = ' + wallet.name);
    return (
        <ul className="walletCard">
            <li>{wallet.name}</li>
            <li>{wallet.balance}</li>
            <li></li>
        </ul>
    );
}
