let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐀𝐜𝐭𝐢𝐯𝐚𝐫𝐬𝐞 𝐚 𝐥𝐚 𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝 𝐝𝐞 𝐡𝐨𝐲: ${pesan}`
let teks = `🌱𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐩𝐥𝐚𝐧𝐭𝐢𝐭𝐚𝐬🌱 \n\n❏ ${oi}\n❏ 👨🏻‍💻💙𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `💜 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐁𝐨𝐭 𝐝𝐞 𝐬𝐮𝐭𝐫𝐚`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
