
import * as fs from "fs"
import * as path from "path"
import { stringify } from 'csv-stringify';
import { parse } from "csv-parse"
import { Item } from "../items/Item"
import InventoryRepository from "../InventoryRepository"
import { PerishableItem } from "../items/PerishableItem"
import { LegendaryItem } from "../items/LegendaryItem"
import { ConjuredItem } from "../items/ConjuredItem"
import { AgingItem } from "../items/AgingItem"
import { LimitedItem } from "../items/LimitedItem"

type CSVItem = {
  itemType: string,
  name: string,
  sellIn: number,
  quality: number
}
const csvFilePath = path.resolve(__dirname, 'Items.csv');

const headers = ['itemType', 'name', 'sellIn', 'quality'];

export default class FileInventoryRepository implements InventoryRepository {

  getInventory(): Item[] {
    let items: Item[] = []

    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, (error, result: CSVItem[]) => {
      if (error) {
        console.error(error);
      }
      console.log("Result", result);
      result.forEach((item: CSVItem) => {
        switch (item.itemType) {
          case 'PerishableItem':
            items.push(new PerishableItem(item.name, item.sellIn, item.quality)); break
          case 'LegendaryItem':
            items.push(new LegendaryItem(item.name)); break
          case 'ConjuredItem':
            items.push(new ConjuredItem(item.name, item.sellIn, item.quality)); break
          case 'AgingItem':
            items.push(new AgingItem(item.name, item.sellIn, item.quality)); break
          case 'LimitedItem':
            items.push(new LimitedItem(item.name, item.sellIn, item.quality)); break
          default:
            console.error(`Item type ${item.itemType} not supported`)
        }
      })
    })
    return items
  }

  saveInventory(items: Item[]): void {
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
      fs.writeFileSync(csvFilePath, output, { encoding: 'utf-8' })
    })
  }
}