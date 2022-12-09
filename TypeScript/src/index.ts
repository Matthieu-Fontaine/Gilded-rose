import { ConsoleUI } from "./displays/consoleUI";
import { ShopInteractor } from "./shops/ShopInteractor";
import ItemsGateway from "./item-handlers/ItemsGateway";
import InMemoryInventoryRepository from "./inventories/InMemoryInventoryRepository";

const repository: ItemsGateway = new InMemoryInventoryRepository;
const shop: ShopInteractor = new ShopInteractor(repository);

const ui = new ConsoleUI(shop);

ui.displayInventory();
ui.displayBalance(shop.balance);
ui.updateInventory();
ui.sellItem("Aged Brie", 21);
ui.auctionItem("Lettuce", 19);
ui.displayInventory();
ui.displayBalance(shop.balance);

