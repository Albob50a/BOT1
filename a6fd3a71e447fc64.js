client.on('ready',async () => {
setInterval(function(){
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
ReBeeL = currentTime.getMinutes(),
ReBeeeL = currentTime.getSeconds(),
Codes = currentTime.getFullYear(),
CodeS = currentTime.getMonth() + 1,
CoDeS = currentTime.getDate()
if (ReBeeL < 10) {
ReBeeL = "0" + ReBeeL;
}
var suffix = "صباحا";
if (hours >= 13) {
suffix = "مساء";
hours = hours - 13;
}
if (hours == 0) {
hours = 13;
}
client.channels.find('id', 'اى دى روم صوتى بتع ساعه').setName(`❃ 『الوقت : ${hours}:${ReBeeL}:${ReBeeeL} ${suffix} 』 `) 
client.channels.find('id', 'اى دى روم صوتى بتع لتاريخ').setName(`❃ 『 ${Codes} / ${CodeS} / ${CoDeS}』`)
}, 1000);
});