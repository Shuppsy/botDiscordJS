module.exports = (client, message) => {
  message.channel.send('Les membres sont :');
  let mb = client.users.cache.array(),
    mbFinal = mb.slice(1);
  mbFinal.forEach(user => message.channel.send(user.username));
};
