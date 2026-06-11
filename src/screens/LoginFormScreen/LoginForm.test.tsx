/* Tests to include: 

1. It renders.
2. It allows text input.
3. It displays error on incorrect input/missing fields.
4. Login success

*/

import React from "react";
import { screen, render } from '@testing-library/react-native';
import { LoginFormScreen } from './LoginFormScreen';

describe(LoginFormScreen, () => {

    // 1. See the screen loads with empty tag
    test('login screen renders', () => {
        render(<LoginFormScreen />);

        expect(Text).toBeEmptyElement();
    })

    // 2. See components and input boxes load
    test('components render', () => {
        render(<LoginFormScreen />);

        expect('<Header />').toBeTruthy();
        expect('Footer />').toBeTruthy();
    })
})




/* Learning Notes:
    A unit test would need to contain at least one assertion. 
    After you render something, you would need to make an assertion. 

*/