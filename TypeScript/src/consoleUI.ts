import { Item } from './items/Item';
import { ShopInteractor } from './ShopInteractor';
import ItemsGateway from './ItemsGateway';
import InMemoryInventoryRepository from '../test/InMemoryInventoryRepository';
import SellItemRequest from './SellItemRequest';
import ShopInputBoundary from './ShopInputBoundary';


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

    public displayBalance(): void {
        console.log(`Balance: ${this.shop.displayBalance()}`);
    }

    public updateInventory(): void {
        this.shop.updateInventory();
    }

    public sellItem(name: string, quality: number): void {
        this.shop.sellItem(new SellItemRequest(name, quality));
    }



}