import express from 'express'
import cors from "cors"
import adminrouter from './routes/admin.routes.js'
import userrouter from './routes/user.routes.js'
import productrouter from './routes/product.routes.js'
import catagoryrouter from './routes/category.routes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/user', userrouter)
app.use('/api/admin', adminrouter)
app.use('/api/product', productrouter)
app.use('/api/category', catagoryrouter)


export { app }

