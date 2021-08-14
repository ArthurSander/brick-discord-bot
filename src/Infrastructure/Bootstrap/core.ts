import { Container } from "inversify";
import { IHandler } from "../../Domain/Interfaces/Handlers/IHandler";
import { INTERFACE_SYMBOLS } from "../IoC/InterfaceSymbols";
import { IGeneralConfigurationFactory } from "../Configurations/Interfaces/Factories/IGeneralConfigurationFactory";

export class Core {
    private _container: Container;

    public constructor (container: Container) {
        this._container = container;
    }

    public start() {
        var generalConfiguration = this._container.get<IGeneralConfigurationFactory>(INTERFACE_SYMBOLS.IGeneralConfigurationFactory).create();
        this._container.get<IHandler>(INTERFACE_SYMBOLS.IHandler).configure(generalConfiguration);
        
    }
}
