class Item {
  name: string
  sellIn: number
  quality: number
  perishableType: Enumerator<string>

  constructor(name: string, sellIn: number, quality: number, perishableType: Enumerator) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality,
    this.perishableType = perishableType
  }

  updateQuality(item: Item) {
    let { perishableType: type, quality, sellIn } = item
    switch(type){
      case perishableType.aging:

    }
  }
}

enum perishableType {
  'perishable',
  'legendary',
  'aging',
  'limited'
}