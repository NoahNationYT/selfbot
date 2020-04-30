const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client({disableEveryone: true});

const token = 'NjE0OTQ2ODkwMTM1NjMzOTU4.XqozGg.S3LyvRO4VGeEIwuq3KBZ48ZkHQE';

const PREFIX = '!';

bot.on('message',msg=>{
    let args = (msg.content.substring(msg.content.split(' ')[0].length)).split(' ');
    switch(args[0]){
        case 'embed':
            let embed = new Discord.RichEmbed(JSON.parse(msg.content.substring(msg.content.split(' ')[0].length)));
            msg.channel.send(embed);
            break;
        case '':
            //
    };
});

bot.login(token);