const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const ytdl = require("ytdl-core");

var servers = {};

client.on('ready', () => {
    console.log(`Conectado como ${client.user.tag}`);

});

client.on('message', message => {
    console.log(message.content);
    if (message.content === 'funcionas?') {
        message.reply('si po rey, y en la ultima versión');
    }

    if (message.content === 'hola') {
        setTimeout(function () {
            message.channel.send(`Wena maricon conchetumare ${message.author}`)
        }, 5000);
    }
});

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'play':

            function play(connection, message) {
                var server = servers[message.guild.id];
                server.dispatcher = connection.play(ytdl(server.queue[0], { filter: "audioonly" }));

                server.queue.shift();

                server.dispatcher.on("end", function () {
                    if (server.queue[0]) {
                        play(connection, message);
                    } else {
                        connection.disconnect();
                    }
                });
            }

            if (!args[1]) {
                message.channel.send("Pon un link .l.");
                return;
            }
            if (!message.member.voice.channel) {
                message.channel.send("NOASDADA");
                return;
            }
            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voice.channel.join().then(function (connection) {
                play(connection, message);
            })

            break;
    }

});



client.login('NzA3Nzc2NzA4NzgyMDYzNjU2.XrNxDQ.FQH6W7TK3Eb0dvWYZ1_V7TQWpIQ');
