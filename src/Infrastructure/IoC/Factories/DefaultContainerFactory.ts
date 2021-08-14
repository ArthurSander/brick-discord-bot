import { Container } from "inversify";
import { DefaultAudioCommand } from "../../../Domain/Commands/Audio/DefaultAudioCommand";
import { DefaultHandler } from "../../../Domain/Handlers/DefaultHandler";
import { IAudioCommand } from "../../../Domain/Interfaces/Commands/IAudioCommand";
import { IHandler } from "../../../Domain/Interfaces/Handlers/IHandler";
import { DefaultClientFactory } from "../../Configurations/Factories/DefaultClientFactory";
import { DefaultGeneralConfigurationFactory } from "../../Configurations/Factories/DefaultGeneralConfigurationFactory";
import { IClientFactory } from "../../Configurations/Interfaces/Factories/IClientFactory";
import { IGeneralConfigurationFactory } from "../../Configurations/Interfaces/Factories/IGeneralConfigurationFactory";
import { IContainerFactory } from "../Interfaces/Factories/IContainerFactory";
import { INTERFACE_SYMBOLS } from "../InterfaceSymbols";

export class DefaultContainerFactory implements IContainerFactory {

    create(): Container {
        let container = new Container();

        container.bind<IClientFactory>(INTERFACE_SYMBOLS.IClientFactory).to(DefaultClientFactory);
        container.bind<IGeneralConfigurationFactory>(INTERFACE_SYMBOLS.IGeneralConfigurationFactory).to(DefaultGeneralConfigurationFactory);
        container.bind<IHandler>(INTERFACE_SYMBOLS.IHandler).to(DefaultHandler);
        container.bind<IAudioCommand>(INTERFACE_SYMBOLS.IAudioCommand).to(DefaultAudioCommand);

        return container;
    }

}