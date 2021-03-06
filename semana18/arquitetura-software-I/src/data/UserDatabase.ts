import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id:string,
    email: string,
    name: string,
    password: string,
    role: string
  ) :Promise<void> {
    await this.getConnection()
      .insert({
        id,
        email,
        name,
        password,
        role
      })
      .into(UserDatabase.TABLE_NAME)
  }
  
  public async getUserByEmail(
    email: string
  ) :Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({email})

      return result[0]
  }

  public async getAllUsers() :Promise<any> {
    const users: any = [];

    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)

    for (let user of result) {
      users.push(user)
    }
      
    return users;
  }

  public async deleteUser(
    id: string
  ) :Promise<void> {
    await this.getConnection()
      .where({id})
      .from(UserDatabase.TABLE_NAME)
      .del()
  }
}
