import { Item } from './item';

export class PerishableItem extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    update(): void {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality(): void {
        if (this.quality > 0) {
            this.quality -= this.sellIn < 0 ? 2 : 1;
        }
    }

    updateSellIn(): void {
        this.sellIn--
    }

}