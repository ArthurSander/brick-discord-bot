import { GeneralConfigurations } from "../../GeneralConfigurations";

export interface IGeneralConfigurationFactory {
    create(): GeneralConfigurations;
}