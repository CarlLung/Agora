import { BaseController } from '../base-controller'
import { PostService } from '../Services/PostsService'
import { HttpException } from '../base-controller'

export class PostController extends BaseController {
    constructor(public postsService: PostService) {
        super()
    }

    getPosts = this.handleRequest(async (req, res) => {
        return await this.postsService.getPosts()
    })

    createPost = this.handleRequest(async (req, res) => {
        const { title, postContent, tag } = req.body

        if (!title || !postContent || !tag) {
            throw new HttpException(400, 'Post info are required')
        }

        return await this.postsService.createPost({ title, postContent, tag })
    })

}
