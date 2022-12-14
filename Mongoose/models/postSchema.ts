import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    postContent: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    comment: {
        type: Array,
    },
})



const Post = mongoose.model('post', postSchema)


export { Post }
