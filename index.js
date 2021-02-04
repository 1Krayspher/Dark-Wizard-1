const { ShardingManager } = require("discord.js");
const terminal = require("chalk");
const manager = new ShardingManager("./bot.js", {
  totalShards: "1",
  token: require("./config.json").token
});

manager.spawn()