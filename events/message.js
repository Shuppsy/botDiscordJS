module.exports = (client, message) => {

  if (message.author.bot) return;
  if (message.content.indexOf(client.PREFIX) !== 0) return;
  let args = message.content.slice(client.PREFIX.length).trim().split(/ +/g),
    command = args.shift().toLowerCase();

  if (client.commands.has(command)) {
    client.commands.get(command)(client, message, args);
  }
  else message.channel.send('la commande n\'existe pas');
};
