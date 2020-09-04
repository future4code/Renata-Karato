import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

  protected TABLE_NAME :string = "LAMA_Users";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(
    user: User
  ): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.TABLE_NAME} (id, name, email, password, role)
        VALUES (
          '${user.getId()}', 
          '${user.getName()}', 
          '${user.getEmail()}',
          '${user.getPassword()}', 
          '${user.getRole()}'
        )`);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.TABLE_NAME} WHERE email = '${email}'
      `);
    return this.toModel(result[0][0]);
  }
}
