import express from 'express'
import productController from '../controllers/product.js'
const router = express.Router()

router.get('/',productController.getProduct)
router.get('/:id',productController.getProductById)

router.post('/createproduct',productController.createProduct)
router.put('/updateproduct/:id',productController.updateProduct)

router.delete('/deleteproduct/:id',productController.deleteProduct)

export default router