const db = require('../database');
const moment = require('moment');
const { Collection } = require('discord.js');

module.exports = async (client, message) => {

    console.log(`Đã kích hoạt bot, Lệnh đã tải thành công!`);
    console.log(`Đã kết nối với bot : ${client.user.username}!`);
    console.log(`KET NOI VOI MAY CHI CHINH`.black);
    console.log(`KET NOI  THANH CONG | START METHODS`.black);
                                                                                                            

    const serverData = await db.get(message.guildId) || { prefix: '.' };
    const prefix = serverData.prefix;
    let statusArray = [`/help`, `${prefix}help`, `vanhaodev`, `https://discord.gg/YwHx2sz8Eq`];
    setInterval(function () {
      let status = statusArray[Math.floor(Math.random() * statusArray.length)];
      client.user.setPresence({
        status: "idle",
        activities: [
          {
            name: status,
            type: "PLAYING",
          },
        ],
      });
    }, 3000);
};