import { Item } from './Item';

export class LegendaryItem extends Item {
    constructor(name: string, baseValue: number) {
        super(name, 999, 80, baseValue);
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

    getValue(): number {
        return this.quality;
    }
}