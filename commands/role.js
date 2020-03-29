exports.run = (client, message, args) => {
  let role = message.guild.roles.cache.find(r => r.name === args[0]),// si plusieurs roles: args[0 , 1, 2, ...]
    channel = client.channels.cache.find(ch => ch.name === "logs");
  if (!role) return message.channel.send('Ce rôle n\'existe pas !');
  if (message.member.roles.cache.find(r => r.name === args[0])) {
    message.member.roles.remove(role); // ou bien faire array si plusieurs rôles (e.g. remove([role, role1, role2 ...]))
    channel.send(`J'ai supprimé le rôle ${role} à ${message.author.username}.`);
    message.delete({ timeout: 2000 });
  } else {
    message.member.roles.add(role);
    channel.send(`J'ai ajouter le rôle ${role} à ${message.author.username}.`);
    message.delete({ timeout: 2000 });
  }
};

exports.help = {
  name: 'role'
};
