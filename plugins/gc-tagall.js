let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail("admin", m, conn);
throw false;
}

let message = args.join(" ");
let header = π¬ πππ§π¬ππ£π π π­π¨ππ¨π¬: ${message};
let text = π₯ ππ§π―π¨ππππ’Γ³π§ ππ¨π°π₯ππ« ππ¨π°π§π₯\n\nβ ${header}\n\nβ πππ¦ππ«π¨π¬:;

for (let mem of participants) {
text += \nβ‘οΈ @${mem.id.split("@")[0]};
}

text += \n\nπ₯ ππ² π¬π€π’π ππ¨π­π₯\n\nπ₯ κ±α΄α΄Κα΄ Κα΄α΄ π₯;
conn.sendMessage(m.chat, {
text: text,
mentions: participants.map((a) => a.id),
});
};

handler.help = ["tagall <message>", "invocar <message>"];
handler.tags = ["group"];
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i;
handler.admin = true;
handler.group = true;
export default handler;