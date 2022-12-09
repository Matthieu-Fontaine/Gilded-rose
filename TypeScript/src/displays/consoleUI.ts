import { ShopInteractor } from '../shops/ShopInteractor';
import ItemsGateway from '../item-handlers/ItemsGateway';
import InMemoryInventoryRepository from '../inventories/InMemoryInventoryRepository';
import SellItemRequest from '../item-handlers/SellItemRequest';
import ShopInputBoundary from '../shops/ShopInputBoundary';

export class ConsoleUI {
    repository: ItemsGateway = new InMemoryInventoryRepository;
    shop: ShopInputBoundary = new ShopInteractor(this.repository);

    constructor(shop: ShopInteractor) {
        this.shop = shop;
    }

    public displayInventory(): void {
        console.log("Inventory:");
        const items = this.repository.getInventory();
        console.log(items);
    }

    public displayBalance(balance: number): void {
        console.log(`Balance: ${balance}`);
    }

    public updateInventory(): void {
        this.shop.updateInventory();
    }

    public sellItem(name: string, quality: number): void {
        this.shop.sellItem(new SellItemRequest(name, quality));
    }
    public auctionItem(name: string, quality: number): void {
        this.shop.auctionItem(new SellItemRequest(name, quality));
    }
}