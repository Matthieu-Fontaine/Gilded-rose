import ItemsGateway from './ItemsGateway';
import { Item } from './items/Item';
import SellItemRequest from './SellItemRequest';
import ShopInputBoundary from './ShopInputBoundary';
import { RelicItem } from './items/relicItem';

export class ShopInteractor implements ShopInputBoundary {

    repository: ItemsGateway;
    balance: number;

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
            if (item instanceof RelicItem) this.balance += 100
            item.update();
        });
    }

    public sellItem(sellItemRequest: SellItemRequest): void {
        const item = this.repository.findItem(sellItemRequest.name, sellItemRequest.quality);
        if (!item || item instanceof RelicItem) return
        this.balance += item.getValue();
        const items = this.removeItem(item);
        this.repository.saveInventory(items);
    }

    private removeItem(item: Item): Item[] {
        const items = this.repository.getInventory();
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
        return items;
    }

    public auctionItem(sellItemRequest: SellItemRequest): void {
        const item = this.repository.findItem(sellItemRequest.name, sellItemRequest.quality);
        if (!item || item instanceof RelicItem) return
        let itemValue = this.Bidding(item);
        this.balance += itemValue;
        const items = this.removeItem(item);
        this.repository.saveInventory(items);
    }

    displayBalance(): void {
        console.log(`Balance: ${this.balance}`);
    }
    private Bidding(item: Item) {
        const maxBidTimes = 3;
        let itemValue = item.getValue();
        for (let bidTimes = 0; bidTimes < maxBidTimes; bidTimes++) {
            itemValue *= 1.1;
        }
        return itemValue;
    }
}

