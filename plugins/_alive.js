import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[💝 Queen Hentai 💝]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..💝 Queen Hentai 💝🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *💝 Queen Hentai 💝*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *Dinuwa Official²⁰²³*
⬡│☂︎           *OWNER:Dinuwa Official²⁰²³*
⬡│☂︎ *wa.me/94740804536*
┏ ┅ ━━━━━━━━━ ┅ ➔
┇ 《 💝 Queen Hentai 💝 》
┣ ┅ ━━━━━━━━━ ┅ ➔
┃  
┃ 
┃ 
┃ ❤️ Install Bot  : https://github.com/dinuwah/QUEEN-HENTAI
┃ 
┃ ❤️ Join PUBLIC group : https://chat.whatsapp.com/IKbvhlnSXFWDnW7ZxSWwLN
  💖 JOIN SUPPORT GROUP : https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S
┃ 
┃ ❤️ RamUsage  : 20.23 GB / 62.14 GB
┃ 
┃ ❤️ Version  : *V1*
┃
┃ ❤️ Time : 13:09:07
┃ 
┃ ❤️ Owner : Dinuwa Official 
┃
┃ ❤️ Powered By  +94740804536
┗ ┅ ━━━━━━━━━ ┅ ➔
💝 Queen Hentai 💝 BOT ❤️
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using *💝 Queen Hentai 💝*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
