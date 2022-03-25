import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../helpers/db-util'
async function handler(req, res) {
  const eventId = req.query.eventId
  let client

  try {
    client = await connectDatabase()
  } catch (error) {
    res.status(500).json({ message: '数据库链接失败' })
    return
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: '输入无效' })
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    }
    let result
    try {
      result = await insertDocument(client, 'comments', newComment)
      res.status(201).json({ message: '添加评论成功', comment: newComment })
    } catch (error) {
      res.status(500).json({ message: '评论添加失败' })
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 })
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ message: '评论数据获取失败' })
    }
  }
  client.close()
}

export default handler
