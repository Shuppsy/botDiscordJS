let { Client, Collection } = require('discord.js'),
  { TOKEN, PREFIX } = require('./config'),
  client = new Client({ disableEveryone: true });

client.PREFIX = PREFIX;

client.mongoose = require('./util/mongoose.js');

client.commands = new Collection();
client.commands.set('repeat', require('./commands/repeat.js'));
client.commands.set('role', require('./commands/role.js'));
client.commands.set('servinfo', require('./commands/servinfo.js'));
client.commands.set('member', require('./commands/member.js'));
client.commands.set('chan', require('./commands/chan.js'));
client.commands.set('track', require('./commands/track.js'));
client.commands.set('animal', require('./commands/animals.js'));
client.commands.set('eval', require('./commands/eval.js'));

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', msg => require('./events/message.js')(client, msg));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));

client.mongoose.init();
client.login(TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);

