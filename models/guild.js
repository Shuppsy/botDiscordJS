let mongoose = require('mongoose');
let { DEFAULTSETTINGS: defaults } = require('../config');

let guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: String,
  guildName: String,
  prefix: {
    'type': String,
    'default': defaults.prefix
  },
  welcomeChannel: {
    'type': String,
    'default': defaults.welcomeChannel
  },
  welcomeMessage: {
    'type': String,
    'default': defaults.welcomeMessage
  }
});

module.exports = mongoose.model('Guild', guildSchema);
