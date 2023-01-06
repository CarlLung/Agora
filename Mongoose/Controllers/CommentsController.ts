import { BaseController } from '../base-controller'
import { CommentService } from '../Services/CommentsService'
import { HttpException } from '../base-controller'

export class CommentController extends BaseController {
    constructor(public commentsService: CommentService) {
        super()
    }

    getComments = this.handleRequest(async (req, res) => {
        return await this.commentsService.getComments()
    })

    createComment = this.handleRequest(async (req, res) => {
        const { commentText } = req.body

        if (!commentText) {
            throw new HttpException(400, 'Reply info are required')
        }

        return await this.commentsService.createComment({ commentText })
    })
}
