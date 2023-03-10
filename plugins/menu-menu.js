import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'Menรบs๐',
  'info': 'Informaciรณn๐จโ๐ป',
  'search': 'Busquedas๐',
  'game': 'Juegos๐น๏ธ',
  'xp': 'Nivel Y Economรญaโ๏ธ',
  'rpg': 'RPGโ',
  'rg': 'Registro๐๏ธ',
  'sticker': 'Sticker๐๏ธ',
  'frases': 'Frases๐ฅ',
   'internet': 'Imรกgenes๐ชด',
  'group': 'Grupo๐ป',
  'maker': 'Maker Y Logos๐',
  'nable': 'Des/Activar opcionesโ๏ธ', 
  'premium': 'Premium๐ชช',
  'nime': 'Animeใ',
  'downloader': 'Descargas๐ฅ',
  'tools': 'Herramientas๐งฐ',
  'fun': 'Diversiรณn๐ญ',
  'database': 'Base de Datos๐๏ธ',
  'nsfw': 'Nsfw๐', 
  'owner': 'Creador๐', 
  'advanced': 'Avanzado๐ฅ๏ธ',
  'audio': 'Efecto de Audios๐', 
}
const defaultMenu = {
  before: `
 โญโโโโโโโโโโโโโโโโโโโโโโโโฎ
โโ ๐ฐ๏ธ *Hora*: %time
โโ ๐ *Fecha*: %date
โโ ๐ *Dรญa*: %week
โฐโโโโโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโโโโโฎ
โโ *_INFO USUARIO_*
โ
โ  ๐ค *Nombre*: %taguser
โ  ๐ณ *Premium*: ${global.prems ? 'โ' : 'โ'}
โฐโโโโโโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโโโโโโฎ
โโ *_INFO BOT_*
โ
โ  ๐ค *Owner*: @528442114446
โ  ๐งฌ *Versiรณn*: 1.0 (unestable versiรณn)
โ  ๐๏ธ *Lib*: Baileys-MD
โ  ๐ *Modo*: ${global.opts['self'] ? 'Privado' : 'Pรบblico'}
โฐโโโโโโโโโโโโโโโโโโโโโโโโฏ
%readmore
โญโโโโโโโโโโโโโโโโโโโโโโโโฎ
โโ *_Caracterรญsticas del Menรบ_*
โ
โ  ๐ณ = *_Premium_*
โ  ๐ช = *_Monedas_*
โฐโโโโโโโโโโโโโโโโโโโโโโโโฏ




`.trimStart(),
  header: '*โโโใ %category ใ*',
  body: '*โโบ* %cmd %islimit %isPremium',
  footer: '*โโโฌฃ*\n',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
     let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'โ๐ชโ' : '')
                .replace(/%isPremium/g, menu.premium ? 'โ๐ชชโ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let buttons = [
                    { buttonId: '!owner', buttonText: { displayText: 'Creador ๐ข' }, type: 1 },
                    { buttonId: '!infobot', buttonText: { displayText: 'Info ๐' }, type: 1 }
                ]
                let buttonMessage = {
                    image: imagen4,
                    caption: text.trim(),
                    mentions: conn.parseMention(text.trim()),
                    footer: `*${greeting}*`,
                    buttons: buttons,
                    headerType: 4,
                    contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 'VIDEO',
                    mediaUrl: 'https://pornhub.com',
                    title: wm,
                    body: 'สส sแดษชแด แดษดแด ษดแด sแดษดsแด',
                    thumbnail: imagen1,
                    sourceUrl: global.linkgc
                    }}
                }
                await conn.sendMessage(m.chat, { react: { text: 'โ๏ธ', key: m.key }})
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })

  } catch (e) {
    conn.reply(m.chat, 'โ Lo sentimos, el menรบ tiene un error.', m)
    throw e
  }
}

handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menรบ'] 
handler.register = true

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = '*_una linda noche_* ๐'; break;
  case 1: hour = '*_una linda noche_* ๐ค'; break;
  case 2: hour = '*_una linda noche_* ๐ฆ'; break;
  case 3: hour = '*_una linda maรฑana_* โจ'; break;
  case 4: hour = '*_una linda maรฑana_* ๐ซ'; break;
  case 5: hour = '*_una linda maรฑana_* ๐'; break;
  case 6: hour = '*_una linda maรฑana_* ๐'; break;
  case 7: hour = '*_una linda maรฑana_* ๐'; break;
  case 8: hour = '*_una linda maรฑana_* ๐ซ'; break;
  case 9: hour = '*_una linda maรฑana_* โจ'; break;
  case 10: hour = '*_un lindo dia_* ๐'; break;
  case 11: hour = '*_un lindo dia_* ๐จ'; break;
  case 12: hour = '*_un lindo dia_* โ'; break;
  case 13: hour = '*_un lindo dia_* ๐ค'; break;
  case 14: hour = '*_una linda tarde_* ๐'; break;
  case 15: hour = '*_una linda tarde_* ๐ฅ'; break;
  case 16: hour = '*_una linda tarde_* ๐น'; break;
  case 17: hour = '*_una linda tarde_* ๐'; break;
  case 18: hour = '*_una linda noche_* ๐'; break;
  case 19: hour = '*_una linda noche_* ๐'; break;
  case 20: hour = '*_una linda noche_* ๐'; break;
  case 21: hour = '*_una linda noche_* ๐'; break;
  case 22: hour = '*_una linda noche_* ๐'; break;
  case 23: hour = '*_una linda noche_* ๐'; break;
}
  var greeting = "Espero que tengas " + hour;