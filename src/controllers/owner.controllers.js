import {ownerModel} from "../models/owner.models.js"
import { ApiResponse } from "../utils/apiResponse.js"

import { ApiError } from "../utils/apiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const createOwner = asyncHandler(async(req,res)=>{
    const {fullName,email,password} = req.body;
    const currOwners = ownerModel.find();
    if(currOwners.length>0){
        throw new ApiError(401,"You are not authorized");
    }
    const owner = await ownerModel.create({fullName,email,password});
    if(!owner){
        throw new ApiError(400,"Something went wrong!");
    }
    res.send(200).json(new ApiResponse(owner,"created successfully!"));

})


export {createOwner}