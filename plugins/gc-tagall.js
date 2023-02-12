let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail("admin", m, conn);
throw false;
}

let message = args.join(" ");
let header = 💬 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 𝐚 𝐭𝐨𝐝𝐨𝐬: ${message};
let text = 💥 𝐈𝐧𝐯𝐨𝐜𝐚𝐜𝐢ó𝐧 𝐇𝐨𝐰𝐥𝐞𝐫 𝐃𝐨𝐰𝐧💥\n\n❏ ${header}\n\n❏ 𝐌𝐞𝐦𝐛𝐫𝐨𝐬:;

for (let mem of participants) {
text += \n➡️ @${mem.id.split("@")[0]};
}

text += \n\n🔥 𝐁𝐲 𝐬𝐤𝐢𝐝 𝐛𝐨𝐭🔥\n\n🔥 ꜱᴍᴀʀᴛ ʙᴏᴛ 🔥;
conn.sendMessage(m.chat, {
text: text,
mentions: participants.map((a) => a.id),
});
};

handler.help = ["tagall <message>", "invocar <message>"];
handler.tags = ["group"];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;