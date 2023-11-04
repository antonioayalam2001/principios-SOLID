import { PostService } from './05-dependency-b';
import { JsonDataBase, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {
    const localDataBaseService = new LocalDataBaseService();
    const jsonService = new JsonDataBase();
    const postService = new PostService(jsonService);

    const posts = await postService.getPosts();

    console.log({ posts })


})();