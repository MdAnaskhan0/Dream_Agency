import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    // State to manage the success message
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const formSubmit = (data) => {
        console.log("Form Submitted:", data);

        // Show success message
        setSuccessMessage('Your message has been sent successfully!');

        // Reset form values to default
        reset();

        // Optional: Clear the success message after a few seconds
        setTimeout(() => setSuccessMessage(''), 5000); // Clears the message after 5 seconds
    };

    return (
        <div id='contact' className='mt-[150px]'>
            {/* Title Section */}
            <div className='text-center mb-8'>
                <p className='text-xl tracking-widest my-4'>Contact Us</p>
                <h3 className='text-4xl font-bold my-4'>Let's Join Us</h3>
            </div>

            {/* Form Section */}
            <div className="flex items-center justify-center">
                <div className="p-8 max-w-6xl w-full mx-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Side (1/3) - Contact Info */}
                    <div className="col-span-1 flex flex-col justify-center space-y-6">
                        <div className="text-left">
                            <h3 className="font-semibold text-2xl">Address</h3>
                            <p className="text-[#717e96]">1234 Street Name,<br /> City, State, 12345</p>
                        </div>

                        <div className="text-left">
                            <h3 className="font-semibold text-2xl">Phone</h3>
                            <p className="text-[#717e96]">+1 (234) 567-8901</p>
                        </div>

                        <div className="text-left">
                            <h3 className="font-semibold text-2xl">Email</h3>
                            <p className="text-[#717e96]">info@yourwebsite.com</p>
                        </div>
                    </div>

                    {/* Right Side (2/3) - Contact Form */}
                    <div className="col-span-2">
                        <form className="space-y-6" onSubmit={handleSubmit(formSubmit)}>
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Name"
                                    {...register("name", {
                                        required: "Please fill your name.",
                                        validate: {
                                            isName: (value) => value === "admin" || value === "test" ? "Enter your actual name." : true,
                                            nameLength: (value) => value.length <= 4 ? "Name must contain at least 4 characters" : true,
                                        }
                                    })}
                                />
                                <p className="text-red-500">{errors.name?.message}</p>
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Email"
                                    {...register("email", {
                                        required: "Please enter your email.",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Invalid email address.",
                                        },
                                        validate: {
                                            blockEmail: (value) => ["test@email.com", "admin@admin.com"].includes(value) ? "Use another email." : true,
                                            emailLength: (value) => value.length < 8 || value.length > 25 ? "Email must be between 8 and 25 characters." : true
                                        }
                                    })}
                                />
                                <p className="text-red-500">{errors.email?.message}</p>
                            </div>

                            {/* Subject Input */}
                            <div>
                                <input
                                    type="text"
                                    id="subject"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Subject"
                                    {...register("subject", {
                                        required: "Please fill the subject.",
                                        validate: {
                                            nameLength: (value) => value.length <= 10 ? "Subject must contain at least 10 characters." : true
                                        }
                                    })}
                                />
                                <p className="text-red-500">{errors.subject?.message}</p>
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your message"
                                    {...register("message", {
                                        required: "Please enter your message."
                                    })}
                                ></textarea>
                                <p className="text-red-500">{errors.message?.message}</p>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#415678] hover:bg-[#99A4B6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Success Message */}
                        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
