import { Item } from './Item';

export class ConjuredItem extends Item {
	constructor(name: string, sellIn: number, quality: number, basePrice: number) {
		super(name, sellIn, quality, basePrice);
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