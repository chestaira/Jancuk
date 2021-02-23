const { MessageEmbed } = require("discord.js");
const { execute } = require("./play");

module.exports = {
    name: 'tampol',
    desc: 'nampol wong',
    async execute(message, args, Discord){
        let tampolGif = [
            'https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif',
            'https://i.pinimg.com/originals/f8/5f/4c/f85f4c557e5a03d2a7a2e903b66e0047.gif',
            'https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif',
            'https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif',
            'http://cdn.lowgif.com/full/a58d2aa5d2cb3809-.gif',
            'https://thumbs.gfycat.com/CompetentIncredibleInganue-size_restricted.gif',
            'https://i.kym-cdn.com/photos/images/original/001/225/332/e83.gif',
        ];
        let random = Math.floor(Math.random() * tampolGif.length);

        let user = message.mentions.members.first();

        let tampoler = message.author

        if(!user){
            message.channel.send('Ketik siapa yang mau kamu tampol!')
        }else{
            message.channel.send(
                new MessageEmbed()
                .setDescription(` ${tampoler} baru saja menampol ${user}!`)
                .setImage(tampolGif[random])
                .setColor('RANDOM')
            )
        }
    }
}