exports.run = (client, message, args) => {
  message.channel.send(args.join(' '));
  message.delete({ timeout: 3000 }).then(console.log('Message supprimé !')).catch(console.error);
};

exports.help = {
  name: 'repeat'
};
