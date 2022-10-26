import { testData } from './data/gilded-rose.data'
import { PerishableItem } from '../item/item.model'

describe('Gilded Rose', () => {

    it('Should build', () => {
        expect(true).toBe(true)
    })
    test('should call update quality', () => {
        const { mocks, inputs, expects } = testData.perishableItem
        PerishableItem.prototype.updateQuality = jest.fn()
        const perishableItem = new PerishableItem(inputs.name, inputs.sellIn, inputs.quality)
        perishableItem.updateQuality()
        expect(perishableItem.updateQuality).toHaveBeenCalledTimes(1)
        expect(perishableItem).toMatchObject(expects)
    })
})
