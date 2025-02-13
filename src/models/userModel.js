import mongoose from "mongoose";
import bcrypt from "bcrypt";


const UserSchema = mongoose.Schema({
    name :{
        type :String,
        required : true
    },

    email :{
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ["user","admin"],
        default : "user"
    },

},{ timestamp : true });


//Hash password before saving

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare Password method

UserSchema.method.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

export default User;