module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send('**Channels being created...**')
  process.exit(1)
  
}

module.exports.help = {
  name: "restore"
}