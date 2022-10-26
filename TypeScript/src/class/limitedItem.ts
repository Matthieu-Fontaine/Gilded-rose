import { item } from './item';

export class limitedItem extends item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    updateQuality(): void {
        console.log("limitedItem.updateQuality() called");
    }

}