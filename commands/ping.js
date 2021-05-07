module.exports = {
    name: 'ping',
    discription: 'description',
    execute(message, args) {
        
        message.channel.send(`Pong! 🏓 | Bot's ping Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
    },
};


