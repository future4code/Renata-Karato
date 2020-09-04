import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole } from "../../src/model/User";

describe ("Testing login endpoint", () => {

    let userDatabase = {};

    let idGenerator = {};

    let hashManager = {};

    let authenticator = {
        generate: jest.fn(() => "token")
    };

    test("Return error when email is empty", async() => {
    
        expect.assertions(2)

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.getUserByEmail("", "oioioi");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Return error when password is empty", async() => {
        
        expect.assertions(2)

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashManager as any,
            authenticator as any
        );

        try {
            await userBusiness.getUserByEmail("rmkarato@gmail.com", "");
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

    test("Return error when user is not found", async() => {
        
        expect.assertions(3)

        let getUserByEmail = jest.fn((email:string) => {
            return undefined
        });

        try {

            userDatabase = { getUserByEmail };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );

            await userBusiness.getUserByEmail("notFound@gmail.com", "oioioi");
        } catch (error) {
            expect(error.errorCode).toBe(404);
            expect(error.message).toEqual("User not found");
            expect(getUserByEmail).toHaveBeenCalledWith("notFound@gmail.com")
        }
    });

    // test("Return error when password is incorrect", async() => {
        
    //     // expect.assertions(4)

    //     let getUserByEmail = jest.fn((email:string) => {
    //         return new User("id", "Renata", "rmkarato@gmail.com", "oioioi", UserRole.ADMIN);
    //     });

    //     let compareHash = jest.fn((password:string, userPassword: string) => false);

    //     try {

    //         userDatabase = { getUserByEmail }
    //         hashManager = { compareHash }

    //         const userBusiness = new UserBusiness(
    //             userDatabase as any,
    //             idGenerator as any,
    //             hashManager as any,
    //             authenticator as any
    //         );

    //         await userBusiness.getUserByEmail("rmkarato@gmail.com", "lalala")

    //     } catch(error) {
    //         expect(error.errorCode).toBe(422);
    //         expect(error.message).toEqual("Invalid password");
    //         expect(getUserByEmail).toHaveBeenCalledWith("rmkarato@gmail.com");
    //         expect(compareHash).toHaveBeenCalledWith("lalala", "oioioi")
    //     }
    // })

    test("Return token when all data is correct", async() => {

        // expect.assertions(3);

        let getUserByEmail = jest.fn((email:string) => {
            return new User("id", "Renata", "rmkarato@gmail.com", "oioioi", UserRole.ADMIN);
        });

        let compareHash = jest.fn((password:string, userPassword: string) => true);

        try {

            userDatabase = { getUserByEmail }
            hashManager = { compareHash }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashManager as any,
                authenticator as any
            );

            await userBusiness.getUserByEmail("rmkarato@gmail.com", "lalala");

            expect(getUserByEmail).toHaveBeenCalledWith("rmkarato@gmail.com");
            expect(compareHash).toHaveBeenCalledWith("lalala", "oioioi");
            expect(authenticator.generate).toHaveReturnedWith("token");

        } catch(error) {
            
        }
    });
});
