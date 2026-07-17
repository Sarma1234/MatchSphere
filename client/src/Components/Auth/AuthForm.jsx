
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthForm({ login, setLogin }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async () => {

        try {

            if (login) {

                // LOGIN

                const response = await axios.post(
                    "http://localhost:5000/api/v1/auth/login",
                    {
                        email: formData.email,
                        password: formData.password,
                    }
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.data.user)
                );

                navigate("/discover");

            } else {

                // REGISTER

                await axios.post(
                    "http://localhost:5000/api/v1/auth/register",
                    formData
                );

                alert("Registration Successful!");

                setFormData({
                    fullName: "",
                    username: "",
                    email: "",
                    password: "",
                });

                setLogin(true);
            }

        } catch (error) {

            console.log(error);

            console.log(error.response);

            if (error.response) {

                alert(JSON.stringify(error.response.data, null, 2));

            } else {

                alert(error.message);

            }

        }

    };
    return (
        <div className="auth-form">

            <div className="tabs">
                <button
                    type="button"
                    className={login ? "active" : ""}
                    onClick={() => setLogin(true)}
                >
                    Login
                </button>

                <button
                    type="button"
                    className={!login ? "active" : ""}
                    onClick={() => setLogin(false)}
                >
                    Register
                </button>
            </div>

            {!login && (
                <>
                    <div className="field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    fullName: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="john_doe"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>
                </>
            )}

            <div className="field">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        })
                    }
                />
            </div>

            <div className="field">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value,
                        })
                    }
                />
            </div>

            <button
                type="button"
                className="primary-btn"
                onClick={handleSubmit}
            >
                {login ? "Login" : "Create Account"}
            </button>

            <div className="divider">
                <span>or continue with</span>
            </div>

            <button
                type="button"
                className="google-btn"
            >
                Continue with Google
            </button>

        </div>
    );
}