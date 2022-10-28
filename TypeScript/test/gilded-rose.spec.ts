import { testData } from './data/gilded-rose.data'
import { PerishableItem } from '../src/items/perishableItem'
import { AgingItem } from '../src/items/agingItem'
import { LegendaryItem } from '../src/items/legendaryItem'
import { LimitedItem } from '../src/items/limitedItem'
import { Item } from '../src/items/item'
import { Shop } from '../src/items/shop'
import { ConjuredItem } from '../src/items/conjuredItem'

describe('Gilded Rose', () => {
    let items: Item[], shop: Shop
    items = [
        new PerishableItem('Lettuce', 50, 20),
        new LegendaryItem('Sulfuras, Hand of Ragnaros'),
        new AgingItem('Aged Brie', 32, 20),
        new LimitedItem('Backstage passes to a TAFKAL80ETC concert', 12, 20),
        new PerishableItem('Cake', -1, 1),
        new PerishableItem('Cake past', -1, 9),
        new LimitedItem('concert ticket outdated', -1, 20),
        new LimitedItem('Backstage ticket in 9 days', 9, 9),
        new LimitedItem('Backstage ticket in 5 days', 5, 34),
        new AgingItem('Red wine', 20, 50),
        new ConjuredItem('Conjured Mana Cake', 3, 6),
        new ConjuredItem('Conjured Mana Cake past', -1, 3),
    ]
    beforeAll(() => {
        shop = new Shop(items)
        shop.updateInventory()
    })
    it('shouldn\'t have negative quality', () => {
        expect(shop.items[4].quality).toBe(0)
    })
    it('should decrease quality by 1', () => {
        expect(shop.items[0].quality).toBe(19)
    })
    it('should decrease quality by 2 but not over 0', () => {
        expect(shop.items[5].quality).toBe(7)
    })
    it('shouldn\'t decrease in quality', () => {
        expect(shop.items[1].quality).toBe(80)
    })
    it('should increase quality by 1 for aging item', () => {
        expect(shop.items[2].quality).toBe(21)
    })
    it('should increase quality by 1 for limited item', () => {
        expect(shop.items[2].quality).toBe(21)
    })
    it('should increase quality by 2 for limited item', () => {
        expect(shop.items[7].quality).toBe(11)
    })
    it('should increase quality by 3 for limited item', () => {
        expect(shop.items[8].quality).toBe(37)
    })
    it('should set quality to 0 for limited item', () => {
        expect(shop.items[6].quality).toBe(0)
    })
    it('shouldn\'t increase quality over 50', () => {
        expect(shop.items[9].quality).toBe(50)
    })
    it('should decrease quality of conjured item by 2', () => {
        expect(shop.items[10].quality).toBe(4)
    })
    it('should decrease quality of conjured item by 4 by not over 0', () => {
        expect(shop.items[11].quality).toBe(0)
    })
})
