import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            email === "admin@steelnova.com" &&
            password === "admin123"
        ) {
            localStorage.setItem("adminToken", "steelnova-admin");

            navigate("/admin/dashboard");
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

                <h1 className="mb-8 text-center text-3xl font-bold">
                    Admin Login
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border p-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-lg border p-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Login;