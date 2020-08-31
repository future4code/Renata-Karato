import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "Post";

  public async createPost(
    id: string,
    photo: string,
    description: string,
    createAt: string,
    creator_id: string,
    type?: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        photo,
        description,
        createAt,
        creator_id,
        type,
      })
      .into(PostDatabase.TABLE_NAME);
  }

  public async getPostById(
    postId: string
  ) : Promise<any> {
    const result = await this.getConnection()
    .select("*")
    .from(PostDatabase.TABLE_NAME)
    .where({ id: postId })

    return result[0]
  }
}