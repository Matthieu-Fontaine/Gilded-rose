import { Item } from './Item';
import Attribute from './itemAttributes';

export class RelicItem extends Item {
  constructor(name: string, attributes: Attribute[] = []) {
    super(name, 0, 0, 0, attributes);
  }

  update() {
    this.updateQuality();
    this.updateSellIn();
  }

  updateQuality() {
    this.quality -= this.sellIn < 0 ? 2 : 1;
    if (this.quality < 0)
      this.quality = 0;
  }

  updateSellIn() {
    this.sellIn--
  }
}