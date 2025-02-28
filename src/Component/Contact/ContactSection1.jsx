import React, { useState } from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { db } from '../../firebase.config'; // Import the Firestore instance
import { collection, addDoc } from 'firebase/firestore'; // Import the necessary functions from Firestore

const ContactSection1 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state during submission

    const handleMessage = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set the submitting state to true

        try {
            // Add the contact data to Firestore
            const docRef = await addDoc(collection(db, 'contacts'), {
                name: name,
                email: email,
                number: number,
                message: message
            });
            alert('Message has been submitted');
            // Clear form fields after submission
            setName('');
            setEmail('');
            setNumber('');
            setMessage('');
        } catch (error) {
            alert('Error submitting message: ' + error.message);
        } finally {
            setIsSubmitting(false); // Reset the submitting state
        }
    };

    return (
        <section>
            <div className='container mx-auto px-5 md:px-0'>
                <div className='md:flex justify-between'>


                <div className=' md:w-[42%]'>
                    <div className='py-6 '>
                        <div className='flex gap-3 items-center py-3'>
                            <p className='bg-amber-700 text-white text-2xl rounded-full px-2 py-2'><FaPhoneFlip /> </p>
                            <h3 className='text-xl font-bold'>Call to us</h3>
                        </div>
                        <p className='md:text-xl px-2 py-2'>We are available 24/7, 7 days a week.</p>
                        <p className='md:text-xl px-2'>Phone: +8801707256246</p>
                    </div>
                    <div>
                        <div className='flex gap-3 items-center py-3'>
                            <p className='bg-amber-700 text-white text-2xl rounded-full px-2 py-2'><CiMail /> </p>
                            <h3 className='text-xl font-bold'>Write to us</h3>
                        </div>
                        <p className='md:text-xl px-2 py-2'>
                            Fill out our form and we will contact you within 24 hours. 
                        </p>
                        <p className='md:text-xl px-2 '>Email: mdhabibulla552272@gmail.com</p>
                    </div>
                </div>

                <div className='md:w-[55%]'>
                    <form action="" onSubmit={handleMessage}>
                        <div className='flex flex-col md:flex-row md:flex-wrap gap-5 my-5'>
                            <input className=" outline-none  bg-gray-200  px-3 py-2 rounded-xl mx-2 md:mx-0 " 
                                type="text" 
                                placeholder='Your Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                            />
                            <input className='outline-none bg-gray-200 px-3 py-2 rounded-xl mx-2 md:mx-0'
                                type="email" 
                                placeholder='Your Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <input className='outline-none bg-gray-200 px-3 py-2 mx-2 md:mx-0 rounded-xl '
                                type="number" 
                                placeholder='Your Phone *' 
                                value={number}
                                onChange={(e) => setNumber(e.target.value)} 
                            />
                        </div>

                        <div>
                        <textarea  className='outline-none bg-gray-200 px-3 py-2 w-[80%] mx-auto  md:mx-0 rounded-xl mt-1'
                            placeholder='Write your Message' 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                        ></textarea>
                        </div>

                        <button 
                            className='px-2 py-2 rounded-2xl bg-rose-400 my-5 mx-2 md:mx-0' 
                            type='submit' 
                            disabled={isSubmitting} // Disable the button while submitting
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                </div>
            </div>
        </section>
    );
}

export default ContactSection1;
