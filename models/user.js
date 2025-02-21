const mongoose=require("mongoose");
const {createHmac, randomBytes}=require('crypto');
const {createjwttoken} =require('../services/TokenCreation')
const UserSchema= mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,

    },
    email:{
        type:String,
        // required:true,
        unique:true
    },
    password:{
        type:String,
        // required:true,
    },
    Salt:{
        type:String,

    }
});

UserSchema.pre('save', function (next) {
  const user=this;
  if(!user.isModified('password')){
    return ;
  }
  const salt=randomBytes(16).toString();
  const hashedpassword= createHmac('sha256',salt).
                        update(user.password).
                        digest("hex");
    user.Salt=salt;
    user.password=hashedpassword;
    next();
}
);

UserSchema.static('matchpassword',async function (email ,password) {
    const user=await this.findOne({email});

    if(!user){
        throw new Error("User Not Found. Check your email or SignUp first.");
    }

    const salt=user.Salt;
    const hasdedcoming=createHmac('sha256', salt)
                        .update(password)
                        .digest('hex');
    if(hasdedcoming!==user.password){
        throw new Error("Incorrect Password or Email!");
    }
    const userdetails = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        id: user._id
    };
    const token=createjwttoken(user);
    return {token,userdetails};
})


const User=new mongoose.model("User", UserSchema);

module.exports=User;