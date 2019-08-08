const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Invite me!")
    .setAuthor("Alfa", bot.user.displayAvatarURL)
    .addField("Link", "https://discordapp.com/api/oauth2/authorize?client_id=585408769534722048&permissions=8&scope=bot")
  .setFooter("Thanks for inviting me :)")
    message.channel.send(embed);
  
}
module.exports.help = {
    name: "invite"
}