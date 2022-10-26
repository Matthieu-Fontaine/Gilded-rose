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
    }

    updateSellIn(): void {
    }

}