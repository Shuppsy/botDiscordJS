let { Client } = require('discord.js'),
  { TOKEN, PREFIX } = require('./config'),
  userMsg = 'ping',
  finalmsg = userMsg.toLowerCase(),
  client = new Client({ disableEveryone: true });

client.on('ready', () => {
  console.log('je suis prêt !');
});

client.on('message', msg => {
  //bk
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.reply('Pong!');
  if (msg.content.startsWith(`${PREFIX}pong`)) msg.reply('Ping!');

});

client.login(TOKEN);
