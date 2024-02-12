import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 80

app.use(express.static(path.join(process.cwd(), 'dist')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
