/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': '474a151b5e',
}

// Other
global.owner = ['6285342071844','6285656949975','6281244264656']
global.premium = ['6281244264656']
global.packname = 'JustInLeota©'
global.author = 'Made By'
global.sessionName = 'justinbot'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 30
}
global.thumb = fs.readFileSync('./lib/leota.jpg')
global.visoka = { url: https://telegra.ph/file/8cba13c2e7c82a10551db.png' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
