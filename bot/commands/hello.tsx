import { Command } from "../interfaces/Command";
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";


export const profile: Command = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Says hello back to you!"),
    run: async (interaction) => {
        const { user } = interaction;

        const helloEmbed = new EmbedBuilder()
            .setTitle(`Hello, ${user.username}!`)
            .setDescription('Nice to meet you!')
            .setTimestamp()
            .setFooter({ text: 'This is footer text' });

        await interaction.followUp({ embeds: [helloEmbed] });
    }
}