import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id:req.body.userId });
    if (!userData) {
        return res.json({ success: false, message: "User not found" });
      }

    let cartData = await userData.cartData 
   
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "can not added in cart" });
  }
};

//remove items from user cart

const removeFromCart = async (req, res) => {
try{
    let userData=await userModel.findById(req.body.userId)
    let cartData =await userData.cartData
    if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId]-=1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({success:true,message:"remove from cart"})

}catch(err){
    console.log(err)
    res.json({success:false,message:"error"})

}

};

//fetch user cart data

const getCart = async (req, res) => {
    try{
        let userData =await userModel.findById(req.body.userId)
        let cartData =await userData.cartData
        res.json({success:true,cartData})
        
    }
    catch(err){
      console.log(err)
      res.json({success:false,message:"error"})
    }
};

export { addToCart, removeFromCart, getCart };
