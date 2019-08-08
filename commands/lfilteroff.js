module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send(':point_right: Link filter is now **deactivated** on this server, no messages will be filtered which could lead to unwanted advertisements being sent. (beta, may not work as expected) :point_left:')
  process.exit(1)
  
}

module.exports.help = {
  name: "lfilteroff"
}