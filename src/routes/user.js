import express from 'express'
import UserController from '../controllers/user.js'
const router = express.Router()

router.get('/',UserController.getAllUsers)
router.get('/:id',UserController.getUserById)

router.post('/createuser',UserController.createUser)
router.post('/login',UserController.login)
router.put('/update/:id',UserController.update)
router.put('/deletecartitem/:id',UserController.deleteCartitem)
router.put('/order/:id',UserController.orderProduct)
router.post('/email-send',UserController.emailSend)
router.post('/verify',UserController.verifyCode)

router.post('/reset-password',UserController.resetPassword)

export default router