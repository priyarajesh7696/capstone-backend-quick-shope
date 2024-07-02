import mongoose from './index.js'


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:{
            validator:validateEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    mobile:{
        type:Number,
        required:[true,"mobile number is required"]
    },
    status:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        default:"user"
    },
    last_login:{
        type:Date,
        default:Date.now()
    },
    cartitem:{
        type:Array,
        
        
    },
    location:{
        type:Object,
    },
      cartCount: {
        type: Number,
        default:0
      },
    order:{
        type:Array,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},
{
    collection:'user',
    versionKey:false
})

const UserModel = mongoose.model('user',userSchema)


export default UserModel