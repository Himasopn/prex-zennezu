const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="himojoit@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/917002015750?text=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%F0%9F%92%8C%3C3";
global.website=process.env.GURL || "https://wa.me/917002015750?text=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%F0%9F%92%8C%3C3" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/04381fb730cc3660f8170.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917002015750";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "Ｙａｅ Ｍｉｋｏ💌" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝗔𝗦⚛️         ╰┈➤₊₉₁₇₀₀₂₀₁₅₇₅₀          𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙢𝙖𝙙𝙚 𝙗𝙮 𝙗𝙤𝙩💌",
  packname: process.env.PACK_NAME || "Ｙａｅ Ｍｉｋｏ💌",
  botname : process.env.BOT_NAME  || "Ｙａｅ Ｍｉｋｏ💌",
  ownername:process.env.OWNER_NAME|| "𝗔𝗦🚩",

  sessionName:process.env.SESSION_ID || "SUHAIL_04_41_02_24_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUZNU0xRd2JKdnlpTnRTWW1jK2pvaGlWc2ZjTDFxSVFCVWJGMXlFV1JsND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjZuUEJWaTloaDJiYXNiZ084UytzaUEwL21lSTNrRnZ4eUIvNHk3SVpkWG89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUUrRlZPRGRPNEluNVAzUmJDSktGSm9jWUxySXZHN3VZNE9DT3JEa3NrRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlpEMTFXekJoRjVBZ2NBbEl5cTlHNGFOS0NIMW0yTnVQVysrZDd2cWMzVGc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUYvNjBxTzRQRmJydHo4MUo1bjlFVFk3MzBTSVIyRjBBZzh1RXN3UFNsWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIno4eXduRWVNT3lYY1RBVTF5c2VZeUV6SGpLQi9pK2R1ZlJLbGpBWXY0bWs9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxT3V4bjQxWkpaRkRyL0EwaVN6U01pSFUxNmIwTTRoLzBPZTJ6RlhHWEhvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR3U1RkFFZ2QyR3FSRmV0WU9DaXdBVWVhTkJmU0xzVXhURmcwbWRxOU9raz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJwMUFFb2tqRXVWU0Z6WlZ0c3JCZXNWM1d5VWxsOG9PL0lyaWQwK1F1dHFtV0lMLzZiY1hMbXJOR1lLNG4wczdxMjZ1MWIxMjlIVUJNSGc4L1UzbEpnZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTYzLFwiYWR2U2VjcmV0S2V5XCI6XCJvTFFxdSs1UE9mZjV4U2xhR1JHdHB4MHhSeHFNYm9LdG05RTJmbEZCMDNFPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzE1ODU2NTUwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkM4RjAyQ0NBM0M1RDA2RTFGRUYxRkNDNTk2NkNDOTA3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDg3NDk3MDF9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjYzNzE1ODU2NTUwQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkVBQjMxRjM2NTU5NUNGRUY0REI5NTQ4QzEyMjY3RjZEXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDg3NDk3MDJ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJXOExBMWpZelEtbXBQWmc5UnBVbk53XCIsXCJwaG9uZUlkXCI6XCIzMmU4ZDQ1NC00NTIwLTQ2MTktOTkyMy1mYWRiZmQ2NGEwMGVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInJTVzl5cFBHN3EvYjRQTktHeEMwcnQyS1VVbz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTVgrK1IwTTNOUXNXRjZRRXFNRVRYRndaL1VvPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPRHgvTFVHRVAvbTVhNEdHQU1nQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiTUwwVWg4VDc5T1gyV1BmUFRwVXJjNGF2NGoxeU83endscWQ2Q1NxN3VVVT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImwxYjNYNSt4TlMyQk1IaGw4UnVEUERMOU9vMHQ0ejVDNHZ1cXI4TTlGOTFVaHRMSHlPZHlNSU9TR2FKbWZxenNBbFJmQjVwVEtLbUdTd2FsanBBZENRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwicytPWk0yODk1WHl5NnJjWGdPSTRYUnVDdjBxTmJpaWh1azNTYW56NnJ6WjRoMEppbmFTTjZmazVpZW01VmtZUXlHcHRONGpmL2NjNGxoVDROKzhwZ2c9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI2MzcxNTg1NjU1MDoxN0BzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCI4ODQ0MjM1MjQ1OTg5MzoxN0BsaWRcIixcIm5hbWVcIjpcIuKHtcm04bSH4bSi4bSc4bSL4bSP8J+OkFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI2MzcxNTg1NjU1MDoxN0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJUQzlGSWZFKy9UbDlsajN6MDZWSzNPR3IrSTljanU4OEphbmVna3F1N2xGXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwODc0OTcwMCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFDK0lcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDK0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5SGgzakNBTUVsa1NHKzJWVGpPV1RTSi91VWxiVjNWejRhZFhrakxOMmJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjM4MDc5NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODc0ODgxOTczOVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "NEZUKO",



};




























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
 
