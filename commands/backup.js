module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send(':thumbsup: **A backup of this server has been made! Just type a!restore to create the backed up channels.** :thumbsup:')
  process.exit(1)
  
}

module.exports.help = {
  name: "backup"
}