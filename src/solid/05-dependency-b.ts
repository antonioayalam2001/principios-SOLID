import { IPostsService } from "./05-dependency-c";

interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {
    #postsService;
    private posts: Post[] = [];

    constructor(postService: IPostsService) {
        this.#postsService = postService;
    }

    async getPosts() {
        this.posts = await this.#postsService.getPosts();
        return this.posts;
    }
}