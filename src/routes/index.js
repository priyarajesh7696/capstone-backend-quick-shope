import express from 'express'
import UserRoutes from './user.js'
import ProductRoutes from './product.js'
import OrderRoutes from './order.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Authentication and Authorization</h1>`)
})

router.use('/user',UserRoutes)
router.use('/product',ProductRoutes)
router.use('/order',OrderRoutes)

export default router