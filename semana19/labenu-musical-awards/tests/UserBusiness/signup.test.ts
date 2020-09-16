import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole } from "../../src/model/User";

describe("Testing signup endpoint", () => {

    let userDatabase = {
        createUser: jest.fn((user: User) => {})
    };

    let idGenerator = {
        generate: jest.fn(() => "id")
    };

    let hashManager = {
        hash: jest.fn(() => "hash")
    };

    let authenticator = {
        generate: jest.fn(() => "token")
    };

    test("Return error when name is empty", async() => {

        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.createUser("", "rmkarato@gmail.com", "oioioi", "ADMIN");
        } catch(error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input")
        }
    });

    test("Return error when email is empty", async() => {

        expect.assertions(2)

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.createUser("Renata", "", "oioioi", "ADMIN");
        } catch(error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input")
        }
    })

    test("Return error when password is empty", async() => {

        expect.assertions(2)

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.createUser("Renata", "rmkarato@gmail.com", "", "ADMIN");
        } catch(error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input")
        }
    })

    test("Return error when role is empty", async() => {

        expect.assertions(2)

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.createUser("Renata", "rmkarato@gmail.com", "oioioi", "");
        } catch(error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input")
        }
    })

    test("Return error 'invalid email' for the email without @", async() => {
        expect.assertions(2)

           const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.createUser("Renata", "rmkaratogmail.com", "oioioi", "ADMIN")
        } catch(error) {
            expect(error.errorCode).toBe(422)
            expect(error.message).toEqual("Invalid email")
        }
    })

    test("Return error 'invalid password' for the password less than 6 characters", async() => {
        expect.assertions(2)

        const userBusiness = new UserBusiness(
         userDatabase as any,
         idGenerator as any,
         hashManager as any,
         authenticator as any
        );

        try {
            await userBusiness.createUser("Renata", "rmkarato@gmail.com", "oioi", "ADMIN")
        } catch(error) {
            expect(error.errorCode).toBe(422)
            expect(error.message).toEqual("Invalid password")
        }
    })

    test("Return error'invalid user role'in case of role other than 'ADMIN' or 'NORMAL'", async() => {
        expect.assertions(2)

        const userBusiness = new UserBusiness(
         userDatabase as any,
         idGenerator as any,
         hashManager as any,
         authenticator as any
        );

        try {
            await userBusiness.createUser("Renata", "rmkarato@gmail.com", "oioioi", "SUPERADMIN")
        } catch(error) {
            expect(error.errorCode).toBe(422)
            expect(error.message).toEqual("Invalid user role")
        }
    })

    test("Return access token after crete a user", async() => {
        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
           );

        try {
            await userBusiness.createUser("Renata", "rmkarato@gmail.com", "oioioi", "ADMIN")

            expect(hashManager.hash).toBeCalled();
            expect(userDatabase.createUser).toBeCalledWith(
                new User("id", "Renata", "rmkarato@gmail.com", "hash", stringToUserRole("ADMIN"))
            );
            expect(authenticator.generate).toHaveReturnedWith("token")
            
        } catch(error) {

        }
    })
});