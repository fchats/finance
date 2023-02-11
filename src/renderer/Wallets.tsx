import React from 'react';
import './Wallets.css';

export interface WalletCardProps {
    wallets: React.ReactNode[];
}

export default function WalletCards(props: WalletCardProps) {
    /*
    let cards = wallets.map((elem) => (
        <li className="wCard">
            <WalletCard wallet={elem} />
        </li>
    ));
    */

    let wallets = props.wallets;

    return (
        <div className="wallets">
            <h1 className="cardTitle">Wallets</h1>
            <ul className="walletCards">{wallets}</ul>
        </div>
    );
}
