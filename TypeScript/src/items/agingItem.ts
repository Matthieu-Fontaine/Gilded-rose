import { Item } from './Item';
import Attribute from './itemAttributes';

export class AgingItem extends Item {
    constructor(name: string, sellIn: number, quality: number, basePrice: number, attributes: Attribute[] = []) {
        super(name, sellIn, quality, basePrice, attributes);
    }

    update(): void {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality(): void {
        if (this.quality < 50) {
            this.quality++;
        }
    }

    updateSellIn(): void {
        this.sellIn--;
    }

}