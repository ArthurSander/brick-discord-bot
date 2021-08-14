import { Client, Message } from "discord.js";

export class GeneralConfigurations {

    public constructor (client: Client) {
        this.client = client;
    }

    public client: Client;

    private commandPrefixes: Array<string> = ["!"];
    private specificPrefixes: Array<string> = ["!cleber"];

    public getCommandPrefix(message: Message, specificPrefixes: boolean = false): string | null {
        let commandPrefix: string | null = null;

        if(specificPrefixes){
            this.specificPrefixes.forEach(prefix => {
                if(message.content.startsWith(prefix)){
                    commandPrefix = prefix;
                }
            });
        } else {
            this.commandPrefixes.forEach(prefix => {
                if(message.content.startsWith(prefix)){
                    commandPrefix = prefix;
                }
            });
        }
        

        return commandPrefix;
    }

    public addSpecificPrefix(prefix: string): void {
        this.specificPrefixes.push(prefix);
        this.commandPrefixes.push(prefix);
    }

    public addGeneralPrefix(prefix: string): void {
        this.commandPrefixes.push(prefix);
    }

}