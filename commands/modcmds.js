const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Moderation")
    .addField("ban", "a!ban")
    .addField("kick", "a!kick <user>")
    .addField("clear", "a!clear <txt> <amount>")

message.channel.send(embed);
}

module.exports.help = {
  name: "modcmds"
}