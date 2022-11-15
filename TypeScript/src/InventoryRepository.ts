import { Item } from './items/Item';

export default interface InventoryRepository {
	getInventory(): Item[];
	saveInventory(items: Item[]): void;

	findItem(name: String, quality: number) : Item | null;
}