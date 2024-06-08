import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({ 
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    phoneNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;