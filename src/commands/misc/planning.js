const { Command } = require("discord-akairo")
const { embed } = require("../../util/getPlanningEmbed")

class PlanningCommand extends Command {
  constructor() {
    super("planning", {
      aliases: ["planning"],
    })
  }

  exec(message) {
    return message.channel.send({
      embeds: [embed],
    })
  }
}

module.exports = PlanningCommand
