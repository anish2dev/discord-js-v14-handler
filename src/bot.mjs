import { BotClient } from "./structures/BotClient.mjs";
//<-----------------Imported Modules----------------->
// https://discord.com/api/oauth2/authorize?client_id=1032998523123290182&permissions=2192919040&scope=bot
const client = new BotClient();

client.on("TomatoBot6966Loaded", () => {
    client.logger.info("Now starting the bot");
    //<-----------------Login in bot----------------->
    client.login(process.env.DISCORD_TOKEN)
})
