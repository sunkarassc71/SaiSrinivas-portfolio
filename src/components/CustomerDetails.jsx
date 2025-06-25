import React, { useState,useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const CustomerDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [status, setStatus] = useState("");
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus(""); // clear after 5 seconds
            }, 5000); // 5,000ms = 5s

            return () => clearTimeout(timer); // cleanup on unmount/change
        }
    }, [status]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseURL}/users`, formData);
            setStatus("✅Deatils Submitted Succesfully");
            setFormData({ name: "", email: "", phone: "" });
        } catch (err) {
            setStatus("❌ Failed to save user.");
            console.error(err);
        }
    };

    return (
        <div className="p-8 w-full max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center text-violet-500">
                Customer Details
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
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Submit
                </button>
            </form>

            {status && (
                <p className="mt-4 text-center text-sm text-green-600 font-medium">
                    {status}
                </p>
            )}
        </div>
    );
};

export default CustomerDetails;
