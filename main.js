const Discord = require('Discord.js')
const bot = new Discord.Client()
const colors = require('./colors.json')
const config = require('./config.json')
var fs = require('fs')
const ranks = `Absent
Dismissed
Council
Invisible
DoNotDisturb
Enforcer
Officer
Trial`

var userData = JSON.parse(fs.readFileSync('kor/idor.json', 'utf8'))

function generateHex() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

bot.on('guildMemberAdd', member => {

})


bot.on('message', message => {
/*
Data System
*/

if (!userData[message.author.id]) {
    if (message.author.id === "656896723435782184"){
        return;
    }
    userData[message.author.id] = {
        messagesSent: 0,
        level: 0,
        tag: message.author.tag,
        admin: false,
        epic: false
    }
    console.error(message.author.tag + ' Registered onto database.')

}



userData[message.author.id].messagesSent++;
fs.writeFileSync('kor/idor.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err)
});


    if (message.content === '!userstats'){
    message.channel.send('You have sent **' + userData[message.author.id].messagesSent + '** messages')
    message.channel.send('You are level **' + userData[message.author.id].level + '**')
    }

    // hex generator

    //

    if (message.content === '!epic_check'){
        if ( userData[message.author.id].epic === true ){
            message.channel.send('You are epic!')
        }
        else {
            message.channel.send('You are not epic. ')
        }
    }


    //


    if (message.content === '!hex'){
        var hex = generateHex()
        message.channel.send(hex)
    }

    //

    if (message.content === '!admin_check'){
        if (userData[message.author.id].admin === true){
            message.channel.send('You are admin')
        }
        else{
            message.channel.send('You are not admin...')
        }
    }




    if (message.content === '!refresh_data'){
        userData[message.author.id].tag = message.author.tag;
        message.channel.send('Your data has been refreshed into database. :tada:')
        return;
    }

    if (message.content === "!help"){
        let hemb = new Discord.RichEmbed()
        var final = generateHex()
        hemb.setTitle(" /|Help |/ ")
        hemb.setColor(final)
        hemb.setAuthor('SayKo | Sterkoni')
        hemb.addField("!ranks", "Show you the ranks", true)
        hemb.addField("!owner", "If you don't know the owner if Irusu... OOF", true)
        hemb.addField("!saykoPassword", "do it bro", true)
        hemb.addField('!userstats', 'Show you your level / messages sent!', true)
        hemb.addField('!refresh_data', 'Use it ONLY if you changed your tag.', true)
        hemb.addField('!stats <ID>', 'See the stats of someone.  ~ ARGS: UserID . ~ ', true)
        hemb.addField("!recruit", "Recruit Command. For Council+ Only! ", true)
        message.author.send(hemb)
        message.reply('Check DMs.')
    }



    if (message.content === "!ranks"){
        message.channel.send(ranks)
    }
    if (message.content === "!recruit"){
        message.channel.send("/advert > ﾉ尺ひ丂ひ is now recruiting. 100+ hours | Discord Required | Elite Raid+Base| /PM Tweek")
        message.channel.send("/-/ Just Use This Command If You Are Council+ ! /-/")

    }

    if (message.content === "!owner"){
        message.channel.send('Owner is Tweek')
    }
    if (message.content === "!saykoPassword"){
        message.channel.send('no u')
    }


    if (message.content.toLowerCase().includes('nigga')) {
      message.channel.send('you are a nigga urself.')
    }

    if (userData[message.author.id].messagesSent === 10){
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 1 :tada:')
    }

    if (userData[message.author.id].messagesSent === 25){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 2 :tada:')
    }

    if (userData[message.author.id].messagesSent === 50){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 3 :tada:')
    }

    if (userData[message.author.id].messagesSent === 65){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 4 :tada:')
    }


    if (userData[message.author.id].messagesSent === 87){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 5 :tada:')
    }

    if (userData[message.author.id].messagesSent === 115){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 6 :tada:')
    }

    if (userData[message.author.id].messagesSent === 157){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 7 :tada:')
    }

    if (userData[message.author.id].messagesSent === 189){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 8 :tada:')
    }

    if (userData[message.author.id].messagesSent === 245){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 9 :tada:')
    }

    if (userData[message.author.id].messagesSent === 278){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 10 :tada:')
    }


    if (userData[message.author.id].messagesSent === 325){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 11 :tada:')
    }


    if (userData[message.author.id].messagesSent === 352){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 12 :tada:')
    }


    if (userData[message.author.id].messagesSent === 375){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 13 :tada:')
    }



    if (userData[message.author.id].messagesSent === 397){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 14 :tada:')
    }



    if (userData[message.author.id].messagesSent === 431){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 15 :tada:')
    }



    if (userData[message.author.id].messagesSent === 471){
        if (message.author.bot) return;
        userData[message.author.id].level++;
        message.channel.send('Congratulations! You have reached level 16 :tada:')
    }



    var prefix = "!"
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    console.log(`Args: ${args}\nCommand: ${command}`)




    if (message.content.toLowerCase().startsWith(prefix + 'say')){


      if (!args[0].length === 7){
        message.channel.send('Please put an right hex color.')
        return;
      }


      message.delete()
      let finalarguments = args.join(" ")
      let backup = finalarguments.slice(7)
      let args_1 = new Discord.RichEmbed()



      .setDescription(backup)
      .setColor(args[0])


      message.channel.send(args_1)
    }



    if (message.content.startsWith("!stats")){
        if (args.length === 0) {
            message.channel.send('Please put an ID.')
            return;
        }


        if (!userData[args]) {
            message.channel.send('User is not into database.')
            return;
        }









        else {
            message.channel.send("Messages sent : " + userData[args].messagesSent)
            message.channel.send("Level: " + userData[args].level)
            message.channel.send("Last Tag Known: " + userData[args].tag)

        }
    }


    if (message.content.startsWith('!getepic')){
        if (args.length === 0){
            message.channel.send({embed:{description:"Please put the secret code to be epic 🕶"}})
            return;
        }

        if (args[0] === "Tweek007"){
            message.channel.send({embed:{description:"You deserve to be epic... Call sayko to be epic 😎"}})
            message.delete()
        }



        else if (args[0] === "hint"){
            message.author.send({embed:{description:"Hint: The pass is the username of someone in the org.. 😎 and, three numbers"}})
            message.delete()
        }

        else{
            message.channel.send('Wrong..')
        }

    }



    if (message.content === "!ticket"){
      let botchannel = bot.channels.get('659762711735042058')
      if (!botchannel){
        message.channel.send('Sorry. Channel got deleted or dont exist.')
        return;
      }
      message.guild.createChannel(`${message.author.username}-ticket`, "ticket")

      botchannel.send(`${message.author.tag} Opened a ticket. Go into his respectful channel. Thanks! (${message.author.username}-ticket)`)
    }





})

bot.on('ready', () => {
    console.log(colors)
    console.error(`Bot / ${bot.user.tag} / Is ready to use !`)
    console.error(`ID : ${bot.user.id}`)
})

bot.login(config.token)
