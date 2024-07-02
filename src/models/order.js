import mongoose from './index.js'

const orderSchema = new mongoose.Schema(
  {
    name:{
      type:String
    },
    email:{
      type:String
    },
    mobile_no:{
      type:Number
    },
   
    orderDate: {
    type:Date,
    
  },
  order_status:{
   type:String,
    default:"confrm"
  },
  product_id:{
    type:String,
  },
  quantity: {
   type:Number,
  },
  price:{
    type:Number,
  },
  shipping_charges:{
    type:String,
  
  },
  total:{
    type:Number,
  },
  shipping_address:{
    type:String,
  },
  delivery_status:{
    type:String,
    default:"pending"
  },
  payment_type:{
    type:String,
    default:"card"
  },
  orderId:{
type:String,
  },
  razorpayPaymentId:{
    type:String,
  },
  razorpayOrderId:{
    type:String,
  },
  razorpaySignature:{
    type:String,
  }

  }



)

const order = mongoose.model('order', orderSchema, 'order')

export default order