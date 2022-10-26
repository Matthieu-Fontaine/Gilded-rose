export abstract class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    name: string
    sellIn: number
    quality: number

    abstract update(): void;

    abstract updateQuality(): void;
    abstract updateSellIn(): void;
}