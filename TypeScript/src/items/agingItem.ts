import { Item } from './Item';

export class AgingItem extends Item {
    constructor(name: string, sellIn: number, quality: number, baseValue: number) {
        super(name, sellIn, quality, baseValue);
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

    getValue(): number {
        return this.quality;
    }

}