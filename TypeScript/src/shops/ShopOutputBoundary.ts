import ItemResponse from "./ItemResponse";

export default interface ShopOutputBoundary  {
    displayInventory(items: ItemResponse[]): void;
    displayBalance(): void;
}