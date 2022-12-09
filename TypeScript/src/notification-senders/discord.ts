import { config } from 'dotenv';
config();
import * as Discord from 'discord.js'

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })

export class DiscordMessage {
    public async send(message: string): Promise<void> {
        try {
            await client.login(process.env.DISCORD_TOKEN);
            const channel = await client.channels.fetch(process.env.DISCORD_CHANNEL_ID || '');
            await (channel as Discord.TextChannel).send(message);
            client.destroy();
        } catch (error) {
            console.error(error);
        }
    }
}

