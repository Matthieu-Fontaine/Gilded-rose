import { Item } from './Item';
import Attribute from './itemAttributes';

export class ConjuredItem extends Item {
	constructor(name: string, sellIn: number, quality: number, basePrice: number, attributes: Attribute[] = []) {
		super(name, sellIn, quality, basePrice, attributes);
	}

	update(): void {
		this.updateQuality();
		this.updateSellIn();
	}

	updateQuality(): void {
		this.quality -= this.sellIn < 0 ? 4 : 2;
		if (this.quality < 0)
			this.quality = 0;
	}

	updateSellIn(): void {
		this.sellIn--
	}
}