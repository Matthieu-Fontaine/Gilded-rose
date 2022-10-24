import { item } from './item';

export class lengendaryItem extends item {
    constructor(name: string, sellIn: number, quanlity: number) {
        super(name, sellIn, quanlity);
    }

    updateQuality(): void {
        console.log("lengendaryItem.updateQuality() called");
    }

}