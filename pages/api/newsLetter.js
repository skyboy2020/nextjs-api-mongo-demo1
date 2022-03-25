import { connectDatabase, insertDocument } from '../../helpers/db-util'
async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: '邮箱验证无效' })
      return
    }

    //将邮箱地址保存到数据库
    let client
    try {
      client = await connectDatabase()
    } catch (error) {
      res.status(500).json({ message: '数据库链接失败' })
      return
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail })
      client.close()
    } catch (error) {
      res.status(500).json({ message: '邮箱添加失败' })
      return
    }

    res.status(201).json({ message: '注册成功！' })
  }
}

export default handler
