import express from 'express'
import morgan from 'morgan'
import path from 'path'

import IndexRoutes from "./routes/index"

const app = express()


app.set('port', process.env.PORT || 3000);


app.use(express.json())

app.use(morgan('dev'))
app.use('/api', IndexRoutes)
app.use('/uploads', express.static(path.resolve('uploads')))


app.get('/', (req, res) => {
    res.send('Servidor Corriendo')
})

export default app