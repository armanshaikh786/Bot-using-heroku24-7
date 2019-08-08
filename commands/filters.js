module.exports.run = async (bot, message, args) => {
   
var member= message.mentions.members.first();
   message.channel.send("__Links:__\n```This feature is currently enabled.``` \n \n__Spam:__\n```This feature is currently disabled.``` \n \n__Profanity:__\n```This feature is currently enabled.```")
  
}

module.exports.help = {
  name: "filters"
}