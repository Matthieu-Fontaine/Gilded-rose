import { item } from './item';

export class perishableItem extends item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    updateQuality(): void {
        console.log("perishableItem.updateQuality() called");


    }

}