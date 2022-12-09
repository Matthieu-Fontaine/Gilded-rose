import * as Discord from 'discord.js'

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })

export class DiscordMessage {
    public async send(message: string): Promise<void> {
        await client.login('MTA1MDY4MTQ0MzY0NDM1ODY5Nw.GBB3AJ.DgyX7ryN7UZ0G-mqa_yVlG94V5YXUFvapX7bO8');
        const channel = await client.channels.fetch('1050682383101329451');
        if (channel) {
            const msg = await (channel as Discord.TextChannel).send(message);
            if (msg) {
                client.destroy();
            }
        }
    }
}

