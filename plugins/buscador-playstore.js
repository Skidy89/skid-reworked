import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[β] πΈπ½πΆππ΄π΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π»π° π°πΏπΊ πππ΄ πππΈπ΄ππ° π±πππ²π°π*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let mystic = await translate(`${gPlay.descripcion}`, { to: 'es', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`π Resultado: ${gPlay.titulo}
π§¬ Identificador: ${gPlay.id}
βοΈ Link: ${gPlay.link}
πΌοΈ Imagen: ${gPlay.imagen}
βοΈ Desarrollador: ${gPlay.desarrollador}
π Descripcion: ${mystic.text}
π² Moneda: ${gPlay.moneda}
π­ Gratis?: ${gPlay.gratis}
πΈ Precio: ${gPlay.precio}
π Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['downloader']
handler.command = /^(playstore)$/i
export default handler
