let fetch = require('node-fetch');
let { MessageEmbed } = require('discord.js');

module.exports = async (client, message, args) => {
  message.delete({ timeout: 3000 });
  if (args[0] === 'cat') {
    let cat = await fetch('http://aws.random.cat/meow')
      .then(res => res.json())
      .then(json => json.file);

    let embed = new MessageEmbed()
      .setImage(cat)
      .setFooter('Powered by \'http://aws.random.cat\'');
    message.channel.send(embed);
  }

  else if (args[0] === 'fox') {
    let fox = await fetch('https://randomfox.ca/floof')
      .then(res => res.json())
      .then(json => json.image);

    let embed = new MessageEmbed()
      .setImage(fox)
      .setFooter('Powered by \'https://randomfox.ca\'');
    message.channel.send(embed);
  }

  else if (args[0] === 'dog') {
    let dog = await fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => json.message);

    let embed = new MessageEmbed()
      .setImage(dog)
      .setFooter('Powered by \'https://dog.ceo/api\'');
    message.channel.send(embed);
  }
  else message.channel.send('Les animaux disponibles : cat, dog, fox !');
};
