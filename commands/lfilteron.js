module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send(':point_right: Link filter is now **activated** on this server, all messages will be checked to make sure nobody is sending dangerous/unwanted links! (beta, may not work as expected) :point_left:')
  process.exit(1)
  
}
   

module.exports.help = {
  name: "lfilteron"
}