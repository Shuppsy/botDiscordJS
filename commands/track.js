let { MessageEmbed } = require('discord.js');

module.exports = (client, message, args) => {
  let tracked = client.users.cache.find(user => user.username === `${args}`);
  if (tracked) {
    let embed = new MessageEmbed()
      .setTitle(`${args}`)
      .setDescription(`Id : ${tracked.discriminator}`);
    message.channel.send(embed);
  }
  else console.log('not a user');

}
