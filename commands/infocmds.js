const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Info")
    .addField("storage", "a!storage")
    .addField("avatar", "a!avatar")
    .addField("user info", "a!userinfo <user>")
    .addField("server info", "a!serverinfo")
    .addField("uptime", "a!uptime")
    .addField("creator", "a!creator")
.setFooter("Made With  MR.~ARMAN§#1033")
message.channel.send(embed);
}

module.exports.help = {
  name: "infocmds"
}