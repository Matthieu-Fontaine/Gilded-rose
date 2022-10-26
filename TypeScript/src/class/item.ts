export abstract class item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    name: string
    sellIn: number
    quality: number

    abstract updateQuality(): void;
}