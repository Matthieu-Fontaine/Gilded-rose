import SellItemRequest from "./SellItemRequest";

export default interface ShopInputBoundary {
    displayBalance(): void;
    updateInventory(): void;
    sellItem(sellItemRequest: SellItemRequest): void;
}