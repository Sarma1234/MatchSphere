export default function AuthForm({
    login,
    setLogin,
}) {
    return (
        <div className="auth-form">

            <div className="tabs">

                <button
                    className={login ? "active" : ""}
                    onClick={() => setLogin(true)}
                >
                    Login
                </button>

                <button
                    className={!login ? "active" : ""}
                    onClick={() => setLogin(false)}
                >
                    Register
                </button>

            </div>

            {!login && (
                <div className="field">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                    />
                </div>
            )}

            <div className="field">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                />
            </div>

            <div className="field">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                />
            </div>

            <button className="primary-btn">
                {login ? "Login" : "Create Account"}
            </button>

            <div className="divider">
                <span>or continue with</span>
            </div>

            <button className="google-btn">
                Continue with Google
            </button>

        </div>
    );
}