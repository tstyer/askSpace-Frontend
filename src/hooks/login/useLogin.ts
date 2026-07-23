import { useState } from "react";
import { login } from "../../services/login/authServices";

export function useLogin() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    async function handleLogin() {
        console.log("login pressed");

        setLoading(true);

        try {
            const data = await login(email, password);
            console.log("Login succeeded:", data);
            setError(null);

        } catch (err) {
            console.log("Login failed. Incorrect / Unauthorised credentials.");
            console.log("Error details:", err);
            setError((err as Error).message);

        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        loading,
        error,
        handleLogin,
    };
}