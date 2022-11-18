import { ConsoleUI } from "./consoleUI";
import { ShopInteractor } from "./ShopInteractor";
import ItemsGateway from "./ItemsGateway";
import InMemoryInventoryRepository from "../test/InMemoryInventoryRepository";

const repository: ItemsGateway = new InMemoryInventoryRepository;
const shop: ShopInteractor = new ShopInteractor(repository);


const ui = new ConsoleUI(shop);

ui.displayInventory();
ui.displayBalance();
ui.updateInventory();
ui.sellItem("Aged Brie", 21);
ui.displayInventory();
ui.displayBalance();

