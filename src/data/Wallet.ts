import { Transaction } from './Transaction';

export type Wallet = {
    name: string;
    balance: number;
    transactions: Transaction[];
    timeCreated: Date;
}
