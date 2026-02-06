import { useState } from "react";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [step, setStep] = useState(1);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            {/* Outer glow */}
            <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/30 to-purple-500/30 blur-2xl"></div>

                {/* Glass Card */}
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 text-white">

                    {/* Toggle */}
                    <div className="flex bg-white/10 rounded-full p-1 mb-8">
                        <button
                            className={`w-1/2 py-2 rounded-full transition font-medium ${isLogin ? "bg-white/30 shadow" : "opacity-70"
                                }`}
                            onClick={() => {
                                setIsLogin(true);
                                setStep(1);
                            }}
                        >
                            Login
                        </button>
                        <button
                            className={`w-1/2 py-2 rounded-full transition font-medium ${!isLogin ? "bg-white/30 shadow" : "opacity-70"
                                }`}
                            onClick={() => {
                                setIsLogin(false);
                                setStep(1);
                            }}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* LOGIN */}
                    {isLogin && (
                        <form className="space-y-6">
                            <h2 className="text-3xl font-semibold text-center">
                                Welcome Back 👋
                            </h2>
                            <p className="text-center text-white/70 text-sm">
                                Login to continue your journey
                            </p>

                            <input
                                type="email"
                                placeholder="Email"
                                className="input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input"
                            />

                            <button className="btn-primary">
                                Login
                            </button>
                        </form>
                    )}

                    {/* SIGNUP */}
                    {!isLogin && (
                        <form className="space-y-6">
                            {step === 1 && (
                                <>
                                    <h2 className="text-3xl font-semibold text-center">
                                        Create Account ✨
                                    </h2>
                                    <p className="text-center text-white/70 text-sm">
                                        Join us and explore more
                                    </p>

                                    <input type="text" placeholder="Full Name" className="input" />
                                    <input type="email" placeholder="Email" className="input" />
                                    <input type="password" placeholder="Password" className="input" />

                                    <label className="flex items-center gap-2 text-sm text-white/80">
                                        <input type="checkbox" className="accent-indigo-500" />
                                        I agree to Terms & Conditions
                                    </label>

                                    <button
                                        type="button"
                                        className="btn-primary"
                                        onClick={() => setStep(2)}
                                    >
                                        Next →
                                    </button>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h2 className="text-3xl font-semibold text-center">
                                        Your Profile 🚀
                                    </h2>
                                    <p className="text-center text-white/70 text-sm">
                                        Tell us about yourself
                                    </p>

                                    <textarea
                                        placeholder="Short bio..."
                                        className="input h-28 resize-none"
                                    />

                                    <button className="btn-primary">
                                        Create Account
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-full text-sm text-white/70 hover:text-white transition"
                                    >
                                        ← Go Back
                                    </button>
                                </>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
