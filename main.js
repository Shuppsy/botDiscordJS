let { Client } = require('discord.js'),
  { TOKEN, PREFIX } = require('./config'),
  client = new Client({ disableEveryone: true });



client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(/ +/g),
    cmd = args.shift().toLowerCase();

  if (cmd === `${PREFIX}ping`) msg.channel.send('Pong !');
  if (cmd === `${PREFIX}pong`) msg.channel.send('Ping !');
  if (cmd === `${PREFIX}lol`) msg.channel.send('b?lol !');
  if (cmd === `${PREFIX}repeat`) {
    msg.channel.send(args.join(' '));
    msg.delete({ timeout: 3000 }).then(console.log('Message supprimé !')).catch(console.error);
  }
  if (cmd === `${PREFIX}role`) {
    let role = msg.guild.roles.cache.find(r => r.name === args[0]),// si plusieurs roles: args[0 , 1, 2, ...]
      channel = client.channels.cache.find(ch => ch.name === "logs");
    if (!role) return msg.channel.send('Ce rôle n\'existe pas !');
    if (msg.member.roles.cache.find(r => r.name === args[0])) {
      msg.member.roles.remove(role); // ou bien faire array si plusieurs rôles (e.g. remove([role, role1, role2 ...]))
      channel.send(`J'ai supprimé le rôle ${role} à ${msg.author.username}`);
      msg.delete({ timeout: 2000 });
    } else {
      msg.member.roles.add(role);
      channel.send(`J'ai ajouter le rôle ${role} à ${msg.author.username}`);
      msg.delete({ timeout: 2000 });
    }
  }
});


client.on('guildMemberAdd', member => {
  member.send('Bienvenue à toi !');
  let channel = client.channels.cache.find(ch => ch.name === "vouzeteici");
  channel.send(`${member} a rejoint le server !`);
});

client.login(TOKEN);

client.on('ready', () => console.log('je suis prêt !'));
client.on('error', console.error);
client.on('warn', console.warn);

