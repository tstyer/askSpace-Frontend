import { supabaseClient } from './../../supabase/createClient';
// supabase client imported so you can use it to mock
import { login, logout, register, refresh, getCurrentUser } from './authServices';

/* Mock supabase so you do not send actual info to supabase:
    # The below mock executes a function that says, "follow this chain, then execute jest.fn()"
    # The path below is the path in createClient.ts ("await supabaseClient.auth.signInWithPassword({")
*/

jest.mock("../../supabaseClient/createClient", () => ({
    supabaseClient: {
        auth: {
            signInWithPassword: jest.fn()
        }
    }
}));

beforeEach(() => {
    jest.resetAllMocks();
});

describe('login tests', () => {

    test('email and password are sent to supabase', async () => {
    // I am testing to see if supabase received the data

        const userEmail = "travis@email.com";
        const pass = "pass123";

        (supabaseClient.auth.signInWithPassword as jest.Mock).mockResolvedValue({
            data: { user: null, session: null },
            error: null,
        });

        await login(userEmail, pass);

        expect(supabaseClient.auth.signInWithPassword).toHaveBeenCalledWith({
            email: userEmail,
            password: pass,
        });
    })

    test('login returns data when Supabase login succeeds', async () => {
    
        const userEmail = 'travis@email.com';
        const pass = 'pass123';

        // fake data that Supabase would return after successful login
        const fakeData = {
            user: {
                id: '123',
                email: userEmail,
            },
            session: {
                access_token: 'fake-token',
            },
        };

        // tell the mocked Supabase function what to return
        (supabaseClient.auth.signInWithPassword as jest.Mock).mockResolvedValue({
            data: fakeData,
            error: null,
        });

        // call login service
        const result = await login(userEmail, pass);

        // login should return the data from Supabase
        expect(result).toEqual(fakeData);
    });

    test('login throws an error when Supabase login fails', async () => {
        const userEmail = 'travis@email.com';
        const pass = 'wrongpass';

        const fakeError = { message: 'Invalid login credentials' };

        // tell the mocked Supabase function to fail this time
        (supabaseClient.auth.signInWithPassword as jest.Mock).mockResolvedValue({
            data: { user: null, session: null },
            error: fakeError,
        });

        // login should throw, so assert on the rejected promise rather than the return value
        await expect(login(userEmail, pass)).rejects.toEqual(fakeError);
    });

    test('throws error when email string is missing', async () => {
        const userEmail = "";
        const userPass = "test123";

        await expect(login(userEmail, userPass)).rejects.toThrow("Email is required.");

        expect(supabaseClient.auth.signInWithPassword).not.toHaveBeenCalled();
    });

    test('throws error when password string missing', async () => {
        const userEmail = "trav@email.com";
        const userPass = "";

        await expect(login(userEmail, userPass)).rejects.toThrow("Password required.");

        expect(supabaseClient.auth.signInWithPassword).not.toHaveBeenCalled();
    })
     
});


/*          Some Learning 

 # toBe() checks if two things are the exact same object in memory.
 # toEqual() checks whether two objects have the same contents.


*/