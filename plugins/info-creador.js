let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
๐จโ๐ป ยกSomos los creadores del Skid reworked! ยฟQuieres hablar con nosotros? ยกContรกctanos a travรฉs de WhatsApp aquรญ: 
wa.me/+5218442114446!

๐ป ยกproyecto open source!

๐ ยกCrรฉditos especiales para Bruno Sobrino, Lolibot, Gatabot, Nyancatbot y Ghost! Juntos, hacen magia ๐ฎ.

๐ github de la base
https://github.com/BrunoSobrino/TheMystic-Bot-MD
๐กbase re trabajada por skid and nosense

`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐พ ๐ผ๐ด๐ฝ๐ ๐พ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '๐ฎ ๐ณ๐พ๐ฝ๐ฐ๐ ๐ฎ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐;;;\nFN:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nORG:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nX-WA-BIZ-DESCRIPTION:[โ] แดแดษดแดแดแดแดแด แด แดsแดแด ษดแดแด แดแดสแด แดแดsแดs ษชแดแดแดสแดแดษดแดแดs.\nX-WA-BIZ-NAME:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino ๐', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
