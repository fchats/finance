export class Item {
    name: string;
    total: number;
    category: string;
    quantity: number;

    constructor(name: string, total: number, category: string, quantity: number) {
        this.name = name;
        this.total = total;
        this.category = category;
        this.quantity = quantity;
    }
}
