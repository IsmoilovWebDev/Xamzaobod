
const TeleBot = require('telebot')
require("dotenv").config()
const TOKEN=process.env.TOKEN

const bot = new TeleBot(TOKEN,{polling:true});
bot.on('/start',(msg) =>{
    
   bot.sendMessage(msg.from.id,`<b>Salom👋</b> <i> ${msg.from.first_name}👤</i> '\n' <b>Siz Xamzaobod MFYning rasmiy Telegram botidasiz🤖 '\n' Siz bu botda ozingizga kerakli odamlarni topishingiz mumkun✓ boladi📁</b>
   <b>O'zingizga kerakli shaxslarni topish uchun</b>
   <b><i>/menu</i></b> <b>ni Tanlang</b>
   `,{parseMode:'HTML'})

})

bot.on('/menu', msg=>{
    bot.sendMessage(
        msg.from.id,
        `
        <b> Siz o'zingizga kerakli bolimni tanlang✓📋</b>
       <b><i>/IdoraXodimlari</i></b>     <b><i>/Elektrik</i></b>
       <b><i>/Oqituvchilar</i></b>       <b><i>/Payvandchi</i></b>
       <b><i>/Doktorlar</i></b>          <b><i>/Motoblogchi</i></b>
       <b><i>/Shafyorlar</i></b>         <b><i>/Matapila</i></b>
       <b><i>/YukTashuvchilar</i></b>    <b><i>/Santexnik</i></b>
       <b><i>/Ustalar</i></b>            <b><i>/Kutubxonachi</i></b>
       <b><i>/Moldoktor</i></b>          <b><i>/Imom</i></b>
       <b><i>/Bokovul</i></b>            <b><i>/Otinoyi</i></b>
       <b><i>/Oshpaz</i></b>             <b><i>/Vidyochi</i></b>
       <b><i>/Sartarosh</i></b>          <b><i>/Ajuvoz</i></b>
       <b><i>/Tikuvchi</i></b>           <b><i>/Fermerlar</i></b>
       <b><i>/Dokonchi</i></b>           <b><i>/Toyxizmati</i></b>  
       <b><i>/Asalarichilar</i></b>      <b><i>/Moshinaustasi</i></b>   
        `
    ,{parseMode:'HTML'})
})

bot.on('/MenugaQaytish', msg=>{
    bot.sendMessage(
        msg.from.id,
        `
        <b> Siz o'zingizga kerakli bolimni tanlang✓📋</b>
       <b><i>/IdoraXodimlari</i></b>     <b><i>/Elektrik</i></b>
       <b><i>/Oqituvchilar</i></b>       <b><i>/Payvandchi</i></b>
       <b><i>/Doktorlar</i></b>          <b><i>/Motoblogchi</i></b>
       <b><i>/Shafyorlar</i></b>         <b><i>/Matapila</i></b>
       <b><i>/YukTashuvchilar</i></b>    <b><i>/Santexnik</i></b>
       <b><i>/Ustalar</i></b>            <b><i>/Kutubxonachi</i></b>
       <b><i>/Moldoktor</i></b>          <b><i>/Imom</i></b>
       <b><i>/Bokovul</i></b>            <b><i>/Otinoyi</i></b>
       <b><i>/Oshpaz</i></b>             <b><i>/Vidyochi</i></b>
       <b><i>/Sartarosh</i></b>          <b><i>/Ajuvoz</i></b>
       <b><i>/Tikuvchi</i></b>           <b><i>/Fermerlar</i></b>
       <b><i>/Dokonchi</i></b>           <b><i>/Toyxizmati</i></b>  
       <b><i>/Asalarichilar</i></b>      <b><i>/Moshinaustasi</i></b>   
        `
    ,{parseMode:'HTML'})
})

bot.on('/IdoraXodimlari', msg =>{
    bot.sendMessage(
        msg.from.id,
        `
          <b>🤵‍♂️Xamzaobod MFY Raisi</b>\n<b>👤Yakubov Safar</b>\n<b>🔵Telegram:@yakubov_safar</b>\n<b>📞Telefon Raqam:<i> +998 94 437 36 94</i></b>\n\n<b>🤵‍♂️Yoshlar Yetakchisi</b>\n<b>👤Otabek Abdumannobov</b>\n<b><i>🔵Telegram:@Otabek_Abdumannobov</i></b>\n<b><i>📞Telefon Raqam: +998 93 428 74 57</i></b>\n\n<b>🤵‍♀️Yoshlar Yetakchisi</b>\n<b>👤Umarqulova Musharraf</b>\n<b><i>🔵Telegram:@Otabek_Abdumannobov</i></b>\n<b><i>📞Telefon Raqam: +998 93 428 74 57</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>
        `
        ,{parseMode:'HTML'}
        )
})

bot.on('/Oqituvchilar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🤵‍♂️O'qituvchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>📖Fan</b>:<i>🗒Matematika</i>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Doktorlar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🤵‍♂️O'qituvchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>📖Fan</b>:<i>🗒Matematika</i>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Shafyorlar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🚗Shafyo'r</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🚘Moshina</b>:<i>🚕Matiz</i>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/YukTashuvchilar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🚗Shafyo'r</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🚘Moshina</b>:<i>🚕Matiz</i>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Ustalar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🛠Ustalar</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>
              
              
              
              
              `
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Bokovul', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>⚔️Bokovul</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Bokovul', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>⚔️Bokovul</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Oshpaz', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>👨🏻‍🍳Oshpaz</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Sartarosh', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>💇🏻‍♂️Sartarosh</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Tikuvchi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🪡Tikuvchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Dokonchi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🏢Dokonchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Asalarichilar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🐝Asalarichilar</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Elektrik', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🪛Elektrik</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Payvandchi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🧨Payvandchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Motoblogchi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🚂Motoblogchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Motoblogchi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🚂Motoblogchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   

})

bot.on('/Matapila', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🪃Matapila</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Santexnik', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🔧Santexnik</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})

bot.on('/Kutubxonachi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>👩‍🏫Kutubxonachi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Imom', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>📿Imom</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Otinoyi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🧕Otinoyi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Vidyochi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🎥Vidyochi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Ajuvoz', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🧑🏾‍🔧Ajuvozchi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Fermerlar', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>👨🏾‍🌾Fermerlar</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Toyxizmati', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🍽Toy Xizmati</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.on('/Moshinaustasi', msg =>{
    bot.sendMessage(
         msg.from.id,
              `<b>🛠Moshina Ustasi</b>\n<b>👤Saidislom Ismoilov</b>\n<b>🔵Telegram:@Ismoilv</b>\n<b>📞Telefon Raqam:<i> +998 93 142 42 69</i></b>\n\n<b>Menuga Qaytish Uchun<i> /MenugaQaytish </i>ni bosing</b>`
    ,{parseMode:'HTML'}
    )
   
})
bot.start()