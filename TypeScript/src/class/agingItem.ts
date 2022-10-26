import { Item } from './item';

export class AgingItem extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, 80);
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