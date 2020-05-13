const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_ID)

bot.start(ctx => {
  ctx.reply("Hello, I'm the pokebot bot.")
})

bot.launch()
