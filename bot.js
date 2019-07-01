const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${prefix}help`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});


lient.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})



client.on("message", message => {
    var prefix = "S"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('? | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Spider Shop" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});



client.on('message',async message => {
  if(message.content.startsWith(".setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **ليس معي الصلاحيات الكافية**');
  message.channel.send('?| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});



client.on('message', message => { 
let PREFIX = 'S'//// البرفكس بوت
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});



client.on('message', message => {
var prefix = "S";//// البرفكس بوت
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ? **")
              });
                }

    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
                
              }).then(() => {
                  message.reply("**__تم فتح الشات__?**")
              });
    }
       
});



client.on('message', message => {
var prefix = "S";//// البرفكس بوت
if(message.content.startsWith(prefix + 'اسكت')){
    let role = message.guild.roles.find(r => r.name === 'Muted');//.shadow
    if(!role) message.guild.createRole({name: 'Muted'});
     if(user.bot){.shadow
        return message.channel.send(`لايمكنني         ${user} اعطاء ميوت الى هاذا الشخص `);
    }
    if(user.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`${user} اعطاء ميوت الى هاذا الشخص `);
    }
   
    if(!user){//.shadow
        message.channel.send(`ليس هناك شخص لاعطاءه ميوت`);
    }
    message.guild.channels.forEach(f => {
        f.overwritePermissions(role, {
            SEND_MESSAGES: false
        });
        user.addRole(role);//.shadow
       
    });
     message.channel.send(`لقد تم اعطاء ميوت لهذا شخص ${user}`);
}
});


client.on('message', message => {
if(message.content.startsWith(prefix + 'تكلم')){
    let role = message.guild.roles.find(r => r.name === 'Muted');
if(!user.roles.has(role)) {
    return message.channel.send(`هذا الشخص ليس لديه ميوت`);
}//.shadow
    user.removeRole(role).then(message.channel.send(`تم فك لاسكات عن 
${user}`));
    
}
}); //.Body



client.on('message' , message => {
  var prefix = "S";//// البرفكس بوت
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق موديل كودز
 })
  }  
 });



client.on('message', function(msg) {
  var prefix = "S";//// البرفكس بوت
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('BLACK')
      .setAuthor(msg.guild.name, msg.guild.iconURL)
      .addField('?? Server ID:',`${msg.guild.id}`,true)
      .addField('?? Created On',`${msg.guild.createdAt.toLocaleString()}`,true)
      .addField('?? Owned By',`${msg.guild.owner}`,true)
        .addField(`:busts_in_silhouette: Members [${msg.guild.memberCount}]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}** Online`,true)
        .addField(`:speech_balloon: Channels  [${msg.guild.channels.size}]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}** Text | **${msg.guild.channels.filter(m => m.type === 'voice').size}** Voice`,true)
      .addField('?? Others',`**Region:** ${msg.guild.region}\n**Verification Level:** ${msg.guild.verificationLevel}`,true)
      .addField(`:closed_lock_with_key: Roles [${msg.guild.roles.size}]`,`To see a list with all roles use **#roles**`,true)
      msg.channel.send({embed:embed});
    }
  });



client.on('message', message => { 
    var prefix = "S";//// البرفكس بوت
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**??انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done ?  ***').then(msg => {msg.delete(10000)});
    }
    });



client.on('message', message => {
    if (message.content.startsWith("Sbans")) {  // Alpha Codes Ghost
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**__${bans.size}__ مطرود**`))
  .catch(console.error);
}
});



client.on('message', message => {
    if (message.content.startsWith("Savatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
  if (message.content.includes("<@your botid>")) {/// حط اى دى بوت
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }
});



client.on('message', message => {//new msg event
                if(!message.channel.guild) return;
                  if(message.content.startsWith(prefix + 'set Rainbow')) {//to create the rainbow role
                      let role = message.guild.roles.find('name', 'Rainbow bot.')
                    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
                  //start of create role 
                  if(!role){
                    rainbow =  message.guild.createRole({
                   name: "Rainbow bot.",//the role will create name
                   color: "#000000",//the default color
                   permissions:[]//the permissions
                 //end of create role
                })

                }
                message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
                }})

                client.on('ready', () => {//new ready event
                  setInterval(function(){
                      client.guilds.forEach(g => {
                                  var role = g.roles.find('name', 'Rainbow bot.');//rainbow role name
                                  if (role) {
                                      role.edit({color : "RANDOM"});
                                  };
                      });
                  }, 3000);//the rainbow time
                })

client.login(process.env.BOT_TOKEN);