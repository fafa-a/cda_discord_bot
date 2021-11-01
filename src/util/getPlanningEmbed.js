const data = require("../assets/json/planning2021_2022.json")

const date = new Date()
const today = date.getDate()

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)
const month = capitalize(
  new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(date)
)
const weekDay = capitalize(
  new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(date)
)

const actualMonth = data[month]

let lundi
switch (weekDay) {
  case "Mardi":
    lundi = today - 1
    break
  case "Mercredi":
    lundi = today - 2
    break
  case "Jeudi":
    lundi = today - 3
    break
  case "Vendredi":
    lundi = today - 4
    break
  case "Samedi":
    lundi = today - 5
    break
  case "Dimanche":
    lundi = today - 6
    break
  default:
    lundi = today
}

let embed = {}
const getEmbed = () => {
  // if (weekDay === "Samedi" || weekDay === "Dimanche") {
  //   embed = {
  //     color: 0x0debff,
  //     title: "Week end",
  //     description: `Prends soin des tiens, reposes toi bien.
  //     Sinon fais tes devoirs et ton ménage.
  //     A lundi bisous calins!
  //     😘`,
  //   }
  // } else {
  embed = {
    color: 0xf7f41e,
    title: weekDay + " " + today + " " + month,
    fields: [
      {
        name: "Lundi " + lundi,
        value: actualMonth[lundi - 1].title,
      },
      {
        name: "Mardi " + (lundi + 1) + " " + "matin",
        value: actualMonth[lundi].option.title,
        inline: true,
      },
      {
        name: "Mardi " + (lundi + 1) + " " + " après-midi",
        value: actualMonth[lundi].title,
        inline: true,
      },
      {
        name: "Mercredi " + (lundi + 2),
        value: actualMonth[lundi + 1].title,
      },
      {
        name: "Jeudi " + (lundi + 3),
        value: actualMonth[lundi + 2].title,
      },
      {
        name: "Vendredi " + (lundi + 4) + " " + "matin",
        value: actualMonth[lundi + 3].title,
      },
    ],
  }
  // }
  return embed
}
getEmbed()
module.exports = { embed }
