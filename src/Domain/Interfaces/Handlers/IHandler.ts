import { GeneralConfigurations } from "../../../Infrastructure/Configurations/GeneralConfigurations";

export interface IHandler {
    configure(configurations: GeneralConfigurations): void;
}