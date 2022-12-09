import ItemsGateway from '../src/item-handlers/ItemsGateway'
import { ShopInteractor } from '../src/shops/ShopInteractor'
import InMemoryInventoryRepository from '../src/inventories/InMemoryInventoryRepository'
import SellItemRequest from '../src/item-handlers/SellItemRequest'
import { DiscordMessage } from '../src/notification-senders/discord'
import * as discord from 'discord.js';
jest.mock('discord.js', () => {
    return {
        Client: jest.fn().mockImplementation(() => {
            return {
                login: jest.fn().mockImplementation(() => {
                    return Promise.resolve();
                }),
                destroy: jest.fn().mockImplementation(() => {
                    return Promise.resolve();
                }),
                channels: {
                    fetch: jest.fn().mockImplementation(() => {
                        return Promise.resolve({
                            send: jest.fn().mockImplementation(() => {
                                return Promise.resolve();
                            })
                        })
                    })
                }
            }
        }),
        GatewayIntentBits: {
            Guilds: 1
        }
    }
})
jest.mock('../src/notification-senders/discord', () => {
    return {
        DiscordMessage: jest.fn().mockImplementation(() => {
            return {
                send: jest.fn().mockImplementation(() => {
                    return Promise.resolve();
                })
            }
        })
    }
})
const client = new discord.Client({ intents: [] });
const discordMessage = new DiscordMessage();

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
        expect(repository.getInventory().length).toBe(12)
        expect(shop.balance).toEqual(610)
    })
    it('shouldn\'t sell item if not in inventory', () => {
        shop.sellItem(new SellItemRequest('Lettuce', 40))
        expect(repository.getInventory().length).toBe(13)
        expect(shop.balance).toEqual(100)
    })
    it('should auction an item', () => {
        shop.auctionItem(new SellItemRequest('Lettuce', 19))
        expect(client.login).toHaveBeenCalledTimes(1)
        expect(client.channels.fetch).toHaveBeenCalledTimes(1)
        expect(discordMessage.send).toHaveBeenCalledTimes(1)
        expect(client.destroy).toHaveBeenCalledTimes(1)
        expect(repository.getInventory().length).toBe(12)
        expect(shop.balance).toEqual(366.2000000000001)
    })
    it('shouldn\'t auction item if not in inventory', () => {
        shop.auctionItem(new SellItemRequest('Red wine', 40))
        expect(repository.getInventory().length).toBe(13)
        expect(shop.balance).toEqual(100)
    })
    it('should return item attributes', () => {
        expect(repository.getInventory()[0].getAttributes()).toEqual(['Attack + 1', 'Defense + 1'])
    })
    it('should return no item attributes', () => {
        expect(repository.getInventory()[2].getAttributes()).toEqual([])
    })
    it('should add 100 gold to balance when relic item is present', () => {
        expect(shop.balance).toEqual(100)
        shop.updateInventory()
        expect(shop.balance).toEqual(200)
    })
    it('should not sell relic item', () => {
        shop.sellItem(new SellItemRequest('Relic', 50))
        expect(repository.getInventory().length).toBe(13)
        expect(shop.balance).toEqual(100)
    })
})