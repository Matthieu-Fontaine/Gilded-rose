import InventoryRepository from './InventoryRepository';
import { Item } from './items/Item';
import { ConsoleUI } from './consoleUI';


export class Shop {

    repository: InventoryRepository;

    constructor(repository: InventoryRepository) {
        this.repository = repository;
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

    public sellItem(type: String, quality: number): void {

    }





}
