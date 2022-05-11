const express = require('express')
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5337638235:AAH3_xz0UAUFXa9--aIgCHvYFavXTzGtEzA')


bot.command('start', msg => {
    bot.telegram.sendMessage(msg.chat.id, '<h1>HTML is working...</h1>', { parse_mode: 'HTML'})
})
  
bot.command('ethereum', ctx => {
    var rate;
    console.log(ctx.from)
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
    .then(response => {
        console.log(response.data)
        rate = response.data.ethereum
        const message = `Hello, today the ethereum price is ${rate.usd}USD`
        bot.telegram.sendMessage(ctx.chat.id, message, {
        })
    })
})
    
bot.launch()