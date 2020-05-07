const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Conectado como ${client.user.tag}`);

});

client.on('message', message => {
    console.log(message.content);
    if (message.content === 'funcionas?') {
        message.reply('si po rey');
    }

    if (message.content === 'hola') {
        setTimeout(function () {
            message.channel.send(`Wena maricon conchetumare ${message.author}`)
        }, 5000);
    }
});

client.login('NzA3Nzc2NzA4NzgyMDYzNjU2.XrNxDQ.FQH6W7TK3Eb0dvWYZ1_V7TQWpIQ');
