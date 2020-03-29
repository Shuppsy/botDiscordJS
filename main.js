let { Client, Collection } = require('discord.js');
let { TOKEN } = require('./config');
let client = new Client({ disableEveryone: true });
let fs = require('fs');


require('./util/functions')(client);
client.mongoose = require('./util/mongoose.js');
client.commands = new Collection();

fs.readdir('./commands', (err, files) => { //Permet de lire le dossier 'commands'
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return undefined;
    let props = require(`./commands/${file}`),
      cmdName = file.split('.')[0]; // récupère le nom du fichier comme nom de commande (e.g animals.js -> ['animals', 'js'])

    console.log(`Commande ${cmdName} chargée.`);
    client.commands.set(cmdName, props);
  })
});

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', msg => require('./events/message.js')(client, msg));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));

client.mongoose.init();
client.login(TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);

