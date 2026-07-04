// supabase client imported so you can use it to mock
import { LoginFormScreen } from "../../screens/LoginFormScreen";
import { supabaseClient } from "../../supabase/createClient";
import { login, logout, register, refresh, getCurrentUser } from './authServices';

describe('login tests', () => {
    test('email is sent to supabase', async () => {
        // I am testing to see if supabase received the data
        const userEmail = 'travis@email.com';
        const pass = 'pass123';
        
        await login(userEmail, pass);

        jest.mock    

    })
})