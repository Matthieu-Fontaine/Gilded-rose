import { testData } from './data/gilded-rose.data'
describe('Gilded Rose', () => {

    it('Should build', () => {
        expect(true).toBe(true)
    })
    test('should call update quality', () => {
        const { mocks, inputs, expects } = testData.perishableItem
        const perishableItem = new PerishableItem(inputs.name, inputs.sellIn, inputs.quality)
        expect(perishableItem.updateQuality()).toBeCalled()
    })
})
