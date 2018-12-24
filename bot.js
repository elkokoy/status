const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKEN);
//** لاتعدل على شي تحت ذا **//
bot.on("ready", () => {
  
onstart();
});

function onstart(){

setInterval(function(){

var currentTime = new Date(),
hours = currentTime.getHours() + 0 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();

if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
bot.editChannel("526756752503341056", { name : "❤| " + "Users : " + bot.users.size + " |❤"});
bot.editChannel("526756752503341056", { name : "❤"});
bot.editChannel("526756752503341056", { name : "❤W"});
bot.editChannel("526756752503341056", { name : "❤We"});
bot.editChannel("526756752503341056", { name : "❤Wel"});
bot.editChannel("526756752503341056", { name : "❤Welc"});
bot.editChannel("526756752503341056", { name : "❤Welco"});
bot.editChannel("526756752503341056", { name : "❤Welcom"});
bot.editChannel("526756752503341056", { name : "❤Welcome"});
bot.editChannel("526756752503341056", { name : "❤Welcome "});
bot.editChannel("526756752503341056", { name : "❤Welcome T"});
bot.editChannel("526756752503341056", { name : "❤Welcome To"});
bot.editChannel("526756752503341056", { name : "❤Welcome To "});
bot.editChannel("526756752503341056", { name : "❤Welcome To ℕ"});
bot.editChannel("526756752503341056", { name : "❤Welcome To ℕo"});
bot.editChannel("526756752503341056", { name : "❤Welcome To ℕov"});
bot.editChannel("526756752503341056", { name : "❤Welcome To ℕova"});
bot.editChannel("526756752503341056", { name : "❤Welcome To ℕova❤"});





}, 4000);

}

bot.connect();
