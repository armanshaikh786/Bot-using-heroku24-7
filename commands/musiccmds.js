const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Music")
    .addField("join", "a!join")
.setFooter("Made With  MR.~ARMAN§#1033")
message.channel.send(embed);
}

module.exports.help = {
  name: "musiccmds"
}