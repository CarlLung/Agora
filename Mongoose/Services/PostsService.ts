import { Post as IPost } from '../interface/post'
import { Post } from '../models/postSchema'


export class PostService {
    constructor() {}

    async getPosts() {
        return await Post.find()
    }

    async createPost({ title, postContent, tag }: IPost) {
        const result = await new Post({ title, postContent, tag }).save()
        if (!result) {
            throw new Error('Error creating post')
        }
        return 'post created'
    }

}

