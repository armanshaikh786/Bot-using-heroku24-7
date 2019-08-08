const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Fun")
    .addField("clyde", "a!clyde")
    .addField("love", "a!love <object>")
    .addField("8balll", "a!8ball <statement>")
    .addField("idk", "a!idk")
    .addField("dice", "a!dice")
    .addField("coin", "a!coin")
    .addField("slots", "a!slots")

message.channel.send(embed);
}

module.exports.help = {
  name: "funcmds"
}