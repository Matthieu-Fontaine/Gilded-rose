import { Item } from './item';

export class LegendaryItem extends Item {
    constructor(name: string) {
        super(name, 999, 80);
    }

    update(): void {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality(): void {
        console.info('Legendary items do not change in quality');
    }

    updateSellIn(): void {
        console.info('Legendary items do not change in sellIn');
    }

}