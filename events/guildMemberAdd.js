module.exports = (client, member) => {
  member.send('Bienvenue à toi !');
  let channel = client.channels.cache.find(ch => ch.name === "vouzeteici");
  channel.send(`${member} a rejoint le server !`);
};
