/* Created By https://github.com/ALBERTO9883 */
import fs from 'fs'
import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄π» πΏπ°πππ΄ππ΄ πππ΄ π³π΄ππ΄π΄ π±πππ²π°π*`
try {
const res2 = await googleImage(text)
let sfoto = res2.getRandom()
let json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`)
let jsons = await json.json()
let { stickers } = jsons.result[0]
let res = jsons.result.map((v, index) => `π β’ Resultado: ${1 + index}\n*π₯ β’ Nombre:* ${v.title}\n*π’ β’ Autor:* ${v.author}\n*π β’ Url:* ${v.url}`).join`\n\nβββ\n\n`
await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m)
} catch {
await m.reply('*[β] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ*')}}
handler.tags = ['search']
handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2']
export default handler
