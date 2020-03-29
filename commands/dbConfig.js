exports.run = async (client, message, args, settings) => {
  message.delete();
  if (!message.member.hasPermission('ADMINISTRTOR')) return undefined;
  let getSettings = args[0],
    newSettings = args.slice(1).join(' ');

  switch (getSettings) {
    case 'prefix': {
      if (newSettings) {
        await client.updateGuild(message.guild, { prefix: newSettings });
        return message.channel.send(`Prefix mis à jour : \`${settings.prefix}\` -> \`${newSettings}\``);
      }
      message.channel.send(`Prefix actuel : \`${settings.prefix}\``);
      break;
    }
    case 'welcomeChannel': {
      if (newSettings) {
        await client.updateGuild(message.guild, { welcomeChannel: newSettings });
        return message.channel.send(`Salon d'accueil mis à jour : \`${settings.welcomeChannel}\` -> \`${newSettings}\``);
      }
      message.channel.send(`Salon d'accueil : \`${settings.prefix}\``);
      break;
    }
  }
};

exports.help = {
  name: 'dbconfig'
};
