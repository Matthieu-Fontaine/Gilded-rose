import ItemsGateway from './ItemsGateway';
import { Item } from './items/Item';
import SellItemRequest from './SellItemRequest';
import ShopInputBoundary from './ShopInputBoundary';


export class ShopInteractor implements ShopInputBoundary {

    repository: ItemsGateway;
    balance : number;

    constructor(repository: ItemsGateway, balance: number = 0) {
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

    public sellItem(sellItemRequest: SellItemRequest): void {
        const item = this.repository.findItem(sellItemRequest.name, sellItemRequest.quality);
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
