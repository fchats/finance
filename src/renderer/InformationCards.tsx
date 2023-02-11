import Wallets from './Wallets';
import Transactions from './Transactions';
import './InformationCards.css';

import { wallets } from '../data/dummyData';
import { useState } from 'react';
import WalletCard from './WalletCard';

const TRANSACTION_UNCLICKED = -1;

export default function InformationCards() {
    // clickedWallet should always be set
    const [clickState, setClickedState] = useState({
        clickedWallet: 0,
        clickedTransaction: TRANSACTION_UNCLICKED,
    });

    // const [clickedTransaction, setClickedTransaction] = useState(-1);

    let cards: React.ReactNode[] = [];

    let classes: string;

    // Use a for loop here to enumerate list (rather than use map)
    // Transform
    for (let i = 0; i < wallets.length; i++) {
        classes =
            clickState.clickedWallet == i
                ? 'wCard selected'
                : 'wCard unselected';

        cards.push(
            <li
                className={classes}
                onClick={() =>
                    setClickedState({
                        clickedWallet: i,
                        clickedTransaction: clickState.clickedTransaction,
                    })
                }
            >
                <WalletCard wallet={wallets[i]} />
            </li>
        );
    }
    if (cards.length < 0) {
        return <div></div>;
    }
    return (
        <ul className="informationCards">
            <li>
                <Wallets wallets={cards} />
            </li>
            <li>
                <Transactions wallet={wallets[clickState.clickedWallet]} />
            </li>
            <li>{/* <LastCard /> */}</li>
        </ul>
    );
}
