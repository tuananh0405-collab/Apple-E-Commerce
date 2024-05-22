//pakages
import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'

//routes
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


dotenv.config()
const port = process.env.PORT || 5555

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())



app.use('/apple/users', userRoutes)
app.use('/apple/products', productRoutes)
app.use('/apple/categories', categoryRoutes)
app.use('/apple/orders', orderRoutes)

app.listen(port, ()=>{
    console.log('Running on port '+port);
})