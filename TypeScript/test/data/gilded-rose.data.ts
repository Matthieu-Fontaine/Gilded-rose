const items = [
  {
    name: 'Aged Brie',
    quality: 23,
    sellIn: 20,
    perishableType: 'aging'
  },
  {
    name: 'test item 1',
    quality: 12,
    sellIn: 50,
    perishableType: 'perishable'
  },
  {
    name: 'Sulfuras',
    quality: 80,
    perishableType: 'legendary'
  },
  {
    name: 'Back stage ticket',
    sellIn: 23,
    quality: 30,
    perishableType: 'limited'
  }
]

export const testData = {
  perishableItem: {
    mocks: {},
    inputs: { name: 'Lettuce', sellIn: 50, quality: 20 },
    expects: { name: 'Lettuce', sellIn: 49, quality: 19 }
  }
}

