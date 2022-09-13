import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { validateEnv } from "./utils/validateEnv";
import { onReady } from "./events/onReady";
import { onInteraction } from "./events/onInteraction";
import { connectDatabase } from "./database/connectDatabase";


(async () => {
    if (!validateEnv()) return;

    const BOT = new Client({ intents: IntentOptions });

    BOT.on("ready",
        async () => {
            await onReady(BOT);
        }
    );

    BOT.on("interactionCreate",
        async (interaction) => {
            await onInteraction(interaction);
        }
    );

    await connectDatabase();

    await BOT.login(process.env.BOT_TOKEN);
})