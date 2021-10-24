const { embed } = require("../util/functions")
const {
  AkairoClient,
  CommandHandler,
  ListenerHandler,
} = require("discord-akairo")

module.exports = class GotoClient extends AkairoClient {
  constructor(config = {}) {
    super(
      { ownerID: "229368840633450497" },
      {
        allowedMentions: {
          parse: ["roles", "users", "everyone"],
          // repliedUser:false,
        },
        partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
        presence: {
          status: "online",
          activities: [
            {
              name: "touche pipi",
              type: "PLAYING",
            },
          ],
        },
        intents: 32767,
      }
    )
    this.commandHandler = new CommandHandler(this, {
      allowMention: true,
      prefix: config.prefix,
      defaultCooldown: 2000,
      directory: "./src/commands/",
    })

    this.listenerHandler = new ListenerHandler(this, {
      directory: "./src/listeners/",
    })

    this.functions = {
      embed: embed,
    }

    this.commandHandler.loadAll()
    this.commandHandler.useListenerHandler(this.listenerHandler)
    this.listenerHandler.loadAll()
  }
}
