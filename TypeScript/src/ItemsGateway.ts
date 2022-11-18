import { Item } from './items/Item';

export default interface ItemsGateway {
	getInventory(): Item[];
	findItem(name: String, quality: number): Item | null;

	saveInventory(items: Item[]): void;

}