import { inject, injectable } from "inversify";
import { GeneralConfigurations } from "../../Infrastructure/Configurations/GeneralConfigurations";
import { INTERFACE_SYMBOLS } from "../../Infrastructure/IoC/InterfaceSymbols";
import { RogerRogerdAudioCommand } from "../Commands/Audio/RogerRogerdAudioCommand";
import { IAudioCommand } from "../Interfaces/Commands/IAudioCommand";
import { IHandler } from "../Interfaces/Handlers/IHandler";

@injectable()
export class DefaultHandler implements IHandler {
    
    private readonly _audioCommand: IAudioCommand;
    private readonly _rogerdCommand: IAudioCommand;

    public constructor (
        @inject(INTERFACE_SYMBOLS.IAudioCommand) audioCommand: IAudioCommand
    ) {
        this._audioCommand = audioCommand;
        this._rogerdCommand = new RogerRogerdAudioCommand();
    }

    configure(configurations: GeneralConfigurations): void {
        configurations.client.on("message", (message) => {
            let generalCommand = configurations.getCommandPrefix(message, false);
            let specificCommand = configurations.getCommandPrefix(message, true);
            if(specificCommand){
                switch(message.content){
                    case `${specificCommand} rogerd`:
                        this._rogerdCommand.execute(message);
                        return;
                }
            }
            if(generalCommand){
                this._audioCommand.execute(message);
            }
            
        });
    }

}