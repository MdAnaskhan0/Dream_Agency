import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdSettings } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-[1100px]">
                {/* Logo and Description */}
                <div>
                    <div className="flex items-center space-x-3">
                        {/* Placeholder for logo */}
                        <div className= "w-12 h-12 rounded-full flex items-center justify-center">
                            <img src="public/logo.png" alt="" />
                        </div>
                    </div>
                    <p className="mt-4 text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, accusamus.
                    </p>
                </div>

                {/* About */}
                <div>
                    <h3 className="text-lg font-bold text-white">About</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#about" className="hover:underline">About us</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-bold text-white">Support</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center space-x-2">
                            <MdEmail /> <span>support@example.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MdPhone /> <span>+61 3 8376 6284</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MdSettings /> <span>Services</span>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-bold text-white">Follow us</h3>
                    <ul className="mt-4 flex space-x-4">
                        <li><a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p>Copyright © All Right Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
