const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKEN);
//** لاتعدل على شي تحت ذا **//
bot.on("ready", () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});
client.on('ready', () => {
     client.user.setActivity("!!help | للاستعمال",{type: 'WATCHING'})
  
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
bot.editChannel("523645440265027585", { name : "⚛⌠ " + "Users : " + bot.users.size + " ⌡⚛"});
bot.editChannel("523645471248482324", { name : "❤"});
bot.editChannel("523645471248482324", { name : "❤W"});
bot.editChannel("523645471248482324", { name : "❤We"});
bot.editChannel("523645471248482324", { name : "❤Wel"});
bot.editChannel("523645471248482324", { name : "❤Welc"});
bot.editChannel("523645471248482324", { name : "❤Welco"});
bot.editChannel("523645471248482324", { name : "❤Welcom"});
bot.editChannel("523645471248482324", { name : "❤Welcome"});
bot.editChannel("523645471248482324", { name : "❤Welcome "});
bot.editChannel("523645471248482324", { name : "❤Welcome T"});
bot.editChannel("523645471248482324", { name : "❤Welcome To"});
bot.editChannel("523645471248482324", { name : "❤Welcome To "});
bot.editChannel("523645471248482324", { name : "❤Welcome To ℊ"});
bot.editChannel("523645471248482324", { name : "❤Welcome To ℊℯ"});
bot.editChannel("523645471248482324", { name : "❤Welcome To ℊℯℯ"});
bot.editChannel("523645471248482324", { name : "❤Welcome To ℊℯℯ𝖪"});
bot.editChannel("523645471248482324", { name : "❤Welcome To ℊℯℯ𝖪𝒴"});
bot.editChannel("523645471248482324", { name : "❤Welcome To ℊℯℯ𝖪𝒴❤"});





}, 4000);

}

bot.connect();
