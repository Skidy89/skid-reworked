let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `πππππ ππ ππππππππ`,
rows: [
{title: "β¨ | ππ΄π»π²πΎπΌπ΄", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π° π±πΈπ΄π½ππ΄π½πΈπ³π° π΄π½ π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} welcome`},
{title: "π | πΌπΎπ³πΎ πΏππ±π»πΈπ²πΎ", description: "π΄π» π±πΎπ ππ΄ πππ΄π»ππ΄ π³π΄ πππΎ πΏππ±π»πΈπ²πΎ π/πΎ πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} public`},
{title: "π₯΅ | πΌπΎπ³πΎ π·πΎππ½π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ", rowId: `${usedPrefix + command} modohorny`},
{title: "π | π°π½ππΈπ»πΈπ½πΊ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π π³π΄ πΆπππΏπΎπ π³π΄ ππ·π°πππ°πΏπΏ", rowId: `${usedPrefix + command} antilink`},   
{title: "π | π°π½ππΈπ»πΈπ½πΊ πΈ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π πππ΄ πΈπ½πΈπ²πΈπ°π½ π΄π½ π·πππΏπ", rowId: `${usedPrefix + command} antilink2`},    
{title: "π | π³π΄ππ΄π²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π π½πΎππΈπ΅πΈπ²π°π²πΈπΎπ½π΄π π³π΄ π½ππ΄ππ° πΌπΎπ³πΈπ΅πΈπ²π°π²πΈπΎπ½ π΄π½ ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} detect`},      
{title: "β | ππ΄ππππΈπ²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π πΏπ°ππ° ππ°π²π°π πΆπ΄π½ππ΄ π³π΄ πΆπππΏπΎπ", rowId: `${usedPrefix + command} restrict`},    
{title: "βοΈ | π°πππΎππ΄π°π³", description: "πΌπ°ππ²π° π°πππΎπΌπ°ππΈπ²π°πΌπ΄π½ππ΄ π»π°π π²πΎπ½ππ΄πππ°π²πΈπΎπ½π΄π π²πΎπΌπΎ π»π΄πΈπ³πΎ", rowId: `${usedPrefix + command} autoread`},
{title: "π | π°ππ³πΈπΎπ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»πΎπ π²πΎπΌπ°π½π³πΎπ π³π΄ π°ππ³πΈπΎπ ππΈπ½ πΏππ΄π΅πΈπΉπΎ", rowId: `${usedPrefix + command} audios`},
{title: "πΎ | π°πππΎπππΈπ²πΊπ΄π", description: "ππΎπ³π°π π»π°π πΈπΌπ°πΆπ΄π½π΄π, ππΈπ³π΄πΎπ πΎ π΄π½π»π°π²π΄π π΄π½ππΈπ°π³πΎπ ππ΄ π²πΎπ½ππ΄πππ΄π½ π΄π½ πππΈπ²πΊπ΄π", rowId: `${usedPrefix + command} autosticker`},
{title: "π¬ | πΏπ²πΎπ½π»π", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π²πΎπΌπ°π½π³πΎπ ππΈ π΄π ππ½ π²π·π°π πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} pconly`},
{title: "π’ | πΆπ²πΎπ½π»π", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π²πΎπΌπ°π½π³πΎπ ππΈ π΄π ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} gconly`},
{title: "β | π°π½ππΈππΈπ΄ππΎπ½π²π΄", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ ππ΄π ππ½π° ππΎπ»π° ππ΄π", rowId: `${usedPrefix + command} antiviewonce`},
{title: "π΅ | π°π½ππΈπ»π»π°πΌπ°π³π°", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π»π»π°πΌπ°π³π°", rowId: `${usedPrefix + command} anticall`},
{title: "π¬ | π°π½ππΈπΏππΈππ°π³πΎ", description: "π΄π» π±πΎπ π±π»πΎπππ΄π°ππ° π° π»πΎπ ππππ°ππΈπΎπ πππ΄ π»π΄ π·π°π±π»π΄π½ π°π» πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} antiprivado`},
{title: "π€¬ | π°π½ππΈππΎππΈπ²", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ πΌπ°π»π° πΏπ°π»π°π±ππ°", rowId: `${usedPrefix + command} antitoxic`},
{title: "πΈοΈ | π°π½ππΈπππ°π±π°π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ πππ°π±π°π", rowId: `${usedPrefix + command} antitraba`},
{title: "ππ» | π°π½ππΈπ°ππ°π±π΄π", description: "π°π» π΄π½ππΈπ°π πΌπ΄π½ππ°πΉπ΄ ππ½ π½ππΌπ΄ππΎ π°ππ°π±π΄, π΄π» π±πΎπ π»πΎ ππ°π²π°", rowId: `${usedPrefix + command} antiarabes`}, 
{title: "π€ | πΌπΎπ³π΄πΉπ°π³πΈπ±πΎπ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π²πΎπΌπ°π½π³πΎ πΏπ°ππ° πππ± π±πΎππ (#ππ΄ππ±πΎπ / #πΉπ°π³πΈπ±πΎπ)", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "π | πΌπΎπ³πΎπ°π³πΌπΈπ½", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π°π³πΌπΈπ½π π³π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} modoadmin`},    
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `βββββββββββββββ
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *welcome*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *welcome*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *public*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *public*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *modohorny*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *modohorny*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antilink*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antilink*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antilink2*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antilink2*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *detect*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *detect*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *restrict*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *restrict*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *pconly*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *pconly*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *gconly*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *gconly*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *autoread*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *autoread*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *audios*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *audios*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antiviewonce*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antiviewonce*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *autosticker*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *autosticker*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *anticall*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *anticall*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antiprivado*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antiprivado*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antitoxic*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antitoxic*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antitraba*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antitraba*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *antiarabes*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *antiarabes*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *modejadibot*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *modejadibot*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}enable *modoadmin*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}disable *modoadmin*_
βββββββββββββββ`,
title: null,
buttonText: "ππππππππππ ππππ’",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `ποΈ ππππππ: ${type} 
ποΈ ππππππ: ${isEnable ? 'π°π²ππΈππ°π³πΎ' : 'π³π΄ππ°π²ππΈππ°π³πΎ'}
π£ ππππ: ${isAll ? 'π΄πππ΄ π±πΎπ' : isUser ? '' : 'π΄πππ΄ π²π·π°π'}`, wm2, null, [[`${isEnable ? 'βοΈ π³π΄ππ°π²ππΈππ°π βοΈ' : 'βοΈ π°π²ππΈππ°π βοΈ'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
