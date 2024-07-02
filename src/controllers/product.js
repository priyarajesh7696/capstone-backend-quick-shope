import ProductModel from '../models/product.js'

const getProduct = async(req,res)=>{
    try {
        let products = await ProductModel.find({},{password:0})
        res.status(200).send({
            message:"data fetch successful",
            products
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error throw"
        })
    }
}
const createProduct = async(req,res)=>{
    
        try { 
            
            //check if the email exists in db
            const checkProduct = await ProductModel.findOne({code:req.body.code},{password:0})
          
            if(!checkProduct)
            {
       
            let newProduct = await ProductModel.create(req.body)
            
            res.status(200).send({
                message:"Product Added Successfully",
                newProduct
            })
       
        }
        else
        {
            //if email is found respond error message
            res.status(400).send({
                message:`Product  ${req.body.code} already exists`
            })
        }    
} catch (error) {
    res.status(500).send({
        message:"Internal Server Error",
        error:error.message
    })
}
}
const getProductById = async(req,res)=>{
        try {
            let product = await ProductModel.findOne({_id:req.params.id},{password:0})
            res.status(200).send({
                message:"data fetch successful",
                 product
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"Internal Server Error"
            })
        }
    }

   
    const deleteProduct = async(req,res)=>{
        try {
            let products = await ProductModel.deleteOne({_id:req.params.id},{password:0})
          
            res.status(200).send({
                message:"product deleted successfully",
                products
            })
        } catch (error) {
            res.status(500).send({
                message:"Internal Server Error throw"
            })
        }
    }
    const updateProduct = async(req,res)=>{
            try {
               
                let {productName,
                    image,
                    code,
                    price,
                    count,
                  brand,
                description}=req.body
               let last_update = Date.now()
                let product = await ProductModel.findByIdAndUpdate({_id:req.params.id},{$set:{productName:productName,
                    image:image,
                    code:code,
                    price:price,
                    count:count,
                  brand:brand,
                description:description,
                last_update:last_update
            }})
                console.log(product)
                if(res.status(200))
                {

                
                res.status(200).send({
                    message:"data updated successfully",
                    product
                })
            }
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    message:"Internal Server Error"
                })
            }
        }
   
export default {
    getProduct,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct

}