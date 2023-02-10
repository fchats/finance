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

const item1: Item = {
    name: 'FC Milk',
    total: 690,
    category: 'Milk',
    quantity: 2,
};

const item2: Item = {
    name: 'Barilla Pasta',
    total: 450,
    category: 'Pasta',
    quantity: 1,
};

const item3: Item = {
    name: 'Milo Flakes Cereal',
    total: 750,
    category: 'Cereal',
    quantity: 1,
};

let items: Item[] = [item1, item2, item3];

/*
 * Transaction {
 * Name
 * Total
 * Category
 * Date
 * }
 */
const transaction1: Transaction = {
    name: 'Grocery Shop',
    total: 690 + 450 + 750,
    category: 'Grocery',
    items,
    timeCreated: new Date(),
};
const transactions: Transaction[] = [transaction1];

/*
 * Wallet {
 * Name
 * Balance
 * Transactions
 * TimeCreated
 * }
 */
let wallet1: Wallet = {
    name: 'Wallet 1',
    balance: 20000,
    transactions: transactions,
    timeCreated: new Date(),
};

let wallet2: Wallet = {
    name: 'Wallet 2',
    balance: 10000,
    transactions: transactions,
    timeCreated: new Date(),
};

let wallet3: Wallet = {
    name: 'Wallet 3',
    balance: 10412,
    transactions: transactions,
    timeCreated: new Date(),
};

let wallet4: Wallet = {
    name: 'Wallet 4',
    balance: 0,
    transactions: transactions,
    timeCreated: new Date(),
};

let wallet5: Wallet = {
    name: 'Wallet 5',
    balance: 0,
    transactions: transactions,
    timeCreated: new Date(),
};

export let wallets = [wallet1, wallet2, wallet3, wallet4, wallet5];
