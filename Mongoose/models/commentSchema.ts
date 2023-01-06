import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    
    commentText: {
        type: String,
        required: true,
    },
    
})

const Comment = mongoose.model('comment', commentSchema)

export { Comment }

