let mongoose = require('mongoose');
let { Guild } = require('../models/index');

module.exports = client => {
  client.getGuild = async guild => {
    let data = await Guild.findOne({ guildId: guild.id });
    if (data) return data;
    return client.config.defaultSettings;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== 'object') data = {};
    for (let key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  client.createGuild = async guild => {
    let merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    let createGuild = await new Guild(merged);
    createGuild.save().then(g => console.log(`New guild -> ${g.guildName} et ID -> ${g.guildId}`));
  };

};
