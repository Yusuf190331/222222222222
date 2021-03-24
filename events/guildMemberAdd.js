const { Client } = require("discord.js");
const moment = require("moment")
const settings = require("../settings.json")

/**
 * @param {Client} client
 */
module.exports = async (member) => {
    let channel = member.guild.channels.cache.get(settings.channelSettings.register);
channel.send(`🎉 Sharas'e Hoş geldin! ${member},\n 
 hesabın \`${moment(member.user.createdTimestamp).format("LLL")}\` zamanında açılmış. (${moment(member.user.createdAt).add(5, 'days').fromNow().replace("birkaç saniye önce", " ")}.)\n
 Seninle beraber **${member.guild.memberCount} **kişi olduk!  **V. Confirmed** odalarından birine girerek kayıt işlemini gerçekleştirebilirsin.\n
 Tagımızı (**δ**) alarak bizlere destek olabilirsin!\n
 Sunucu kurallarımız <#${settings.channelSettings.rules}> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.`)};   

 
//////////////////////////////////////
