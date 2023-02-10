import Wallets from './Wallets';
import './InformationCards.css';

export default function InformationCards() {
    return (
        <ul className="informationCards">
            <li>
                <Wallets />
            </li>
            <li>{/* <Transactions /> */}</li>
            <li>{/* <LastCard /> */}</li>
        </ul>
    );
}
