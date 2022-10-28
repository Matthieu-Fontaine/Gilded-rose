import { Item } from './item';

export class AgingItem extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
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