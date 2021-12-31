import mongoose from "mongoose";

export const postSchema = mongoose.Schema({
    
    title: String, 
    message: String, 
    creator: String, 
    tags: [String],
    selectedFile: String, 
    likeCount: {
        type: Number, 
        default: 0
    }, 
    createdAt: { 
        type: Date, 
        default: new Date()
    }, 
}); 

const postMessage = mongoose.model('PostMessage', postSchema); 

export default postMessage;  