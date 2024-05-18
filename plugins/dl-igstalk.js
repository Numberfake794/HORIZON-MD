import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!args[0])
    throw `✳️ Enter the Instagram Username\n\n`
  m.react("❌")

  let res = await fg.igStalk(args[0])
  let te = `
┌──「 *STALKING* 
▢ *🔖Number:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followersH}
▢ *🫂following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}

▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
-*REDFOX-INC*
└────────────`

  await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
  m.react(done)
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk']

export default handler
