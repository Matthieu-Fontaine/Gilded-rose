export abstract class Item {
    constructor(name: string, sellIn: number, quality: number, baseValue: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.baseValue = baseValue;
    }

    name: string
    sellIn: number
    quality: number
    baseValue: number

    abstract update(): void;

    abstract updateQuality(): void;
    abstract updateSellIn(): void;

    abstract getValue(): number;
}