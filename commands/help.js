const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Categories")
    .setAuthor("Arman", bot.user.displayAvatarURL)
    .addField("General", "a!gencmds")
    .addField("Moderation", "a!modcmds")
    .addField("Fun", "a!funcmds")
    .addField("Music", "a!musiccmds")
  .setFooter("Made With  MR.~ARMAN§#1033")
    message.channel.send(embed);
  
}
module.exports.help = {
    name: "help"
}