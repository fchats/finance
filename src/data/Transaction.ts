import { Item } from './Item';

export type Transaction = {
    name: string;
    total: number;
    category: string;
    items: Item[];
    timeCreated: Date;
}
