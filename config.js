const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348157553029,2348101119500,2349049374785";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347056025320";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_47_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrSFRnQ2xJVlpXUng4Yzk5bTR4RGJBOXFNUm1uMUV4ZWFOZThOaWc5bGdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZbXR6X2FFd1NhbWxsOGNiTUN0WGh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkYmM3N2FjLTQ3YjgtNGVhZi05YTg4LTM0YjkyODE3NDkxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAxNzQsXG4gICAgICAxMixcbiAgICAgIDE4OCxcbiAgICAgIDE3MCxcbiAgICAgIDc1LFxuICAgICAgOTEsXG4gICAgICAyMzQsXG4gICAgICAxMjEsXG4gICAgICAzMyxcbiAgICAgIDEyNyxcbiAgICAgIDI0NCxcbiAgICAgIDQzLFxuICAgICAgMjQ3LFxuICAgICAgMjIzLFxuICAgICAgMTgyLFxuICAgICAgMTE2LFxuICAgICAgMTM1LFxuICAgICAgNzgsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjA0LFxuICAgICAgMTc3LFxuICAgICAgMTAxLFxuICAgICAgNjMsXG4gICAgICA5NyxcbiAgICAgIDI0NyxcbiAgICAgIDE4NixcbiAgICAgIDIxMCxcbiAgICAgIDE4NyxcbiAgICAgIDczLFxuICAgICAgMjQ0LFxuICAgICAgMjUxLFxuICAgICAgMjcsXG4gICAgICAxNTAsXG4gICAgICAxOTEsXG4gICAgICA2NCxcbiAgICAgIDExNixcbiAgICAgIDUxLFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdZNDJDNFRWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU2MDI1MzIwOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFBpMjlJREVLM2puN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybHhDT3dqbWQ1UEV5cnFXTk1MbGtORnU4TXZiSllja0JZdURTQ2xlbHlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVQVHMzYTZMZjVJZjh4RVVEM1I5RGtBaTdwYitZb3NBemRUK3RsWGF4eTRDVGJkekxUN0xjYk03NGsxcVVmdnpvdXJLRkI4QUZWY01YcW1SZnhZZUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFNL0RtdEpVS2cwS1pkUWJEbGNRekF3NmlWL3U1NkNYYTRVZ2l5WFVMZEZmcy9EUXlFRHphcFBzeksrY2w5NVNpL0Rya2FVaVEvWG16YXhER1RGcWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTYwMjUzMjA6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjgyNDE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzVHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2TXU3TU9RWnZibDZNL3RiSENSNi81WlJ2S3NsZE1RM0hRajF0R21SVzk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3ODc3NjQzMixcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI2OTgwNTMwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
