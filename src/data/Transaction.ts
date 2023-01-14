import { Item } from './Item';

export class Transaction {
    name: string;
    total: number;
    category: string;
    items: Item[];
    timeCreated: Date;

    constructor(name: string, amount: number, category: string, items: Item[]) {
        this.name = name;
        this.total = amount;
        this.category = category;
        this.items = items;
        this.timeCreated = new Date();
    }
}
