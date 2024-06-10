import mongoose,{Schema} from "mongoose";

const ownerSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});


const Owner = mongoose.model("Owner", ownerSchema);