import { wallet1 } from '../data/dummyData'

export default function Wallets() {

    console.log(wallet1.name);
    console.log(wallet1.balance);
    console.log(wallet1.transactions);
    console.log(wallet1.timeCreated);
    return (<div></div>);
}


