let handler = async (m, { command, text }) => m.reply(`
*βοΈ πππππππππ βοΈ*
  
*πΏππ΄πΆππ½ππ°:* ${text}
*ππ΄ππΏππ΄πππ°:* ${['Si','Tal vez sΓ­','Posiblemente','Probablemente no','No','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['fun']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
