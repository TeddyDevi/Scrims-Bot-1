const token = "NjAxNzk0Nzc2NjUxNjYxMzI3.XU1ZxA.H6hTyDiHZUuYYc017X8FmjzPO6k"
const Discord = require('discord.js');
const Client = new Discord.Client();
const OwnerID = "130515926117253122";
const prefix = "!"

Client.on("ready", () => {
	console.log("MPL | Scrims, Is Online Now.");
	Client.user.setPresence({ game: { name: `MPL Customs.`, type: 0} });
});


Client.on("message", async (message) => {


let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);




// Code Annc
   if (command === "game"){
    await message.delete(1)
    if (message.member.hasPermission("MANAGE_MESSSAGES")) {
       const text = args[0];
       const text2 = args.slice(1).join(" ");
       if (text.length < 1) return message.channel.send("```ERROR, you need to add < Custom Code > / < GameMode >```");
       const embed = new Discord.RichEmbed()
		   .setColor("#fa0505")
       .setTitle("**MPL | Open Key.**")
       .setThumbnail("https://images-ext-1.discordapp.net/external/4TWJTMtpDeUoXyRz_VwgvSm2dwEJs0QIKcgwpUx9EH8/https/media.discordapp.net/attachments/585192273361502263/585203580718415927/300px-Non-moving_storm_circle_example.png")
       .setURL("https://images-ext-1.discordapp.net/external/4TWJTMtpDeUoXyRz_VwgvSm2dwEJs0QIKcgwpUx9EH8/https/media.discordapp.net/attachments/585192273361502263/585203580718415927/300px-Non-moving_storm_circle_example.png")
       .addField('**CUSTOM KEY :**', text, true)
       .addField("**Gamemode :**",  text2, true)
       .addField(
         "**RULES:**",
        "**YOU MAY** fight if contested off spawn at your drop‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎ ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎ ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎ ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎ **DO NOT** fight or shoot at all until 3rd zone has fully closed‏‏‎  ‏‏‎   ‏‏‎   ‏‏‎    ‏‏‎    ‏‏‎    ‏‏‎  ‏‏‎                          ‏‏‎    ‏‏‎    ‏‏‎    ‏‏‎  ‏‏‎                          ‏‏‎    ‏‏‎    ‏‏‎    ‏‏‎  ‏‏‎                          **DO NOT** Stream snipe/use anonymous or streamer mode‏‏‎  ‏‏‎   ‏‏‎   ‏‏‎    ‏‏‎    ‏‏‎    ‏‏‎  ‏‏‎                          ‏‏‎    ‏‏‎    ‏‏‎    ‏‏‎  ‏‏‎                          ‏‏‎    ‏‏‎    ‏‏‎    ‏‏‎  ‏‏‎                          **DO NOT** grief players in any way until 3rd zone has fully closed")
       .addField("**GRIEFING:**", "includes but is not limited to: breaking or shooting structures/vehicles, stealing loot/vehicles or building on top of each other", true)
       .addField(" ‏‏‎ ","---------------------------------------")
       .addField("Click on top right image to view it", "اضغط على الصورة في الاعلى ل تراها")
       .setFooter('React when u get ready | اضغط على الرياكت اذا كنت جاهز')
       message.channel.send(embed).then(embedMessage => {
       embedMessage.react('✅')
       })
       //message.channel.send({embed})
      

       }
   } else 


   
	if (command === "started") {
    await message.delete(1)
    if (message.member.hasPermission("MANAGE_MESSSAGES")){}
	  	const embed = new Discord.RichEmbed()
	  	.setColor("#fa0505")
      .setTitle("MPL | Scrims !")
      .addField(
        "**NOTE:**",
       "Game has been Started")
	  	message.channel.send({embed})
  }

  //(/Note command)
  if (command === "note") {
    await message.delete(1)
    if (message.member.hasPermission("MANAGE_MESSSAGES")){}
	  	const embed = new Discord.RichEmbed()
      const textN = args[0];
	  	.setColor("#ffb800")
      .setTitle("MPL | Scrims !")
      .addField("**Message By HOST**",textN, true);
		message.channel.send({embed})
  }
})

Client.login(token)
