import { Message, StreamDispatcher, VoiceConnection } from "discord.js";
import { injectable } from "inversify";
import ytdl = require("ytdl-core");
import { IAudioCommand } from "../../Interfaces/Commands/IAudioCommand";

@injectable()
export abstract class AudioCommand implements IAudioCommand {
    
    abstract execute(message: Message): void;

    protected async play (connection: VoiceConnection, ytUrl: string): Promise<StreamDispatcher> {
       
        const stream = ytdl(ytUrl, { filter: 'audioonly', dlChunkSize: 0 })
        console.log("Playing: " + ytUrl)
        return new Promise<StreamDispatcher>(async (resolve) => {
            resolve(connection.play(stream));
        })
    }

    protected async joinChannel(message: Message): Promise<VoiceConnection> {
        return new Promise<VoiceConnection>((resolve, reject) => {
            let channel = message.member.voice.channel;
            if(!channel) reject();
    
            channel.join().then((voiceConnection) => {
                resolve(voiceConnection);
            });
        });
    }
}