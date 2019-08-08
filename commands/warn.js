module.exports.run = async (bot, message, args) => {
      
  let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "No reason provided";
var member= message.mentions.members.first();
   message.channel.send(`Action: **warn**\n\nUser: **${member.user}**\n\nBy: **${message.author}**\n\nFor: **${reason}**`)
}

module.exports.help = {
  name: "warn"
}