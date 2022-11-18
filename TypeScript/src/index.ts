import { ConsoleUI } from "./consoleUI";
import { Shop } from "./Shop";
import InventoryRepository from "./InventoryRepository";
import InMemoryInventoryRepository from "../test/InMemoryInventoryRepository";

const repository: InventoryRepository = new InMemoryInventoryRepository;
const shop: Shop = new Shop(repository);


const ui = new ConsoleUI(shop);

ui.displayInventory();
ui.displayBalance();
ui.updateInventory();
ui.sellItem("Aged Brie", 21);
ui.displayInventory();
ui.displayBalance();

