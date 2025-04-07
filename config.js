const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAVINDU-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JpQ2RJQjNla0dkYk0yenNkWTM3R1kweVhvbUVZRWtKRVRwUlVTN3BFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEJVMk1qMzhydndla3JnYjd2SHcrU2FMdzhRblFyR0o0RFVwVFNsT25IVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQVIvM0JLdXhNT2FPbk10UkpOOFhRd1JJdDF3R0VzQTBYWGw5U2d2NVgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZStNc1BIWjdtOExHeGF0SHpPS1lkVjhiSkFVeU10OWRuMXFRTlY1UFE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRERThwaEZ1RzlxTXZNT1FWOGFyWTR1TldPOFNOcm16aWgyVlA0ZUNvRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHNFZQT0ZKR0plczA1aGN5YmJqWjV5TnNkNGR0dVFFMmVoajNrUk5kMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0V6cmVPL3NScnVpaXgxWTJxaEo0ZVYyUml0SjVxamhFanNkWHAyR3puaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2I4R3BvK1E4VFcvM1EweEZaTXp3QVFJODlXV0h3c1UwR25OTHl6TUkwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRxOXN5ajBlMGR2OWVFVzV2U2k1QXRLMUwyMFpGVGhXVjZxUncwTXNPejRIaTdCckhyS1Q5UFdMNnBsTEJRZzNVTm81MTZNQXNobUk1OGM4Q3dFT0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJYVE9tSlR0TGM0RGhaOTcya3RTRUtyWEtKZ3UwR0EzTDAreHVVdC9pbVdNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5aDJ3bkltZVRxcTk1NFJER0R5NlhRIiwicGhvbmVJZCI6IjBiNDdhMDFiLTFlY2YtNDFkMi04MWIzLTBhMDVkNTJiOTRiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhVG1RWVNqeUdWOEVFU3R2R21OVkRyM0ppUUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGp1T1k5ZkJMSEVkdThKYzQzcUc2NkVNeVBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlZOEFCV0hKIiwibWUiOnsiaWQiOiI5NDc2MzA3OTYzNDo3OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmlTMFlNRUVKVDB6YjhHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaGhWcWhic3BGOEl0anU4YmI4dVNLOEhqaUYwL2VlcjIrYW9mNzNuK3F5MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNmtmRmRQYUVhTWVwZmJ4LzJobzVUQzlOTi9wRGwySmJ6dVFXamgzcG1iYWhldUFsaEd4a0FMWTRkeUJHRXpsTW16ZU00Y3RQZXEwVDBaVXd3aXk4Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6InpMd0swbWtrK1M4eERQMGJpVGU3eEl1R2JaZ24xZ2l1QlVybDV6c0ovSmJocVFZYVFqeTdzYWdidVdQRTB5Nk1MNHJlVkdVQ0EwM0IzTXRZNmRWaEFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjMwNzk2MzQ6NzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVlWYW9XN0tSZkNMWTd2RzIvTGtpdkI0NGhkUDNucTl2bXFIKzk1L3FzdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NDAwOTc2MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdHMifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW 𝗥𝗔𝗩𝗜𝗡𝗗𝗨_MD 😎😎*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗥𝗔𝗩𝗜𝗡𝗗𝗨_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕄𝕣   𝕋   𝕠   𝕙   𝕚   𝕕",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94761180276",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗥𝗔𝗩𝗜𝗡𝗗𝗨",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ʀᴀᴠɪɴᴅᴜ_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/d0H07LTd/IMG-20250407-WA0035.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 I'M ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94761180276",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
