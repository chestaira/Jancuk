module.exports = {
    name: 'ping',
    desc: 'ya ping',
    execute(message, args){
        message.channel.send('Pong anjing');
    }
}