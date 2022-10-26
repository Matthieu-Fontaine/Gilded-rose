import { testData } from './data/gilded-rose.data'
import { PerishableItem } from '../src/class/perishableItem'
import { AgingItem } from '../src/class/agingItem'
import { LegendaryItem } from '../src/class/legendaryItem'
import { LimitedItem } from '../src/class/limitedItem'
import { Item } from '../src/class/item'
import { Shop } from '../src/class/shop'

describe('Gilded Rose', () => {
    let items: Item[], shop: Shop
    items = [
        new PerishableItem('Lettuce', 50, 20),
        new LegendaryItem('Sulfuras, Hand of Ragnaros', 50, 80),
        new AgingItem('Aged Brie', 32, 20),
        new LimitedItem('Backstage passes to a TAFKAL80ETC concert', 12, 20),
        new PerishableItem('Cake', 0, 0),
        new PerishableItem('Cake past', -1, 9),
        new LimitedItem('concert ticket outdated', 0, 20),
        new LimitedItem('Backstage ticket in 9 days', 9, 9),
        new LimitedItem('Backstage ticket in 5 days', 5, 34),
        new AgingItem('Red wine', 20, 50)
    ]
    beforeEach(() => {
        shop = new Shop(items)
        shop.updateInventory()
    })
    it('shouldn\'t have negative quality', () => {
        expect(shop.items[4].quality).toBe(0)
    })
    // it('normal decrease quality', () => {
    //     expect(shop.items[0].quality).toBe(19)
    // })
    // it('double decrease in quality', () => {
    //     expect(shop.items[5].quality).toBe(7)
    // })
    // it('no decrease in quality', () => {
    //     expect(shop.items[1].quality).toBe(80)
    // })
    // it('normal increase in quality', () => {
    //     expect(shop.items[2].quality).toBe(21)
    // })
    // it('double increase in quality', () => {
    //     expect(shop.items[7].quality).toBe(11)
    // })
    // it('triple increase in quality', () => {
    //     expect(shop.items[8].quality).toBe(37)
    // })
    // it('quality is 0', () => {
    //     expect(shop.items[6].quality).toBe(0)
    // })
    // it('no quality > 50', () => {
    //     expect(shop.items[9].quality).toBe(50)
    // })
})
