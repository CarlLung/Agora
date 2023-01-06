import { Comment as IComment } from '../interface/comment'
import { Comment } from '../models/commentSchema'

export class CommentService {
    constructor() {}

    async getComments() {
        return await Comment.find()
    }

    async createComment({ commentText }: IComment) {
        const result = await new Comment({ commentText }).save()
        if (!result) {
            throw new Error('Error creating reply')
        }
        return 'reply created'
    }
}

