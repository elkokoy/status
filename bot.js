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
bot.editChannel("526757444882399235", { name : "❤| " + "Users : " + bot.users.size + " |❤"});
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

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '523645471248482324').setName("W");
client.channels.find('id', '523645471248482324').setName("We");
client.channels.find('id', '523645471248482324').setName("Wel");
client.channels.find('id', '523645471248482324').setName("Welc");
client.channels.find('id', '523645471248482324').setName("Welco");
client.channels.find('id', '523645471248482324').setName("Welcom");
client.channels.find('id', '523645471248482324').setName("Welcome");
client.channels.find('id', '523645471248482324').setName("Welcome T");
client.channels.find('id', '523645471248482324').setName("Welcome To");
client.channels.find('id', '523645471248482324').setName("Welcome To ");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕ");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕo");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕov");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova ");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova g");  
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova ga");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova gam");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova gamer");
client.channels.find('id', '523645471248482324').setName("Welcome To ℕova gamers");
  
  
  }, 3000);
});

bot.connect();
