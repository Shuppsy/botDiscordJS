let { MessageEmbed } = require('discord.js');

exports.run = (client, message) => {
  let embed = new MessageEmbed()
    .setColor([73, 101, 255])
    .setTitle(message.guild.name)
    .setThumbnail('https://www.bertrandweb.com/test-email/hippo.png')
    .setDescription('Bienvenue à la maison !')
    .setFooter(`Admin: ${message.author.username}`, message.guild.owner.user.avatarURL());

  message.channel.send(embed);
};

exports.help = {
  name: 'sinfo'
};
