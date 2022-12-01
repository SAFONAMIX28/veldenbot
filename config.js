require('./miku.js')
const fs = require('fs')
const chalk = require('chalk')


global.owner = ['1(205)3361901','6289502991778','0']
global.packname = '⬣ MADE WITH VELDEN77• Wa : 6289502991778'
global.author = ''
global.sessionName = 'data'
global.prefa = ['','!','.','#']
global.ownername = 'Rival'
global.sp = '>'
global.anticals = true
global.autoblockcmd = false
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Please Wait A Minute.._',
}
global.thumb = fs.readFileSync('./lib/assets/Miku.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
