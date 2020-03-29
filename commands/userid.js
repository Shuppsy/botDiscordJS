module.exports = (client, message, args) => {
  let userId = client.users.cache.find(user => user.username === `${args[0]}`);
  message.channel.send(`L'id de l'utilisateur ${args[0]} est : ${userId.id} avec le tag : ${userId.tag}.`);
};
