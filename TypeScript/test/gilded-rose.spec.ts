import ItemsGateway from '../src/ItemsGateway'
import { ShopInteractor } from '../src/ShopInteractor'
import InMemoryInventoryRepository from '../src/inventories/InMemoryInventoryRepository'
import SellItemRequest from '../src/SellItemRequest'

describe('Gilded Rose', () => {
    let shop: ShopInteractor
    let repository: ItemsGateway

    beforeEach(() => {
        repository = new InMemoryInventoryRepository()
        shop = new ShopInteractor(repository)
        shop.updateInventory()
    })
    it('shouldn\'t have negative quality', () => {
        expect(repository.getInventory()[4].quality).toBe(0)
    })
    it('should decrease quality by 1', () => {
        expect(repository.getInventory()[0].quality).toBe(19)
    })
    it('should decrease quality by 2 but not over 0', () => {
        expect(repository.getInventory()[5].quality).toBe(7)
    })
    it('shouldn\'t decrease in quality', () => {
        expect(repository.getInventory()[1].quality).toBe(80)
    })
    it('should increase quality by 1 for aging item', () => {
        expect(repository.getInventory()[2].quality).toBe(21)
    })
    it('should increase quality by 1 for limited item', () => {
        expect(repository.getInventory()[2].quality).toBe(21)
    })
    it('should increase quality by 2 for limited item', () => {
        expect(repository.getInventory()[7].quality).toBe(11)
    })
    it('should increase quality by 3 for limited item', () => {
        expect(repository.getInventory()[8].quality).toBe(37)
    })
    it('should set quality to 0 for limited item', () => {
        expect(repository.getInventory()[6].quality).toBe(0)
    })
    it('shouldn\'t increase quality over 50', () => {
        expect(repository.getInventory()[9].quality).toBe(50)
    })
    it('should decrease quality of conjured item by 2', () => {
        expect(repository.getInventory()[10].quality).toBe(4)
    })
    it('should decrease quality of conjured item by 4 by not over 0', () => {
        expect(repository.getInventory()[11].quality).toBe(0)
    })
    it('should sell item', () => {
        shop.sellItem(new SellItemRequest('Red wine', 50))
        expect(repository.getInventory().length).toBe(11)
        expect(shop.balance).toEqual(510)
    })
    it('shouldn\'t sell item if not in inventory', () => {
        shop.sellItem(new SellItemRequest('Lettuce', 40))
        expect(repository.getInventory().length).toBe(12)
        expect(shop.balance).toEqual(0)
    })
    it('should auction an item', () => {
        shop.auctionItem(new SellItemRequest('Lettuce', 19))
        expect(repository.getInventory().length).toBe(11)
        expect(shop.balance).toEqual(266.2000000000001)
    })
    it('shouldn\'t auction item if not in inventory', () => {
        shop.auctionItem(new SellItemRequest('Red wine', 40))
        expect(repository.getInventory().length).toBe(12)
        expect(shop.balance).toEqual(0)
    })
    it('should return item attributes', () => {
        expect(repository.getInventory()[0].getAttributes()).toEqual(['Attack + 1', 'Defense + 1'])
    })
    it('should return no item attributes', () => {
        expect(repository.getInventory()[2].getAttributes()).toEqual([])
    })
})