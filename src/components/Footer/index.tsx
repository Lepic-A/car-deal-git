import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="border-t bg-[#090E34] border-[#8890A4] border-opacity-40 py-4">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-2/3 lg:w-1/2">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-block max-w-[160px]">
                <Image
                  src="/images/logo/cardea_white-Photoroom.png"
                  alt="Car Deal logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <div className="flex items-center space-x-4">
                <a
                  aria-label="Facebook"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-7 hover:text-white"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  aria-label="Twitter"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-7 hover:text-white"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-7 hover:text-white"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  aria-label="Instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-7 hover:text-white"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3 lg:w-1/2">
            <div className="my-1 flex justify-center md:justify-end">
              <p className="text-base text-gray-7">
                © 2024 Car Deal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
