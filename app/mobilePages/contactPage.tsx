import react from 'react';
import ContactForm from '../Components/InquiryForm';
import Link from 'next/link';
import Image from 'next/image';
import Mfooter from '../Components/footerM';

const McontactPage = () => {

    return (

        <section id="contact" className="flex h-screen items-center mt-2 pb-10 mb-10">
           <div className='mx-auto'>
                <div className="flex justify-center items-center ">
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <img
                  src="./bgpenta.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                  
                />

                {/* Form Overlay */}
                <div className="absolute inset-0 flex items-center justify-start">
                <div className="flex justify-center items-center ">
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <img
                  src="./bgpenta.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                  
                />

                {/* Form Overlay */}
                <div className="absolute inset-0 flex items-center justify-start">
                 <ContactForm />
                </div>
              </div>

              </div>
                </div>
              </div>

              </div>
              </div>
        </section>
    );
};

export default McontactPage;