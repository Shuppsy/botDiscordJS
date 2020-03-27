let { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
  let embed = new MessageEmbed()
    .setTitle('Mon serveur :')
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField('Membres :', message.guild.memberCount, true)
    .addField('Admin :', message.guild.owner.user.username, true);

  message.channel.send(embed);
};

