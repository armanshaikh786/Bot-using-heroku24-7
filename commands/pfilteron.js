module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send(':point_right: Profanity filter is now **activated** on this server, all messages will be checked to make sure nobody is swearing too heavily! (beta, may not work as expected) :point_left:')
  process.exit(1)
  
}
   

module.exports.help = {
  name: "pfilteron"
}
  