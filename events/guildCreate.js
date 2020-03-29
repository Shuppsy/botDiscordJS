module.exports = async (client, guild) => {
  let newGuild = {
    guildId: guild.id,
    guildName: guild.name
  };

  await client.createGuild(newGuild);
};
