import { Message } from "discord.js";

export interface IAudioCommand {
    execute(message: Message) : void
}