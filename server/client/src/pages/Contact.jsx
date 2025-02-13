import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsChatTextFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import {  Modal } from 'antd';
import axios from 'axios';
import QuillEditor from '../components/QuillEditor/QuillEditor.jsx';
import { AiOutlineClose } from 'react-icons/ai';
import { SOCIAL_LINKS } from '../constants/constants.jsx';
import api from '../utils/api.js';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messageStatus, setMessageStatus] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
   
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email?.value;
        const subject = e.target.subject?.value; 
        const message = e.target.message?.value;
    
        console.log(email);
        console.log(subject, message);
        // Check if any field is empty
        if (!email) {
            alert("Email is required!");
            return;
        }
        if (!subject) {
            alert("Subject is required!");
            return;
        }
        if (!message || message===null) {
            alert("Message is required!");
            return;
        }
        setIsLoading(true);
        setMessageStatus(''); // Clear previous message status

        try {
            const response = await api.post('/sendEmail', {
                email,
                subject,
                message,
            });

            if (response.data.success) {
                setMessageStatus('success');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setMessageStatus('failed');
            }
           
        } catch (error) {
            setMessageStatus('failed');
        }

        setIsOpen(true); // Open modal
        setIsLoading(false); // Hide loader after response
    };

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className="text-lg font-bold">Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Country:</span>
                                <span className="text-LightGray md:text-sm">Germany</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">City:</span>
                                <span className="text-LightGray md:text-sm">Heidelberg</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Company:</span>
                                <span className="text-LightGray md:text-sm">Freelance</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Email:</span>
                                <span className="text-LightGray text-sm">mbilalhussain8473@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Linkedin:</span>
                                <span className="text-LightGray text-sm">muhammad-bilal-hussain-399368191</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">WhatsApp:</span>
                                <span className="text-LightGray text-sm">+49 15906340952</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-blue-700 hover:text-blue-500' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a href={SOCIAL_LINKS.YOUTUBE} target='_blank' rel='noreferrer' className='hover:scale-125 text-red-600 hover:text-red-500'> <FaYoutube/> </a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className="text-lg font-bold">Get In Touch</h1>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div
                                        id="icon"
                                        className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                                    >
                                        <HiMail />
                                    </div>
                                    <input
                                        name="fromEmail"
                                        type="email"
                                        autoComplete="new-password"
                                        className="input_stylings "
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mailIcon relative mb-6">
                                <div
                                    id="icon"
                                    className="text-gray-600 absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                                >
                                    <HiMail />
                                </div>
                                <input
                                    name="default-email"
                                    type="email"
                                    className="input_stylings cursor-not-allowed text-gray-600"
                                    placeholder="mbilalhussain8473@gmail.com"
                                    value="mbilalhussain8473@gmail.com"
                                    readOnly
                                />
                                </div>


                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div
                                        id="icon"
                                        className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                                    >
                                        <BsChatTextFill />
                                    </div>
                                    <input
                                        name="subject"
                                        type="text"
                                        autoComplete='off'
                                        className="input_stylings"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div
                                        id="icon"
                                        className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                                    >
                                        <BsChatTextFill />
                                    </div>
                                    
                                    <QuillEditor
                                     value={message}
                                     onChange={setMessage}
                                     theme="snow"
                                     placeholder="Type your message here..."
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <button type="submit" className="button">
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </form>
                  
                </div>
            </div>

            {/* Success or Failure Modal */}
            <Modal
                className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
                centered
                open={isOpen}
                footer={null}
                closable
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
                closeIcon={<AiOutlineClose className="text-white text-2xl" />}
            >
                <div className="flex flex-col items-center justify-center">
                    {isLoading ? (
                        <div className="loader">Loading...</div>
                    ) : messageStatus === 'success' ? (
                        <>
                            <h1 className="text-Green font-bold text-2xl">Success</h1>
                            <p className="text-Snow">Your message has been sent. Please keep patience for the response. I will get back to you as soon as possible.</p>
                        </>
                    ) : (
                        <>
                            <h1 className="text-red-600 font-bold text-2xl">Failed</h1>
                            <p className="text-Snow">There was an issue sending your message. Please try again later.</p>
                        </>
                    )}
                </div>
            </Modal>
            <Footer />
        </BannerLayout>
    );
};

export default Contact;







// import { useState } from 'react';
// import BannerLayout from '../components/Common/BannerLayout';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { SiUpwork } from 'react-icons/si'
// import { HiMail, HiUser } from 'react-icons/hi'
// import { BsChatTextFill } from 'react-icons/bs'
// import Fiverr_Icon from '../components/Fiverr_Icon';
// import Footer from '../components/Footer';
// import { Modal } from 'antd';
// import { CONTACTS } from '../constants/constants';

// const Contact = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <BannerLayout>
//             <div className=" px-4 py-2">
//                 <div className="my-6 text-Snow flex flex-col gap-y-5">
//                     <h1 className='text-lg font-bold'>Contact Information</h1>
//                     <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
//                         <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Country:</span>
//                                 <span className='text-LightGray md:text-sm'>Germany</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>City:</span>
//                                 <span className='text-LightGray md:text-sm'>Heidelberg</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Company:</span>
//                                 <span className='text-LightGray md:text-sm'>Freelance</span>
//                             </div>
//                         </div>
//                         <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Email:</span>
//                                 <span className='text-LightGray text-sm'>mbilalhussain8473@gmail.com</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Linkedin:</span>
//                                 <span className='text-LightGray text-sm'>muhammad-bilal-hussain-399368191</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>WhatsApp:</span>
//                                 <span className='text-LightGray text-sm'>+49 15906340952</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
//                     <a className='hover:scale-125 ease-in-out duration-700' href={`mailto:${CONTACTS.EMAIL}`} target='_blank' rel="noreferrer"><HiMail /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/mbilalhussain15" target='_blank' rel="noreferrer"><FaGithub /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/muhammad-bilal-hussain-399368191/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
//                     {/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
//                     {/* <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/codeworthy" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a> */}
//                 </div>


//                 <div className="my-12 w-full h-auto text-Snow">
//                     <h1 className='text-lg font-bold'>Get In Touch</h1>
//                     <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
//                         <div>
//                             <div className="flex flex-col w-full">
//                                 <div className="userIcon relative mb-6">
//                                     <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
//                                         <HiUser />
//                                     </div>
//                                     <input type="text" className="input_stylings" placeholder="Name" />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <div className="mailIcon relative mb-6">
//                                     <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
//                                         <HiMail />
//                                     </div>
//                                     <input type="text" className="input_stylings" placeholder="Email" />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <div className="textIcon relative mb-6">
//                                     <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
//                                         <BsChatTextFill />
//                                     </div>
//                                     <textarea rows={6} cols={50} className="input_stylings" placeholder="Message" />
//                                 </div>
//                             </div>

//                             <div className="my-4">
//                                 <button onClick={() => setIsOpen(true)} className="button"> SEND MESSAGE </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* success modal */}
//             <Modal
//                 className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
//                 // wrapClassName='bg-red-800'
//                 centered
//                 open={isOpen}
//                 footer={null}
//                 closable={false}
//                 onOk={() => setIsOpen(false)}
//                 onCancel={() => setIsOpen(false)}
//             >
//                 <div className='flex flex-col items-center justify-center'>
//                     <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
//                     <a className='underline text-Snow' target='_blank' href='https://github.com/mbilalhussain15'>Be the one to integrate this!</a>
//                 </div>
//             </Modal>
//             <Footer />
//         </BannerLayout>

//     )
// }

// export default Contact