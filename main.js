const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 //Console log

client.once('ready', () => {
    console.log('Kangaroo bot is now online. *sigh*');
});
 
client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
    if(command === 'clear'){

        client.commands.get('clear').execute(message, args);
    } 

    if(command === 'ping'){

        client.commands.get('ping').execute(message, args);
    } 
    
    if(command === 'ticket'){

        client.commands.get('ticket').execute(message, args);
    } 

    if(command === 'help'){

        client.commands.get('help').execute(message, args);
    } 

});
 
client.login('Nzk3NTMzODA4Mzc5Mjk3ODIy.X_n3PQ.8wACW3r7o2OHVEQOJGnug3Fssc4');
 


//client code: Nzk3NTMzODA4Mzc5Mjk3ODIy.X_n3PQ.8wACW3r7o2OHVEQOJGnug3Fssc4
