import { Item } from './item';

export class Shop {
    items: Item[];

    constructor(items = [] as Item[]) {
        this.items = items;
    }
    public updateInventory():void {
        this.items.forEach((item: Item) => {
            item.update()
        })
    }
}
