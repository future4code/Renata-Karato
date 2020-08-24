import BaseDB from "./BaseDatabase";

export default class UserDatabase extends BaseDB {
  static tableName = "User";

  async createUser(
    id: string,
    email: string,
    password: string,
    role?: string
  ) {
    await this.getConnection()
        .insert({ id, email, password, role })
        .into(UserDatabase.tableName)

    await this.destroyConnection()
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.tableName)
      .where({ email });
    
    await this.destroyConnection()

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.tableName)
      .where({ id });

    await this.destroyConnection()

    return result[0];
  }

  public async deleteUser(id: string) : Promise<any> {
    const result = await this.getConnection()
      .delete()
      .from(UserDatabase.tableName)
      .where({ id })

    await this.destroyConnection()
  }

  public async getAllTables() {
    const result = await this.getConnection().raw(`SHOW TABLES`)
    await this.destroyConnection()
    return result[0]
  }
}
