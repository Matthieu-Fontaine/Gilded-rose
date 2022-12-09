import * as Discord from 'discord.js'

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })
client.login('MTA1MDY4MTQ0MzY0NDM1ODY5Nw.GobR3c.c_1kBk4tHPGAxiH1xwWaOCeZ7FZzCQrYRrI9J8');

export class DiscordNotification {
    public send(message: string): void {
        client.on('ready', () => {
            if (!client.user) throw new Error('Client user is null')
            console.log(`Logged in as ${client.user.tag}!`);
            const chan = client.channels.cache.get("1050682383101329451");
            (chan as Discord.TextChannel).send(message).then(() => {
                console.log("Message sent");
                client.destroy()
            }).catch((err) => {
                console.log(err);
            })
        })
    }
}

