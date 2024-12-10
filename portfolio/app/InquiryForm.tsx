    import { useState } from "react";

    const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);

        const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSc2aCuFsjK5n8R9aRmpiOhruipe0iG_nO8n7yjjRVXCwjebnw/formResponse";

        const formBody = new URLSearchParams({
        "entry.1825895740": formData.name, // Replace with your field IDs
        "entry.11226799": formData.email,
        "entry.674492514": formData.message,
        });

        try {
        const response = await fetch(googleFormUrl, {
            method: "POST",
            body: formBody,
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        if (response.ok || response.status === 0) {
            setStatus("Form submitted successfully!");
        } else {
            setStatus("Failed to submit the form. Please try again.");
        }
        } catch (error) {
        setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <div>
                    <form onSubmit={handleSubmit} className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-10">Inquiry Form</h2>
                        <div className="mb-4">
                        
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-5 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300 bg-black text-yellow-300"
                            placeholder="Enter your name"
                        />
                        </div>
                        <div className="mb-4">
                        
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-black text-yellow-300 mt-10 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300 "
                            placeholder="Enter your email"
                        />
                        </div>
                        <div className="mb-4">
                        
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-10 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-300 bg-black text-yellow-300"
                            placeholder="Your message here"
                        ></textarea>
                        </div>
                        <div className='flex justify-end mr-20'>

                        <button
                            type="submit"
                            className=" border border-yellow-300 px-4 py-1 rounded-md text-m text-yellow-300 hover:text-black hover:bg-yellow-300"
                        >
                            Submit
                        </button>

                        </div>
                        
                    </form>
        </div>
    );
    };

    export default ContactForm;
