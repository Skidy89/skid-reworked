import fs from 'fs';

async function beforeMessage(message, context) {
const { conn, isAdmin, isBotAdmin, usedPrefix } = context;
if (message.isBaileys && message.fromMe) return true;
if (!message.isGroup) return false;

const chat = global.db.data.chats[message.chat];
const bot = global.db.data.settings[this.user.jid] || {};
const author = await conn.getName(message.sender);
const fakeMessage = {
key: {
participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"
},
message: {
groupInviteMessage: {
groupJid: "51995386439-1616969743@g.us",
inviteCode: "m",
groupName: "P",
caption: 'sᴋɪᴅ ʀᴇᴡᴏʀᴋᴇᴅ ღ',
jpegThumbnail: null
}
}
};

if (chat.antiTraba && message.text.length > 5000) {
if (isAdmin) {
return conn.sendMessage(message.chat, `El administrador @${message.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`,
mentions: [message.sender]
}, { quoted: fakeMessage });
}
await conn.sendButton(message.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ DESACTIVAR ANTI TRABAS ]', usedPrefix+'apagar antitraba'], fakeMessage);

if (isBotAdmin && bot.restrict) {
  conn.sendMessage(message.chat, {
    delete: {
      remoteJid: message.chat,
      fromMe: false,
      id: message.key.id,
      participant: message.key.participant
    }
  });
  setTimeout(() => {
    conn.sendMessage(message.chat, {
      text: `Marcar el chat como leido ✓\n${"\n".repeat(400)}\n=> El número : wa.me/${message.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`,
      mentions: [message.sender]
    }, { quoted: fakeMessage });
  }, 0);
  setTimeout(() => {
    conn.groupParticipantsUpdate(message.chat, [message.sender], 'remove');
  }, 1000);
} else if (!bot.restrict) {
return m.reply('[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!')
    }
    return !0
}