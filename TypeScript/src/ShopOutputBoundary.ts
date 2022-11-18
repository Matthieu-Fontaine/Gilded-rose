import ItemResponse from "./ItemResponse";

export default interface ShopInputBoundary {
    displayInventory(items: ItemResponse[]): void;
    displayBalance(): void;
}