import express from 'express'
import UserOrder from '../controllers/order.js'
const router = express.Router()


router.post('/userorder',UserOrder.createOrder)
router.post('/success',UserOrder.Success)
router.post('/getsalereport',UserOrder.getReport)




export default router