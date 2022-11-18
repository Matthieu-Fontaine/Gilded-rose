export abstract class Item {
    constructor(name: string, sellIn: number, quality: number, baseValue: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.basePrice = baseValue;
    }

    name: string
    sellIn: number
    quality: number
    basePrice: number

    abstract update(): void;

    abstract updateQuality(): void;
    abstract updateSellIn(): void;

    getValue(): number {
        let test : number = (10 * this.quality) + this.basePrice;
        return test;
    }
}