import { item } from './item';

export class agingItem extends item {
    constructor(name: string, sellIn: number, quanlity: number) {
        super(name, sellIn, quanlity);
    }

    updateQuality(): void {
        console.log("agingItem.updateQuality() called");
    }

}