import ItemResponse from '../item-handlers/ItemResponse';

export default interface ShopOutputBoundary {
    displayInventory(items: ItemResponse[]): void;
    displayBalance(): void;
}