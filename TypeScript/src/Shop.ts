import InventoryRepository from './InventoryRepository';
import { Item } from './items/Item';
import { ConsoleUI } from './consoleUI';


export class Shop {

    repository: InventoryRepository;
    balance : number;

    constructor(repository: InventoryRepository, balance: number = 0) {
        this.repository = repository;
        this.balance = balance;
    }

    public updateInventory(): void {
        const items = this.repository.getInventory();
        this.updateItems(items);
        this.repository.saveInventory(items);
    }

    private updateItems(items: Item[]) {
        items.forEach((item: Item) => {
            item.update();
        });
    }

    public sellItem(name: String, quality: number): void {
        const item = this.repository.findItem(name, quality);
        if (item) {
            this.balance += item.getValue();
            const items = this.removeItem(item);
            this.repository.saveInventory(items);

        }
    }

    private removeItem(item: Item): Item[] {
        const items = this.repository.getInventory();
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
        return items;
    }
}
