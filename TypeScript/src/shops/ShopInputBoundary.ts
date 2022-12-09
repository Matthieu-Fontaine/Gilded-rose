import SellItemRequest from "../item-handlers/SellItemRequest";

export default interface ShopInputBoundary {
    displayBalance(balance: number): void;
    updateInventory(): void;
    sellItem(sellItemRequest: SellItemRequest): void;
    auctionItem(sellItemRequest: SellItemRequest): void;
}