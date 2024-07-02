import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
// mongoose.connect('mongodb+srv://rameshpriyait:priya123@cluster0.4scvjhb.mongodb.net/')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

export default mongoose