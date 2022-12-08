import { Item } from './Item';
import Attribute from './itemAttributes';

export class LegendaryItem extends Item {
    constructor(name: string, basePrice: number, attributes: Attribute[] = []) {
        super(name, 999, 80, basePrice, attributes);
    }

    update(): void {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality(): void {
        // console.info('Legendary items do not change in quality');
    }

    updateSellIn(): void {
        // console.info('Legendary items do not change in sellIn');
    }
}