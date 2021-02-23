const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const token = 'ODEyOTg3NjgxNjg3ODYzMzM3.YDIvxw.KjoKTT-Vsf9TXNx-gNHbU137y7I';

const prefix = 'j!'

const fs = require('fs');

const mongoose = require('mongoose');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Jancuk! wes iso di dinggo.');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'play'){
        client.commands.get('play').execute(message, args, command, client, Discord);
    }
    if(command === 'tampol'){
        client.commands.get('tampol').execute(message, args, Discord);
    }
});

mongoose
  .connect('mongodb+srv://dean:themightythor@jancuk.ojuv4.mongodb.net/Ikan?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {
    console.log('Connected To the database! (MongoDB)');
})
.catch((err) =>{
    console.log(err);
})







client.login(token);