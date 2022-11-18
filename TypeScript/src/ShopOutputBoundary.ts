import ItemResponse from "./ItemResponse";

export default interface ShopInputBoundary {
    displayInventory(items: ItemResponse[]);
    displayBalance(balance: number);
}