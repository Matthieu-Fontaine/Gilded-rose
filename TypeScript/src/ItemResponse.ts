export default class ItemResponse {
    sellIn: number;
    quality: number;
    value: number;

    constructor(sellIn: number, quality: number, value: number) {
        this.sellIn = sellIn;
        this.quality = quality;
        this.value = value;
    }
}
