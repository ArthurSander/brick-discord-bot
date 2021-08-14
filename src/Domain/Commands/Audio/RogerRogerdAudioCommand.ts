import { Message, StreamDispatcher } from "discord.js";
import { AudioCommand } from "./AudioCommand";

export class RogerRogerdAudioCommand extends AudioCommand {
    execute(message: Message): void {
        this.joinChannel(message).then((voiceConnection) => {
            if(!voiceConnection) return;

            this.play(voiceConnection, 'https://www.youtube.com/watch?v=08AzSgyUxFo&ab_channel=LFPAnimations').then((connection: StreamDispatcher) => connection.on('finish', () => {
                voiceConnection.disconnect();
            }));
        })
    }

}