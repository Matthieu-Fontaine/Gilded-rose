import { Item } from './Item';

export class LimitedItem extends Item {
    constructor(name: string, sellIn: number, quality: number, baseValue: number) {
        super(name, sellIn, quality, baseValue);
    }

    update(): void {
        this.updateQuality();
        this.updateSellIn();
    }

    updateQuality(): void {
        switch (!isNaN(this.sellIn)) {
            case this.sellIn > 10:
                this.quality++; break
            case this.sellIn > 5:
                this.quality += 2; break
            case this.sellIn > 0:
                this.quality += 3; break
            default:
                this.quality = 0; break
        }
    }

    updateSellIn(): void {
        this.sellIn--
    }

    getValue(): number {
        return this.quality;
    }

}