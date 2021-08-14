import { Message, StreamDispatcher } from "discord.js";
import { injectable } from "inversify";
import { AudioCommand } from "./AudioCommand";

@injectable()
export class DefaultAudioCommand extends AudioCommand {

    execute(message: Message): void {

        if(message.content.startsWith("!cleber aniversario")){
            var user = message.mentions.members.first();
            user.send("Feliz aniversário lindão <3 <3 <3");
            return;
        }

        let randomNumber = Math.floor(Math.random() * Math.floor(99));
        if(message.content.startsWith("!cleber" || "!Cleber")){
            randomNumber = 0;
        }
        if(randomNumber > 15) {
            return;
        }

        

        console.log(randomNumber);

        this.joinChannel(message).then((voiceConnection) => {
            if(!voiceConnection) return;
            let result = Math.floor(Math.random() * Math.floor(43));
            if(message.content == "!cleber macaco"){
                result = 6;
            }
            if(message.content == "!cleber muslim"){
                result = 7;
            }
            if(message.content == "!cleber nando"){
                result = 8;
            }
            if(message.content == "!cleber alerta"){
                result = 9;
            }
            if(message.content == "!cleber a"){
                result = 10;
            }
            if(message.content == "!cleber trigger"){
                result = 11;
            }
            if(message.content == "!cleber gil"){
                result = 12;
            }
            if(message.content == "!cleber look"){
                result = 13;
            }
            if(message.content == "!cleber vontade"){
                result = 14;
            }
            if(message.content == "!cleber muslm"){
                result = 15;
            }
            if(message.content == "!cleber sugada"){
                result = 16;
            }
            if(message.content == "!cleber yamete"){
                result = 17;
            }
            if(message.content.startsWith("!cleber passeio")){
                result = 18;
            }
            if(message.content.startsWith("!cleber gorfe")){
                result = 19;
            }
            if(message.content.startsWith("!cleber cavalo")){
                result = 20;
            }
            if(message.content.startsWith("!cleber milton")){
                result = 21;
            }
            if(message.content.startsWith("!cleber ovo")){
                result = 22;
            }
            if(message.content.startsWith("!cleber entupida")){
                result = 23;
            }
            if(message.content == "!cleber lelele"){
                result = 24;
            }
            if(message.content == "!cleber parabens"){
                result = 25;
            }
            if(message.content == "!cleber dentadura"){
                result = 26;
            }
            if(message.content == "!cleber 1964") {
                result = 27;
            }
            if(message.content == "!cleber pele") {
                result = 28;
            }
            if(message.content == "!cleber maravilhosos") {
                result = 29;
            }
            if(message.content == "!cleber vegeta") {
                result = 30;
            }
            if(message.content == "!cleber comer") {
                result = 31;
            }
            if(message.content == "!cleber pennies") {
                result = 32;
            }
            if(message.content == "!cleber chaves"){
                result = 33;
            }
            if(message.content == "!cleber probleminha"){
                result = 34;
            }
            if(message.content == "!cleber monki"){
                result = 35;
            }
            if(message.content == "!cleber discord"){
                result = 36;
            }
            if(message.content == "!cleber blyat"){
                result = 37;
            }
            if(message.content == "!cleber stonks"){
                result = 38;
            }
            if(message.content == "!cleber dame"){
                result = 39;
            }
            if(message.content == "!cleber michael"){
                result = 40;
            }
            if(message.content == "!cleber gemidão"){
                result = 41;
            }
            if(message.content == "!cleber porra"){
                result = 42;
            }
            if(message.content == "!cleber fimose"){
                result = 43;
            }
            if(message.content == "!cleber prepucio"){
                result = 44;
            }
            if(message.content == "!cleber loli"){
                result = 45;
            }
            if(message.content == "!cleber miojo"){
                result = 46;
            }
            if(message.content == "!cleber casadas"){
                result = 47;
            }
            if(message.content == "!cleber tilambuco"){
                result = 48;
            }
            if(message.content == "!cleber mão"){
                result = 49;
            }
            if(message.content == "!cleber senta"){
                result = 50;
            }
            if(message.content == "!cleber discriminação"){
                result = 51;
            }
            if(message.content == "!cleber cagar"){
                result = 52;
            }
            

            switch (result){
                case 0:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=Hp7Pvppmgqs").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 1:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=qjwJtORPpMs&ab_channel=sad").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 2: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=npmRJrRxPoU&ab_channel=Megark").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;    
                case 3: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=WviwYLZubSw").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;    
                case 4: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=96zCe-jIPYU").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;    
                case 5: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=LAbnr1jTtI8U").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break; 
                case 6: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=KSgdqONvWSo&ab_channel=AndreffyRyan").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 7: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=aNHfvUfkFts&t=1s&ab_channel=AntiBLM").then((connection: StreamDispatcher) => connection.on("start", () => {
                        var m = voiceConnection.channel.members;
                        var t = this;
                        setTimeout(() => {
                            let fake = 1;
                            if(fake == 0){
                                t.play(voiceConnection, "https://www.youtube.com/watch?v=ViesudGoHKM&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=2&ab_channel=WilliamdoAmaral").then((connection: StreamDispatcher) => connection.on("finish", () => {
                                    message.channel.send(')', {files: ["https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/122746212_162997968801972_6171138250850495176_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_eui2=AeGOJVL9QfJXbJzM_1ATa8zDJ6uRKjyNCPEnq5EqPI0I8Yx00iOndcUpa4p-4E_5pot1MPsqf3pSPVVDMCLjYyEx&_nc_ohc=ln12AMfYU_gAX_NbfoM&_nc_ht=scontent.fcgh7-1.fna&oh=04123009d9bbcba6056674a7f8752987&oe=5FBDDD49"]})
                                    voiceConnection.disconnect();
                                }));
                            }else{
                                t.play(voiceConnection, "https://www.youtube.com/watch?v=KERCg6T5_mk&ab_channel=SFXandGFX").then((connection: StreamDispatcher) => connection.on("start", () => {
                                    setTimeout(() => {
                                        m.forEach((member) => {
                                            if(member.id == process.env.DISCORD_BOT_ID || member.id == "235088799074484224"){
                                                return;
                                            }
                                            try {
                                                member.voice.setChannel(null);
                                                console.log("disconected: " + member.displayName + " ID: " + member.id);
                                            } catch (ex) {
                                                console.log("not possible to disconnect: " + member.displayName);
                                            }
                                            
                                        });  
                                        message.channel.send('', {files: ["https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/122746212_162997968801972_6171138250850495176_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_eui2=AeGOJVL9QfJXbJzM_1ATa8zDJ6uRKjyNCPEnq5EqPI0I8Yx00iOndcUpa4p-4E_5pot1MPsqf3pSPVVDMCLjYyEx&_nc_ohc=ln12AMfYU_gAX_NbfoM&_nc_ht=scontent.fcgh7-1.fna&oh=04123009d9bbcba6056674a7f8752987&oe=5FBDDD49"]})
                                        voiceConnection.disconnect();
                                    }, 3000);
                                })); 
                            }                            
                        }, 14000);
                    }));
                    break;
                case 8: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=4mNX_iDSkeg&ab_channel=Khuylt").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 9:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=ur-ggo4Aek8&ab_channel=DIAIOOFICIAL").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 10:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=RM88KhLw0oA&list=PLQ0Mnj2iCeGxNTaAtuoppV7YAKM_qFb5a&index=10&ab_channel=sukkarbomb").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 11:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=GWfgm23LoiI&list=PLQ0Mnj2iCeGxNTaAtuoppV7YAKM_qFb5a&index=13&ab_channel=C%C3%A9dricAuvray").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 12:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=TDiWx4CMj94&ab_channel=BrasilDasOlimpiadas").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 13:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=NOaSdO5H91M&ab_channel=WarehouseSoundFX").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 14:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=WMeffwVJDLc&ab_channel=lemanolagarto").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 15:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=60c8QZlGeQw&ab_channel=inf").then(connection => connection.on("start", () => {
                        var t = this;
                        setTimeout(() => {
                            t.play(voiceConnection, "https://www.youtube.com/watch?v=ViesudGoHKM&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=2&ab_channel=WilliamdoAmaral").then(connection => connection.on("finish", () => {
                                message.channel.send(')', {files: ["https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/122746212_162997968801972_6171138250850495176_n.jpg?_nc_cat=111&ccb=2&_nc_sid=825194&_nc_eui2=AeGOJVL9QfJXbJzM_1ATa8zDJ6uRKjyNCPEnq5EqPI0I8Yx00iOndcUpa4p-4E_5pot1MPsqf3pSPVVDMCLjYyEx&_nc_ohc=ln12AMfYU_gAX_NbfoM&_nc_ht=scontent.fcgh7-1.fna&oh=04123009d9bbcba6056674a7f8752987&oe=5FBDDD49"]})
                                voiceConnection.disconnect();
                            }));
                        }, 14000);
                    }));
                    break;
                case 16:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=Wiq4urCi6Zw&ab_channel=cvg4ever").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 17:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=a-0vmcFdzms").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        message.reply(':flushed: :point_right: :point_left:');
                        voiceConnection.disconnect();
                    }));
                    break;
                case 18:
                        let firstChannel = message.channel;
                        let channels = message.guild.channels.cache;
                        channels.forEach( (channel) => {
                            if(channel.type == "voice"){
                                console.log(channel.name);
                                try{
                                   message.mentions.members.first().voice.setChannel(channel.id).catch(() => {
                                    console.log("error while moving to channel ");

                                   });
                                }catch(ex) {
                                    console.log
                                    ("error while moving to channel " + channel.name);
                                }   

                            }
                        });
                        message.mentions.members.first().voice.setChannel(firstChannel.id);
                        voiceConnection.disconnect();
                    break;
                case 19:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=khXSFaPifAY&ab_channel=ThiagoNoob").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 20:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=1xzGPPxKgJM&ab_channel=ManeiroGaimer").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 21:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=hFjD6PPlnxc&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=10&ab_channel=SmartWarthog").then((connection: StreamDispatcher) => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 22:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=8lI8WarSvBY&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=15&ab_channel=FelpsnaPelvis").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 23:
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=OslCJjUbyns&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=30&ab_channel=Rivaldofelpsnapelvis").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 24: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=Z7dvSlzsxCc&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=29&ab_channel=Rivaldofelpsnapelvis").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 25: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=gUkaoy1Pr7E&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=35&ab_channel=bruN0").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 26: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=JSJCJgIi9l0&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=36&ab_channel=joanacampeiro").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 27: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=45sAX3uZA7s&ab_channel=LucasGV").then(connection => connection.on("start", () => {
                        setTimeout(() => {
                            voiceConnection.disconnect();
                        }, 8000)
                    }));
                    break;
                case 28: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=oszw7nKOLzk&ab_channel=MenesMEMEsBR").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 29: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=T8idbae7RAk&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=38&ab_channel=GustavoMendes").then(connection => connection.on("start", () => {
                        setTimeout(() => {
                            voiceConnection.disconnect();
                        }, 12300)
                    }));
                    break;
                case 30: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=W4gytQer5YU&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=39&ab_channel=ALONEVONDOOM").then(connection => connection.on("start", () => {
                        setTimeout(() => {
                            voiceConnection.disconnect();
                        }, 12300)
                    }));
                    break;
                case 31: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=MgY4oxGDwZE&list=PLJe9KvSglvr1WgZEYysq16Q5ghMUKi0r1&index=42&ab_channel=HumorTaLoco").then(connection => connection.on("start", () => {
                        setTimeout(() => {
                            voiceConnection.disconnect();
                        }, 6000)
                    }));
                    break;
                case 32: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=FnQD0Bbqdk8&ab_channel=LewisFord").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();

                    }));
                    break;
                case 33: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=9x6PRNrfzVE&ab_channel=Rosinha").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 34: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=nRNUgxki3hg&ab_channel=florencenightingale").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 35: 
                    var am: Message;
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=egYTYpleY0U&ab_channel=Macsi").then(connection => connection.on("start", () =>{
                        message.channel.send("https://tenor.com/view/monkiflip-monki-flip-gif-18149595").then((mess) => {
                            am = mess;
                        });
                    })).then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                        if(am){
                           am.delete();
                        }
                    }));
                    break;
                case 36: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=bsW3LulUknQ&ab_channel=DiscordTroller").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 37: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=0Mhj5LyWC30&ab_channel=%E2%80%98SOTABOYS").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                    }));
                    break;
                case 38:
                    let m: Message;
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=rgysEK_EBHM&ab_channel=SoundLibrary").then(connection => connection.on("start", () => {
                       message.channel.send("https://tenor.com/view/stonks-up-stongs-meme-stocks-gif-15715298").then((mess) =>{
                        m = mess;
                       });
                    })).then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();
                        if(m){
                            m.delete();
                        }
                    }));
                    break;
                case 39: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=8Y_eRrjDNco&ab_channel=sk8gamer").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect();

                    }));
                    break;
                case 40: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=Cazcu9MMcbY&ab_channel=AndersonFerreira").then(connection => connection.on("start", () => {
                        setTimeout(() => {
                            voiceConnection.disconnect();
                        }, 4500)

                    }));
                    break;
                 case 41: 
                    this.play(voiceConnection, "https://www.youtube.com/watch?v=46bj4sKmoTw").then(connection => connection.on("finish", () => {
                        voiceConnection.disconnect()
                    }));
                    break;
//                 case 42: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=dGyWnF6JZlg&ab_channel=AlexandreVolpi").then(connection => connection.on("start", () => {
//                         setTimeout(() => {
// )                            voiceConnection.disconnect();
//                         }, 17000)

//                     });
//                     break;
//                 case 43: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=_OhIeLdVXnI").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 44: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=yJL1XcbJ0Og").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 45: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=sdWwWBssObM").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 46: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=HRENBoOb7tM").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 47: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=eD_uq499x3E").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 48: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=NOjlKaE0zNI").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 49: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=1vm_d5evVls").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 50: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=wBca_FZlwAw").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 51: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=uFKxwk0DVmg").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;
//                 case 52: 
//                     this.play(voiceConnection, "https://www.youtube.com/watch?v=y7bQWWCDObk&ab_channel=ElizeuBarreto").then(connection => connection.on("finish", () => {
//                         voiceConnection.disconnect());

//                     });
//                     break;

                    
            }
        }).catch(() => {

        });  
        
    }

}