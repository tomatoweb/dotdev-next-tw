import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {toast, Toaster} from 'sonner'  // npm install sonner

const CloseIcon = () => (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
            stroke="lightGray"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.25 6.75L6.75 17.25"
        />
        <path
            stroke="lightGray"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.75 6.75L17.25 17.25"
        />
    </svg>
);


export default function ContactForm() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    
    // textarea max 100 chars
    const [value, setValue] = useState('')    
    const handleChange = (event: any) => {
        const shouldSetValue = value.length < 1000        
        if (shouldSetValue) setValue(event.target.value)
    }
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const recaptchaResponse = e.target['g-recaptcha-response'].value;
        if (!isCaptchaValid) {
            toast.error("Please complete the reCAPTCHA.");
            return;
        }
        if (!email || !subject || !message) {
            toast.error("Please fill in all fields.");
            return;
        }
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    subject,
                    message,
                    recaptchaResponse,
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Message sent successfully!");
            toast.success("Message sent successfully!");
            //setIsOpen(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to send message. Please try again later.");
        }
        e.target.reset(); // Reset the form fields
        setIsCaptchaValid(false); // Reset the reCAPTCHA state
        setValue('') // Reset the textarea value
    }

    return (
        <>
            <Toaster position="top-right" richColors closeButton={false} />
            <div className="flex justify-center mb-6">
                <button
                    className=" hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setIsOpen(true)}>
                    Contact Me
                </button>
                {isOpen ? (
                    <>
                        <div className="backdrop" onClick={() => setIsOpen(false)}></div>
                        <div className="dialog">
                            <section className=" rounded-xl bg-white dark:bg-gray-900">
                                <div className="py-8 lg:py-16 px-16 mx-auto">
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact me</h2>
                                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a question, need a technical support for your website? Want to improve your existing website? Need a brand new modern website? Let me know.</p>
                                    <form 
                                        onSubmit={handleSubmit} 
                                        className="space-y-8"
                                        >
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="name@example.com" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
                                            <textarea
                                                id="message"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Leave a comment..."
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <button type="submit" disabled={!isCaptchaValid} className="py-3 px-5 text-sm font-medium text-center text-gray-900 dark:text-gray-300 ring-1 ring-gray-400 rounded-lg sm:w-fit hover:bg-gray-300 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                            Send message
                                        </button>
                                        <ReCAPTCHA
                                            sitekey="6LeaNX4rAAAAALnUw8U7cximjfVtYnb7d7e_FDK6"
                                            onChange={(value: any) => setIsCaptchaValid(!!value)}
                                        />
                                    </form>
                                </div>
                            </section>
                            <button className="close" onClick={() => setIsOpen(false)}>
                                <CloseIcon />
                            </button>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
}
