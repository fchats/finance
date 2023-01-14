import { Transaction } from './Transaction';

export class Wallet {
    name: string;
    balance: number;
    transactions: Transaction[];
    timeCreated: Date;

    constructor(name: string, amount: number, transactions: Transaction[]) {
        this.name = name;
        this.balance = amount;
        this.transactions = transactions;
        this.timeCreated = new Date();
    }
}
