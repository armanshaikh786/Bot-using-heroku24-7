const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Beta")
    .addField("level", "a!level")
    .addField("link filter on", "a!lfilteron")
    .addField("link filter off", "a!lfilteroff")
    .addField("spam filter on", "a!sfilteron")
    .addField("spam filter off", "a!sfilteroff")
    .addField("profanity filter on", "a!pfilteron")
    .addField("profanity filter off", "a!pfilteroff")
              

message.channel.send(embed);
}

module.exports.help = {
  name: "betacmds"
}