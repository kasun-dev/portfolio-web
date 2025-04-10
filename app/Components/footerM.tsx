import React from "react";
import Image from "next/image";

const Mfooter = () => {
  return (
    <footer>
      <hr/>
      <div className="flex justify-center gap-5 mb-5 mt-5">
      <hr/>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=ks2005755@gmail.com&su=Contact%20through%20the%20portfolio&body=Add%20your%20concerns"
    className="flex items-center text-yellow-300 hover:text-yellow-500"
  >
    <Image
      src="./at.png"
      width={18}
      height={18}
      alt="email"
      className="mr-2"
    />
  </a>
  
  <a
    href="https://wa.me/qr/CD35YS53WK6JP1"
    className="flex items-center text-yellow-300 hover:text-yellow-500"
  >
    <Image
      src="./whatsapp.png"
      width={18}
      height={18}
      alt="whatsapp"
      className="mr-2"
    />
  </a>

  <a
    href="https://www.linkedin.com/in/kasun-jayamaha-32963829b/"
    className="flex items-center text-yellow-300 hover:text-yellow-500"
  >
    <Image
      src="./linkedin.png"
      width={18}
      height={18}
      alt="linkedin"
      className="mr-2"
    />
  </a>

  <a
    href="https://github.com/kasun-dev"
    className="flex items-center text-yellow-300 hover:text-yellow-500"
  >
    <Image
      src="./github.png"
      width={18}
      height={18}
      alt="github"
      className="mr-2"
    />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=100031979594182&mibextid=ZbWKwL"
    className="flex items-center text-yellow-300 hover:text-yellow-500"
  >
    <Image
      src="./facebook.png"
      width={18}
      height={18}
      alt="facebook"
      className="mr-2"
    />
  </a>

  <a
    href="https://www.instagram.com/kx.0023/"
    className="flex items-center text-yellow-300 hover:text-yellow-500"
  >
    <Image
      src="./instagram.png"
      width={18}
      height={18}
      alt="instagram"
      className="mr-2"
    />
  </a>
</div>

        <div className='text-center text-sm bg-black bg-opacity-50 pz-5 md'>
            <p>© 2024 Kasun Jayamaha. All rights reserved.</p>
            <p>Built with React and Tailwind CSS | Hosted on Github pages</p>
        </div> 
    </footer>
  );
};

export default Mfooter;