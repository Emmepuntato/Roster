import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express()
app.use(cors())
app.use(express.json())

const users = [{ id: 1, nickname: 'user1', passCode: '1234' }]

app.post('/api/login', (req, res) => {
  console.log('richiesta di login ricevuta')
  const { nickname, passCode } = req.body
  console.log(req.body)
  //console.log({ nickname, passCode })
  const user = users.find(
    (u) => u.nickname === nickname && u.passCode === passCode
  )

  if (!user) {
    return res.status(401).json({ error: 'Credenziali errate' })
  }

  const token = jwt.sign({ sub: user.id }, 'secret', { expiresIn: '1h' })
  if (token) {
    console.log('token generato correttamente')
  } else {
    console.log('errore nella generazione del token')
  }
  res.json({ token })
})

app.listen(3000, () => console.log('Server API su http://localhost:3000'))
