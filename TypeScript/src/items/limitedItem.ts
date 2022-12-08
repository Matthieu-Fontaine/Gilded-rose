import { Item } from './Item';
import Attribute from './itemAttributes';

export class LimitedItem extends Item {
    constructor(name: string, sellIn: number, quality: number, basePrice: number, attributes: Attribute[] = []) {
        super(name, sellIn, quality, basePrice, attributes);
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
}