import { Item } from './items/Item';
import { Shop } from './Shop';
import InventoryRepository from './InventoryRepository';
import InMemoryInventoryRepository from '../test/InMemoryInventoryRepository';

export class ConsoleUI {
    repository: InventoryRepository = new InMemoryInventoryRepository;
    shop: Shop = new Shop(this.repository);


    constructor(shop: Shop) {
        this.shop = shop;
    }

    public displayInventory(): void {
        console.log("Inventory:");
        const items = this.shop.repository.getInventory();
        console.log(items);
    }

    public displayBalance(): void {
        console.log(`Balance: ${this.shop.balance}`);
    }

    public updateInventory(): void {
        this.shop.updateInventory();
    }

    public sellItem(type: String, quality: number): void {
        this.shop.sellItem(type, quality);
    }



}