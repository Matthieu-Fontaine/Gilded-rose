
import * as fs from "fs"
import * as path from "path"
import { stringify } from 'csv-stringify';
import { parse } from "csv-parse"
import { Item } from "../items/Item"
import ItemsGateway from "../ItemsGateway"
import { PerishableItem } from "../items/PerishableItem"
import { LegendaryItem } from "../items/LegendaryItem"
import { ConjuredItem } from "../items/ConjuredItem"
import { AgingItem } from "../items/AgingItem"
import { LimitedItem } from "../items/LimitedItem"

type CSVItem = {
  itemType: string,
  name: string,
  sellIn: number,
  quality: number,
  baseValue: number
}
const csvFilePath = path.resolve(__dirname, 'Items.csv');
const newCsvFilePath = path.resolve(__dirname, 'NewItems.csv');

const headers = ['itemType', 'name', 'sellIn', 'quality', 'baseValue'];
let items: Item[]

export default class FileInventoryRepository implements ItemsGateway {
  getInventory(): Item[] {
    items = []
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, (error, result: CSVItem[]) => {
      if (error) console.error(error);
      result.forEach((item: CSVItem) => {
        switch (item.itemType) {
          case 'PerishableItem':
            items.push(new PerishableItem(item.name, item.sellIn, item.quality, item.baseValue)); break
          case 'LegendaryItem':
            items.push(new LegendaryItem(item.name, item.baseValue)); break
          case 'ConjuredItem':
            items.push(new ConjuredItem(item.name, item.sellIn, item.quality, item.baseValue)); break
          case 'AgingItem':
            items.push(new AgingItem(item.name, item.sellIn, item.quality, item.baseValue)); break
          case 'LimitedItem':
            items.push(new LimitedItem(item.name, item.sellIn, item.quality, item.baseValue)); break
          default:
            console.error(`Item type ${item.itemType} not supported`)
        }
      })
    })
    return items
  }

  saveInventory(items: Item[]): void {
    if (items.length === 0) return
    const data = items.map((item: Item) => {
      return {
        itemType: item.constructor,
        name: item.name,
        sellIn: item.sellIn,
        quality: item.quality
      }
    })
    stringify(data, { columns: headers }, (error, output) => {
      if (error) console.error(error);
      fs.writeFileSync(newCsvFilePath, output, { encoding: 'utf-8' })
    })
  }

  findItem(name: String, quality: number): Item | null {
    let itemFound: Item | null = null;
    const items = this.getInventory();
    for (let i = 0; i < items.length; i++) {
      if (itemFound == null && items[i].name === name && items[i].quality === quality) {
        itemFound = items[i];
      }
    }
    return itemFound
  }
}