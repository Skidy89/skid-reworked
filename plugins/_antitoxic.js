const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(message, { isAdmin, isBotAdmin, isOwner }) { if (message.isBaileys && message.fromMe) return true; if (!message.isGroup) return false;

const user = global.db.data.users[message.sender]; const chat = global.db.data.chats[message.chat]; const bot = global.db.data.settings[this.user.jid] || {}; const isToxic = toxicRegex.exec(message.text);

if (isToxic && chat.antiToxic && !isOwner && !isAdmin) { user.warn += 1; if (user.warn < 5) { await message.reply( Ey *@${message.sender.split("@")[0]}*, no se permite decir palabrotas aquí. Este es tu aviso número *${user.warn}/5*, false, { mentions: [message.sender] } ); } }

if (user.warn >= 5) { user.warn = 0; await message.reply( Vaya, *@${message.sender.split("@")[0]}*, parece que has superado el límite de advertencias. Serás bloqueado y eliminado de este grupo, false, { mentions: [message.sender] } ); user.banned = true; await this.groupParticipantsUpdate(message.chat, [message.sender], "remove"); }

return false; }


