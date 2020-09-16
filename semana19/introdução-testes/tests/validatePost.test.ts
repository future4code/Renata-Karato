import { PostDatabase } from "../src/data/PostDatabase";
import dotenv from 'dotenv';
import { PostController } from "../src/controller/PostController";
import { Post } from "../src/model/Post";

dotenv.config()

describe("Testing validatePosts", () => {
    
    test("Create Post", async () => {
        const post = new Post (
          id: "123",
          photo: "URL",
          description: "Foto",
          createAt: "2020-08-31",
          creator_id: "456",
          type: "Normal"
        );
        
        const postDatabase = new PostDatabase(); 

        await PostController.createPost(post)

        const postFromDb = await postDatabase.getPostById(post.id);
    
        expect(postFromDb).not.toBe(undefined);
        expect(postFromDb).toEqual({
          photo: "URL",
          description: "Foto",
          createdAt: "2020-08-31",
          type: "Normal"
        });
      });
})