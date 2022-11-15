import InventoryRepository from "../src/InventoryRepository";
import { AgingItem } from "../src/items/AgingItem";
import { ConjuredItem } from "../src/items/ConjuredItem";
import { Item } from "../src/items/Item";
import { LegendaryItem } from "../src/items/LegendaryItem";
import { LimitedItem } from "../src/items/LimitedItem";
import { PerishableItem } from "../src/items/PerishableItem";

export default class InMemoryInventoryRepository implements InventoryRepository {
	private items: Item[] = [
		new PerishableItem('Lettuce', 50, 20, 10),
		new LegendaryItem('Sulfuras, Hand of Ragnaros', 80),
		new AgingItem('Aged Brie', 32, 20, 10),
		new LimitedItem('Backstage passes to a TAFKAL80ETC concert', 12, 20, 10),
		new PerishableItem('Cake', -1, 1, 10),
		new PerishableItem('Cake past', -1, 9, 10),
		new LimitedItem('concert ticket outdated', -1, 20, 10),
		new LimitedItem('Backstage ticket in 9 days', 9, 9, 10),
		new LimitedItem('Backstage ticket in 5 days', 5, 34, 10),
		new AgingItem('Red wine', 20, 50, 10),
		new ConjuredItem('Conjured Mana Cake', 3, 6, 10),
		new ConjuredItem('Conjured Mana Cake past', -1, 3, 10),
	]

	getInventory(): Item[] {
		return this.items;
	}

	saveInventory(items: Item[]): void {
		this.items = items;
	}

	findItem(name: String, quality: number): Item | null {
		for (const item of this.items) {
			if (item.name === name && item.quality === quality) {
				return item;
			}
		}
		return null
	}
}