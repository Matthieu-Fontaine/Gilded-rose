import { Item } from './items/Item';

export default interface InventoryRepository {
  getInventory(): Item[];
  saveInventory(items: Item[]): void;
}