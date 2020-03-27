module.exports = (client, message) => {
  let chan = client.channels.cache.array();
  chan.forEach(element => {
    message.channel.send(element.name);
  });
};
