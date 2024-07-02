import UserModel from '../models/user.js'
import order from '../models/order.js'
import Auth from '../helper/auth.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import otp from '../models/otp.js'
import ProductModel from '../models/product.js'
import Razorpay from 'razorpay'


const createOrder = async (req,res)=>{
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_5hLdLmUevPlu7q",
            key_secret: "79cAivVc2t34uYGFoeM772F3",
        });
        const options = {
            amount: req.body.amount,
            currency: req.body.currency,
            receipt: req.body.receipt,
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
        // console.log(order)
    } catch (error) {
        res.status(500).send(error);
    }
}
const Success = async(req,res)=>{
    try {
      
       
      console.log(req.body.name,req.body.amount)
        let result = await order.create(req.body)
       
        // console.log(result)
         res.status(200).send({

            message:"User order placed successfully",
            result
        })
        // console.log(user)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}
const getReport = async(req,res)=>{
    console.log("hi")
    try {
        console.log("hi")
        let salereport = await order.find({},{password:0})
        res.status(200).send({
            message:"data fetch successful",
            salereport
        })
        console.log(salereport)
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error throw"
        })
    }
}

export default {
   createOrder,
   Success,
   getReport
}