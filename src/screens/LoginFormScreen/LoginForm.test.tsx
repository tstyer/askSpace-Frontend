/* Tests to include: 

1. It renders.
2. It allows text input.
3. It displays error on incorrect input/missing fields.
4. Login success

*/

import React from "react";
import { screen, render } from '@testing-library/react-native';
import { LoginFormScreen } from './LoginFormScreen';

describe('LoginFormScreen renders', () => {

    beforeEach( () => {
        render(<LoginFormScreen />);
    })

    // 1. See the screen loads with empty tag
    test('login screen renders', () => {
    
        expect(screen.getByText("Log in")).toBeTruthy();
    })

    // 2. Header component renders
    test('components render', () => {

        expect(screen.getByText('AskSpace')).toBeTruthy();
    })

    // 3. Footer component renders
    test('Footer component renders', () => {

        expect(screen.getByText('by Onavi')).toBeTruthy();
    })

    // 4. Email input renders
    test('email and password inputs render', () => {

        expect(screen.getByPlaceholderText('Email')).toBeTruthy();
    })

    // 5. Password input renders
    test('password placeholder text appears', () => {
        
        expect(screen.getByPlaceholderText('Password')).toBeTruthy();
    })

})

/*

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