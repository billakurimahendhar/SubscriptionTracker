import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User name is required'],
        trim:true,
        minlength:[3,'Name must be at least 3 characters'],
        maxlength:[50,'Name must be at most 50 characters'],
    },
    email:{
        type:String,
        required:[true,'Email is required'], 
        unique:true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'Please enter a valid email address'],
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[6,'Password must be at least 6 characters'],
        trim:true,
    }
    
},  { timestamps: true });
const User=mongoose.model('User',userSchema);
export default User;
