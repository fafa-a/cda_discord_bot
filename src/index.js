const GotoClient  = require("./structures/GoToClient")

require("dotenv").config()

let client = new GotoClient({
  prefix: "?",
})

client.login(process.env.TOKEN)


