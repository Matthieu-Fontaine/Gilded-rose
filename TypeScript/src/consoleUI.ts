import { Item } from './items/Item';
import { Shop } from './Shop';

export class ConsoleUI {

    shop: Shop;

    constructor(shop: Shop) {
        this.shop = shop;
    }

    public displayInventory(): void {
        const items = this.shop.getInventory();
        items.forEach((item: Item) => {
            console.log(item.toString());
        });
    }

    public updateInventory(): void {
        this.shop.updateInventory();
    }

    public sellItem(type: String, quality: number): void {
        this.shop.sellItem(type, quality);
    }



}