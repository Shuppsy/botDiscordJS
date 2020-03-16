let { Client } = require('discord.js'),
  { TOKEN, PREFIX } = require('./config'),
  client = new Client({ disableEveryone: true });

client.on('ready', () => {
  console.log('je suis prêt !');
});

client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(/ +/g),
    cmd = args.shift().toLowerCase();

  if (cmd === `${PREFIX}ping`) msg.channel.send('Pong !');
  if (cmd === `${PREFIX}pong`) msg.channel.send('Ping !');
  if (cmd === `${PREFIX}lol`) msg.channel.send('b?lol !');
});

client.login(TOKEN);
