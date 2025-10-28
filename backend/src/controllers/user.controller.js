import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";



const testUser=asyncHandler(async(req,res)=>{
    const jokes=[
        {
            id:1,
            joke:"hahaha"
        },
        {
            id:2,
            joke:"hululululu"
        },
        {
            id:3,
            joke:"yohohohohoho"
        }
    ]
    res.status(201).json(
        new ApiResponse(200,jokes,"hello from backend"))
})

export {testUser}