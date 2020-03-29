module.exports = async (client, message) => {
  let settings = await client.getGuild(message.guild);
  let args = message.content.slice(settings.prefix.length).trim().split(/ +/g),
    command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if (message.content.indexOf(settings.prefix) !== 0) return;

  let cmd = client.commands.get(command);
  if (!cmd) return message.channel.send('La commande n\'existe pas !');
  cmd.run(client, message, args, settings);
}
