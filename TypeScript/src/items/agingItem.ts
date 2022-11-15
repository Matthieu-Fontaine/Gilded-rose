import { Item } from './Item';

export class AgingItem extends Item {
    constructor(name: string, sellIn: number, quality: number, basePrice: number) {
        super(name, sellIn, quality, basePrice);
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