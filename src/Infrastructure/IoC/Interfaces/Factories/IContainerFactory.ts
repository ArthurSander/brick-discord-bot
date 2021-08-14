import { Container } from "inversify";

export interface IContainerFactory {
    create(): Container;
}