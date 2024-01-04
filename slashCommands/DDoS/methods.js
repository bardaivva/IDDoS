const { MessageEmbed } = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var img = ayarlar.img;
var roleID = ayarlar.roleID;

module.exports = {
    name: 'methods',
    description: 'HDSD',
    type: 'CHAT_INPUT',
    cooldown: 10,

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này.`)
            .setFooter('Made by idle', img)
            .setTimestamp(),
        ],
      });

        var exec = require('child_process').exec
                exec(`HI`, (error, stdout, stderr) => {
            });
            console.log('Dừng lại tất cả cuộc tấn công:' +  interaction.guild.id)
            const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(version)
                .setDescription("```css\n[ METHODS LIST: CF BROWSER, CF FLOODER, CF GLACIER, CF TLS, DESTROY ALL, HTTPS STORM, HTTPS BYPASS, HTTPS STRONG, TLS NORMAL, TLS BYPASS, TLS STRONG  ]\n\```")
                .setFooter('Made by idle', img)
                .setTimestamp()
            interaction.reply({ embeds: [embed] });
        }       
}