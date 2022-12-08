import Attribute from "./itemAttributes";

export abstract class Item {
    constructor(name: string, sellIn: number, quality: number, baseValue: number, attributes: Attribute[]) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.basePrice = baseValue;
        this.attributes = attributes;
    }

    name: string
    sellIn: number
    quality: number
    basePrice: number
    attributes: Attribute[]

    abstract update(): void;
    abstract updateQuality(): void;
    abstract updateSellIn(): void;

    getValue(): number {
        let test: number = (10 * this.quality) + this.basePrice;
        return test;
    }
    getAttributes(): string[] {
        return this.attributes.map(attribute => {
            return `${attribute.name} + ${attribute.value}`;
        });
    }
}