/* Tests to include: 

1. It renders.
2. It allows text input.
3. It displays error on incorrect input/missing fields.
4. Login success

*/

import React from "react";
import { screen, render, fireEvent } from '@testing-library/react-native'; // Learning: fireEvent is an import needed to test to see if input fields's values change as expected
import { LoginFormScreen } from '../LoginFormScreen';

describe('LoginFormScreen renders', () => {

    beforeEach( async () => {
        // Not typical to put render as await, but was for this case
        await render(<LoginFormScreen />);
    });

    // 1. Header component renders
    test('Header component renders', () => {

        expect(screen.getByText('askSpace')).toBeTruthy();
    })

    // 2. Footer component renders
    test('Footer component renders', () => {

        expect(screen.getByText('Onavi')).toBeTruthy();
    })

    // 3. Email input renders
    test('email and password inputs render', () => {

        expect(screen.getByPlaceholderText('Email')).toBeTruthy();
    })

    // 4. Password input renders
    test('password placeholder text appears', () => {
        
        expect(screen.getByPlaceholderText('Password')).toBeTruthy();
    })

})

// -- Login Input Functionality -- //

describe('Login input functionality works', () => {

    beforeEach( async () => {
        await render(<LoginFormScreen />);
    })

    test('email input updates state', () => {
        const emailInput = screen.getByPlaceholderText('Email');

        fireEvent.changeText(emailInput, 'example@email.com'); // change text of the emailInput variable to '...'.
        
        expect(emailInput.props.value).toBe('example@email.com') // 'props' = properties, the value is expected to be ... 
    })

    test('password input updates state', () => {
        const passInput = screen.getByPlaceholderText('Password');

        fireEvent.changeText(passInput, 'test123');

        expect(passInput.props.value).toBe('test123');
    })

    test('login button is disabled when no details have been entered', () => {

        const loginBtn = screen.getByTestId('loginBtnID');

        expect(loginBtn.props.disabled).toBeTruthy();

    });

    test('login button becomes enabled when email and password are entered', () => {

    // Find email input

    // Find password input

    // Type into both

    // Find login button

    // Assert that it is now enabled

    });
    /* Tests
✓ loading spinner appears
✓ pressing login calls your login function
✓ invalid email shows validation error
✓ empty password shows validation error
    */
})

/*

# NEXT: Write tests/to-do for login success - this will require creating data tables in <SQL/Supabase>
# Users login credentials are stored in a protected authentication table, managed by Supabase.
describe('async function tests', () => {

#   1. using resolve to await expected data upon 'Login' success

    
    Example:

    You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

    test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
    });
    
    
})

*/




/* Learning Notes:
    1. A unit test would need to contain at least one assertion. 
       After you render something, you would need to make an assertion. 

    2. If you import components and you want to test them, 
       you can do so by testing what the component is comprised of, such as buttons, text, ext. 

*/