let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» @tag π³π΄ π°π»πΆππ½ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄ π³π΄π» πΆπππΏπΎ πΎ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π»π° πΏπ΄πππΎπ½π°*`
if (command == 'gay2') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES π³οΈβπ* *${(500).getRandom()}%* *GAY*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'lesbiana') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES π³οΈβπ* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'pajero') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES ππ¦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'pajera') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES ππ¦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'puto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MΓS INFORMACIΓN A SU PRIVADO π₯π₯΅ XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'puta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MΓS INFORMACIΓN A SU PRIVADO π₯π₯΅ XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'manco') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π©*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'manca') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π©*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'rata') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π COME QUESO π§*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π«¦π, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} π«¦π, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}         
}
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['fun']
handler.command = /^gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto/i
export default handler
