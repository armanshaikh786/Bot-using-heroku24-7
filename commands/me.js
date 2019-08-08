module.exports.run = async (bot, message, args) => {
  
  // !restart
  await message.channel.send(`${message.author}`)
  process.exit(1)
  
}

module.exports.help = {
  name: "me"
}