import FileInventoryRepository from '../src/data/FileInventoryRepository'
import { Shop } from '../src/Shop'
import InMemoryInventoryRepository from './InMemoryInventoryRepository'

describe('Gilded Rose', () => {
    let shop: Shop
    let shopFile: Shop
    let repository: InMemoryInventoryRepository
    let file: FileInventoryRepository

    beforeAll(() => {
        file = new FileInventoryRepository()
        shopFile = new Shop(file)
        shopFile.updateInventory()
        repository = new InMemoryInventoryRepository()
        shop = new Shop(repository)
        shop.updateInventory()
    })
    describe('Memory Inventory', () => {
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
    })
    describe('File Inventory', () => {
        it('shouldn\'t have negative quality', () => {
            expect(file.getInventory()[4].quality).toBe(0)
        })
        it('should decrease quality by 1', () => {
            expect(file.getInventory()[0].quality).toBe(19)
        })
        it('should decrease quality by 2 but not over 0', () => {
            expect(file.getInventory()[5].quality).toBe(7)
        })
        it('shouldn\'t decrease in quality', () => {
            expect(file.getInventory()[1].quality).toBe(80)
        })
        it('should increase quality by 1 for aging item', () => {
            expect(file.getInventory()[2].quality).toBe(21)
        })
        it('should increase quality by 1 for limited item', () => {
            expect(file.getInventory()[2].quality).toBe(21)
        })
        it('should increase quality by 2 for limited item', () => {
            expect(file.getInventory()[7].quality).toBe(11)
        })
        it('should increase quality by 3 for limited item', () => {
            expect(file.getInventory()[8].quality).toBe(37)
        })
        it('should set quality to 0 for limited item', () => {
            expect(file.getInventory()[6].quality).toBe(0)
        })
        it('shouldn\'t increase quality over 50', () => {
            expect(file.getInventory()[9].quality).toBe(50)
        })
        it('should decrease quality of conjured item by 2', () => {
            expect(file.getInventory()[10].quality).toBe(4)
        })
        it('should decrease quality of conjured item by 4 by not over 0', () => {
            expect(file.getInventory()[11].quality).toBe(0)
        })
    })
})
