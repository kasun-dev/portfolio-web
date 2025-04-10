import react from 'react';
import ContactForm from '../Components/InquiryForm';
import Link from 'next/link';
import Image from 'next/image';

const contactPage = () => {

    return (

        <section id="contact" className="flex h-screen items-center ">
            {/* Two-column layout */}
            <div className="grid grid-cols-2 w-full px-10">
              {/* Column 1 - Welcome Note */}
              <div className="flex flex-col justify-center ml-20">
                <h1 className="text-white text-3xl font-bold mb-5">Contact Information</h1>

                <table className="table-fixed text-yellow-300 ml-20 ">
                  
                  <tbody>
                    <tr>
                      <td className='flex flex-row mt-4'>
                      <Image 
                        src="./at.png" 
                        width={18} 
                        height={18} 
                        alt="downarrow" 
                        className="ml-1 mb-5" 
                      />
                         </td>
                      <td>
                        <Link href={'https://mail.google.com/mail/?view=cm&fs=1&to=ks2005755@gmail.com&su=Contact%20through%20the%20portfolio&body=Add%20your%20concerns'}
                          className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                          ks2005755@gmail.com
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./whatsapp.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://wa.me/qr/CD35YS53WK6JP1'}
                            className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                            (+94) 76 085 3136
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./linkedin.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://www.linkedin.com/in/kasun-jayamaha-32963829b/'}
                              className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                              www.linkedin.com/kasun-jayamaha
                        </Link>
                        </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./github.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://github.com/kasun-dev'}
                                    className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                                    www.github.com/kasun-dev
                        </Link>
                      
                       </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./facebook.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://www.facebook.com/profile.php?id=100031979594182&mibextid=ZbWKwL'}
                                className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                                 www.facebook.com/don-kasun-jayamaha
                        </Link>
                        </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./instagram.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://www.instagram.com/kx.0023/'}
                                  className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                                  www.instagram.com/kx.0023
                        </Link>
                        
                        </td>
                    </tr>
                    

                  </tbody>
                </table>

               
              </div>

              
              <div className="flex justify-center items-center ">
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <img
                  src="./bgpenta.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                  
                />

                {/* Form Overlay */}
                <div className="absolute inset-0 flex items-center justify-start ml-20">
                 <ContactForm />
                </div>
              </div>

              </div>
            </div>
            <div>
            
            </div>
          </section>
    );
};

export default contactPage;