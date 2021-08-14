import { injectable, inject } from "inversify";
import { INTERFACE_SYMBOLS } from "../../IoC/InterfaceSymbols";
import { GeneralConfigurations } from "../GeneralConfigurations";
import { IClientFactory } from "../Interfaces/Factories/IClientFactory";
import { IGeneralConfigurationFactory } from "../Interfaces/Factories/IGeneralConfigurationFactory";

@injectable()
export class DefaultGeneralConfigurationFactory implements IGeneralConfigurationFactory {

    private readonly _clientFactory: IClientFactory;

    public constructor (
        @inject(INTERFACE_SYMBOLS.IClientFactory) clientFactory: IClientFactory
    ) {
        this._clientFactory = clientFactory;
    }

    create(): GeneralConfigurations {
        let configs = new GeneralConfigurations(this._clientFactory.create());
        configs.addGeneralPrefix("!p");
        configs.addGeneralPrefix("!play");
        configs.addGeneralPrefix(";;p");
        configs.addGeneralPrefix(";;play");
        configs.addSpecificPrefix("!cleber");
        configs.addSpecificPrefix(";;cleber");
        return configs;
    }
 
}