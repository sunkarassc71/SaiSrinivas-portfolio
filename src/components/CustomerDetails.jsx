import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const CustomerDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (status || error) {
            const timer = setTimeout(() => {
                setStatus("");
                setError("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status, error]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validatePhone = (phone) => {
        // Simple validation: 10-15 digits, can start with +
        return /^\+?\d{10,15}$/.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!validatePhone(formData.phone)) {
            setError("Please enter a valid phone number (10-15 digits, optional +)");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${baseURL}/users`, formData);
            setStatus("✅ Details Submitted Successfully");
            setFormData({ name: "", email: "", phone: "" });
        } catch (err) {
            setError("❌ Failed to save user.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 w-full max-w-lg bg-gradient-to-b from-indigo-100 via-white to-violet-100 mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-violet-500">
                Get In Touch
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="loader mr-2"></span>
                    ) : null}
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>

            {status && (
                <p className="mt-4 text-center text-sm text-green-600 font-medium">
                    {status}
                </p>
            )}
            {error && (
                <p className="mt-4 text-center text-sm text-red-600 font-medium">
                    {error}
                </p>
            )}
            <style>{`
                .loader {
                  border: 2px solid #f3f3f3;
                  border-top: 2px solid #6366f1;
                  border-radius: 50%;
                  width: 16px;
                  height: 16px;
                  animation: spin 1s linear infinite;
                  display: inline-block;
                }
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default CustomerDetails;
