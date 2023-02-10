import { wallets } from '../data/dummyData';

import WalletCard from './WalletCard';
import './Wallets.css';

export default function Wallets() {
    console.log(wallets[0].name);
    console.log(wallets[0].balance);
    console.log(wallets[0].transactions);
    console.log(wallets[0].timeCreated);
    let cards = wallets.map((elem) => (
        <li className="wCard">
            <WalletCard wallet={elem} />
        </li>
    ));
    let selected: number = 0;

    return (
        <div className="wallets">
            <h1 className="cardTitle">Wallets</h1>
            <ul className={selected ? 'walletCards selected' : 'walletCards'}>
                {cards}
            </ul>
        </div>
    );
}
