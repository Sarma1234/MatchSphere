import { useState } from "react";
import "../components/auth/Auth.css";

import AuthLeft from "../components/auth/AuthLeft";
import AuthForm from "../components/auth/AuthForm";

function Auth() {
    const [login, setLogin] = useState(true);

    return (
        <div className="auth-page">
            <div className="bg-glow glow1"></div>
            <div className="bg-glow glow2"></div>

            <div className="auth-shell glass">
                <AuthLeft />

                <AuthForm
                    login={login}
                    setLogin={setLogin}
                />
            </div>
        </div>
    );
}

export default Auth;