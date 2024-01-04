const { MessageEmbed } = require('discord.js');
const https = require('https');
const fs = require('fs');
const moment = require('moment');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;
var roleADMIN = ayarlar.roleADMIN;


module.exports = {
    name: 'proxy',
    description: 'Cập nhật Proxy',
    type: 'CHAT_INPUT',
    cooldown: 10,
    options: [
        {
            name: 'url',
            description: 'Link Proxy',
            type: 'STRING',
            required: false,
        }
    ],

  run: async (client, interaction) => {
    const room = ayarlar.commandproxies
    if (interaction.channel.id !== roleADMIN)
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ dùng được lệnh này trong <#${roleADMIN}>.`)
            .setFooter({ text: "Made by idle" })
            .setTimestamp(),
        ],
      });

    const url = interaction.options.getString("url");
    const urlLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
      if(!url) {
			var exec = require('child_process').exec
        exec(`py methods/Tool/SCANPROXY.py`, (error, stdout, stderr) => {
        });
 		    const file = fs.createWriteStream("proxies.txt")
  		    fs.writeFileSync('proxies.txt', ' ');
  		console.log(`[${moment.utc(Date.now())}] [*] Cập nhật thành công cơ sở dữ liệu proxy.`)
			const embed = new MessageEmbed()
			.setTitle(version)
			.setColor('RANDOM')
			.setDescription(`Proxy được cài đặt trong tập tin: **${file.path}**`)
			.setFooter('Made by idle', img)
      .setTimestamp()
			const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG TẢI DỮ LIỆU PROXY...")
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")
            .setFooter('Made by idle', img)
            .setTimestamp()
          interaction.reply({ embeds: [embed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed] });
              }, 5000)
            })
			return;
	  }
    if (!urlLink.test(url)) {
        interaction.reply("URL không hợp lệ.");
        return;
      } else {
      const file = fs.createWriteStream("proxies.txt")
      fs.writeFileSync('proxies.txt', ' ');
      const request = https.get(url, function(response) {
        response.pipe(file)
        console.log(`[${moment.utc(Date.now())}] [*] Thiếp lập tệp proxy!`)
      });
      const embed = new MessageEmbed()
      .setTitle(version)
      .setColor('RANDOM')
      .setDescription(`Proxy được cài đặt trong tập tin: **${file.path}**`)
      .setFooter('Made by idle', img)
      .setTimestamp()
      interaction.reply({ embeds: [embed] })
      }
  }
}