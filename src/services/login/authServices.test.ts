import { supabaseClient } from './../../supabase/createClient';
// supabase client imported so you can use it to mock
import { LoginFormScreen } from "../../screens/LoginFormScreen";
import { login, logout, register, refresh, getCurrentUser } from './authServices';

/* Mock supabase to you do not send actual info to supabase:
    # The below mock executes a function that says, "follow this chain, then execute jest.fn()"
    # The path below is the path in createClient.ts ("await supabaseClient.auth.signInWithPassword({")
*/

jest.mock("../../supabaseClient", () => {
    supabaseClient: {
        auth: {
            signInWithPassword: jest.fn()
        }
    }
})

describe('login tests', () => {

    test('email and password are sent to supabase', async () => {
        // I am testing to see if supabase received the data
        
        const userEmail = "travis@email.com";
        const pass = "pass123";

        await login(userEmail, pass);

        expect(supabaseClient.auth.signInWithPassword).toHaveBeenCalledWith({
            email: userEmail,
            password: pass,
        });
    })

    test('login returns data when Supabase login succeeds', async () => {
        // fake login details
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

        // call your login service
        const result = await login(userEmail, pass);

        // login should return the data from Supabase
        expect(result).toEqual(fakeData);
    });

        // toBe() checks if two things are the exact same object in memory.
        // toEqual() checks whether two objects have the same contents.

})