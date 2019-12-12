const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjU0NDk5NzQ4NTE4Mjk3NjE1.XfJUJg.5WVThmVSVRHg-YGeq7kIiWlZJuY';

bot.on('ready', () => 
{
    console.log('This bot is online!');
})

bot.on('message', msg => 
{
    if(msg.content.startsWith("doggo"))
    {
        var power = msg.content.match(/(\d+)/);
        power = parseInt(power);
        
        if(power <= 0)
        {
            msg.channel.sendMessage("coloca um numero maior fdp!");
        }

        for(var x = 0; x < power; x++)
        {
            msg.channel.sendMessage('', {files:["doggo.jpg"]});
        }
    }
}) 
bot.login(token);
