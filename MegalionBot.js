var discord = require("discord.js");

var bot = new discord.Client();

bot.login();


function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

bot.on('ready', () => {
  console.log('ready');
});

bot.on("message", message =>
{
let prefix = "!";
 if(!message.content.startsWith(prefix)) return;
 if(message.author.bot) return;

 if(message.content.startsWith(prefix + "Hello")){
   message.channel.sendMessage("Hello");
 }
 if(message.content.startsWith(prefix + "Ping")){
   message.channel.sendMessage("Pong");
 }
 if(message.content.startsWith(prefix + "add")){
   var msg = message.content;
   let num1 = parseInt(msg[5]);
   let num2 = parseInt(msg[7]);
   if(isNaN(num1) == true || isNaN(num2) == true){
     message.channel.sendMessage("!add # #")
   }
   else{
   message.channel.sendMessage(num1 + num2);
 }
 }
 if(message.content.startsWith(prefix + "rand")){
   var msg = message.content;
   var num = msg.replace( /^\D+/g, '');
   if(isNaN(num) == true ){
     message.channel.sendMessage("!rand #");
   }
   else{
     message.channel.sendMessage(randomInt(0,num));
   }
 }


 if(message.content.startsWith(prefix + "Hey")){
   let userAt = message.author;
   message.channel.sendMessage(userAt + " What's up?");
 }

});

<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGQev2EdecQeptbXG6XvaJ1GTlDcwAGkU",
    authDomain: "discord-bot-159419.firebaseapp.com",
    databaseURL: "https://discord-bot-159419.firebaseio.com",
    projectId: "discord-bot-159419",
    storageBucket: "",
    messagingSenderId: "849988388588"
  };
  firebase.initializeApp(config);
</script>
