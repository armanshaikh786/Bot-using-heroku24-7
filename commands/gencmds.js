const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("General")
    .addField("ping", "a!ping")
    .addField("restart", "a!restart")
    .addField("support", "a!support")
    .addField("invite", "a!invite")
    .addField("say", "a!say")
.setFooter("Made With  MR.~ARMAN§#1033")
message.channel.send(embed);
}

module.exports.help = {
  name: "gencmds"
} 