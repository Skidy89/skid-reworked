import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
—◉ Tutoríal Boxmineworld HOST◉—

🎥 Tutorial en video: https://youtu.be/eC9TfKICpcY
🌐 Página Oficial: https://boxmineworld.com
💻 Dashboard: https://dash.boxmineworld.com/home
📊 Panel de control: https://panel.boxmineworld.com
💬 Soporte en Discord: https://discord.gg/84qsr4v

—◉ Tutoríal AcídicNodes HOST◉—

🎥 Tutorial en video: https://youtu.be/nbjvreJ0tUk
🌐 Página: https://billing.acidicnodes.ml/register?ref=ADII104p
💬 Soporte en WhatsApp: https://whatsapp.acidicnodes.com

—◉ Comandos para instalar Mystic-termux◉—

cd && termux-setup-storage
apt-get update -y && apt-get upgrade -y
pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
git clone https://github.com/BrunoSobrino/Mystic-termux.git && cd Mystic-termux
yarn install
npm install
npm update
npm install
npm start
` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler
