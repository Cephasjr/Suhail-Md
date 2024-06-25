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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348101119500,2349049374785,2348157553029,2349162818624
";
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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_56_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMEt6eWswZzV3cDlWT1dYZVNMWU5uM1ExT0JxQzhjQUcvTzRsdCs0d21aVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDU2MDI1MzIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NUQxMjE3Nzk3NDExQUZERkE5RTY2NzY1MTY5OTk3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNDUzNTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDU2MDI1MzIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDI0QUVBRkQzMkYzODI3QkEyMjZGNUEwNEZEMkRFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNDUzNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLVFNZzZpMDhUTmF2X2dxRGxHZUFnUVwiLFxuICBcInBob25lSWRcIjogXCIxZGM2M2UwZC0zM2U3LTQwNTgtYjQ5NC0xODA3ZGZhZmZjODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMjE2LFxuICAgICAgMTEzLFxuICAgICAgNyxcbiAgICAgIDIxNCxcbiAgICAgIDIxMyxcbiAgICAgIDEzMyxcbiAgICAgIDI1LFxuICAgICAgMjQ1LFxuICAgICAgMjQwLFxuICAgICAgMTUxLFxuICAgICAgMTYzLFxuICAgICAgMyxcbiAgICAgIDU5LFxuICAgICAgNTQsXG4gICAgICAxODAsXG4gICAgICAyMzEsXG4gICAgICA3OSxcbiAgICAgIDczLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxOTIsXG4gICAgICA5NCxcbiAgICAgIDI1LFxuICAgICAgMjU1LFxuICAgICAgNDUsXG4gICAgICAxODYsXG4gICAgICAxMTksXG4gICAgICAyMSxcbiAgICAgIDkzLFxuICAgICAgMTQyLFxuICAgICAgMTg2LFxuICAgICAgMTksXG4gICAgICAyOCxcbiAgICAgIDIxOSxcbiAgICAgIDE3NixcbiAgICAgIDEwOCxcbiAgICAgIDEyNSxcbiAgICAgIDgzLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5QSDFQTjFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU2MDI1MzIwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy9pMjlJREVNYkI3TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybHhDT3dqbWQ1UEV5cnFXTk1MbGtORnU4TXZiSllja0JZdURTQ2xlbHlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklqaGFnbFNrQzhJeHcrbytkZDZ6K0pISWdVSmhEOXF5ZHdvenJZVWFxeldNUlBSSTdEUGNFY3k3bVQwdUovdS9qdmtqME0yeTN1YWZsRlJXRWxtS0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkQxV1EwV0F4WWpZdzQydkV1NWJWVnB0SVpFbDRKM1V1eEF0MDJLNjZvdVB2NG9QdWxrY1ZqVHhNWTNGVGRwYXZKZDE1MDdCV2xEY0lEMmxKb2dlY2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTYwMjUzMjA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzQ1MzUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzQ3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1dDBoaDFOWHNoZWpTeDZIMFJ1aFRjb2hzT0F5STFGeERrRjhuQzZtb0J3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3ODc3NjQzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MzQ1MzU4ODg2XCJ9Igp9"  // PUT your SESSION_ID 


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
