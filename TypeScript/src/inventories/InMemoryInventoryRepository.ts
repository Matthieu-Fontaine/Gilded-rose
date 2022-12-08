import ItemsGateway from "../ItemsGateway";
import { AgingItem } from "../items/AgingItem";
import { ConjuredItem } from "../items/ConjuredItem";
import { Item } from "../items/Item";
import { LegendaryItem } from "../items/LegendaryItem";
import { LimitedItem } from "../items/LimitedItem";
import { PerishableItem } from "../items/PerishableItem";
import { RelicItem } from "../items/relicItem";

export default class InMemoryInventoryRepository implements ItemsGateway {
	private items: Item[] = [
		new PerishableItem('Lettuce', 50, 20, 10, [{ name: 'Attack', value: 1, }, { name: 'Defense', value: 1 }]),
		new LegendaryItem('Sulfuras, Hand of Ragnaros', 80, [{ name: 'Attack', value: 5000, }, { name: 'Defense', value: 10 }]),
		new AgingItem('Aged Brie', 32, 20, 10),
		new LimitedItem('Backstage passes to a TAFKAL80ETC concert', 12, 20, 10),
		new PerishableItem('Cake', -1, 1, 10, [{ name: 'Defense', value: 1 }]),
		new PerishableItem('Cake past', -1, 9, 10, [{ name: 'Defense', value: 2 }]),
		new LimitedItem('concert ticket outdated', -1, 20, 10),
		new LimitedItem('Backstage ticket in 9 days', 9, 9, 10),
		new LimitedItem('Backstage ticket in 5 days', 5, 34, 10),
		new AgingItem('Red wine', 20, 50, 10),
		new ConjuredItem('Conjured Mana Cake', 3, 6, 10, [{ name: 'Attack', value: 100, }, { name: 'Defense', value: -1000 }]),
		new ConjuredItem('Conjured Mana Cake past', -1, 3, 10, [{ name: 'Attack', value: -1000, }, { name: 'Defense', value: 100 }]),
		new RelicItem('Pandora box', [{ name: 'Attack', value: 1, }, { name: 'Defense', value: 2 }])
	]

	getInventory(): Item[] {
		return this.items;
	}

	saveInventory(items: Item[]): void {
		this.items = items;
	}

	findItem(name: string, quality: number): Item | null {
		for (const item of this.items) {
			if (item.name === name && item.quality === quality) {
				return item;
			}
		}
		return null
	}
}