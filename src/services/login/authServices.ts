// This is a layer that will talk with supabase
// will not need to import React from "react" as not UI

import { error } from "node:console";
import { supabaseClient } from "../../supabase/createClient";

export async function login(email: string, password: string) {

    // throwing error is credentials are missing:
    if(email) {
        console.log("email supplied");

        // only enter nested when email is truthy, otherwise straight to falsey in outter. 
        if(password) {
            console.log("password supplied");
        } else {
            throw new Error("Password required.");
        };

    } else {
        throw new Error("Email is required."); // test written asks for this throw error message specifically. 
    };

    // Sending credentials to Supabase:
    const result = await supabaseClient.auth.signInWithPassword({ email, password }); // labelled 'result' because I am receiving a response from supabase on credentials supplied

    const { data, error } = result;

    if(error) { // if error is truthy, then throw error. 
        throw error;
    } else {
        return data;
    }
};


export async function logout() {

}

export async function register() {

}

export async function refresh() {

}

export async function getCurrentUser() {

}

/*
    login()
    logout()
    refresh()
    getCurrentUser()
    resetPassword()
    register()
*/

/*  Learning:
    
    # A shorter version of the nested loop in the login function is:
        # "if(!email) throw new Error( ... )"
        # "if(!password) throw new Error( ... )"

*/