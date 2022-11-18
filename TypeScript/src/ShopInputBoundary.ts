import SellItemRequest from "./SellItemRequest";

export default interface ShopInputBoundary {
    updateInventory(): void;
    sellItem(sellItemRequest: SellItemRequest): void;
}