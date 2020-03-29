let { MessageEmbed } = require('discord.js');

exports.run = (client, message) => {
  let embed = new MessageEmbed();
  let cmdEmbed = {
    title: 'Commandes utilisables',
    color: [255, 0, 0],
    fields: [
      {
        name: 'Répéter le message :',
        value: '`!`repeat [message]'
      },
      {
        name: 'Informations serveur :',
        value: '`!`sinfo'
      },
      {
        name: 'Id utilisateur :',
        value: '`!`userid [nom utilisateur]'
      }
    ]
  }
  message.channel.send({ embed: cmdEmbed })
};

exports.help = {
  name: 'cmdlist'
};
