module.exports.run = async (bot, message, args) => {
  
  // !restart
  message.react('🍎');
	message.react('🍊');
	message.react('🍇');  
}

module.exports.help = {
  name: "fruits"
}