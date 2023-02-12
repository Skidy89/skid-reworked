//creado por skid 
//uwu
let handler = async (m, { conn,usedPrefix, text }) => {
// esta madre obtiene todos los participantes del grupo
let participants = await conn.groupParticipants(m.chat)
// Elimina el bot de la lista de participantes
let filteredParticipants = participants.filter(p => p !== conn.myJID)
// no ya me aburri de hacer esto
let selectedParticipant = filteredParticipants[Math.floor(Math.random() * filteredParticipants.length)]
// wachi wachi wa tun tun
conn.groupParticipantsUpdate(m.chat, [selectedParticipant], 'promote')
conn.reply(m.chat, `Felicidades! 🎉\nEl usuario con el número ${selectedParticipant.split('@')[0]} acaba de ser promovido a admin!`, m)
}
handler.help = ['ruleta'].map(v => 'ruleta ' + v)
handler.tags = ['group']
handler.command = /^(ruleta)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler

// ayuda quede pendejo 