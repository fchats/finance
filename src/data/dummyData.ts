import { Item } from './Item';
import { Transaction } from './Transaction';
import { Wallet } from './Wallet';

/*
 * Item {
 *   Name
 *   Total
 *   Category
 *   Quantity
 * }
 */
let items: Item[] = [
    new Item('FC Milk', 690, 'Milk', 2),
    new Item('Barilla Pasta', 450, 'Pasta', 1),
    new Item('Milo Flakes Cereal', 750, 'Cereal', 1),
];

/*
 * Transaction {
 * Name
 * Total
 * Category
 * Date
 * }
 */
let transactions: Transaction[] = [
    new Transaction('Grocery Shop', 690 + 450 + 750, 'Grocery', items),
];

/*
 * Wallet {
 * Name
 * Balance
 * Transactions
 * TimeCreated
 * }
 */
export let wallet1 = new Wallet("Wallet 1", 20000, transactions);
